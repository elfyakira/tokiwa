import { NextRequest, NextResponse } from 'next/server';
import { googleForm } from '@/lib/site';

type ContactType = 'product' | 'estimate' | 'recruit' | 'other';

const CONTACT_TYPE_LABELS: Record<ContactType, string> = {
  product: '製品に関するお問い合わせ',
  estimate: 'お見積りのご依頼',
  recruit: '採用に関するお問い合わせ',
  other: 'その他のお問い合わせ',
};

interface ContactFormData {
  type: ContactType;
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
  website?: string;
  formStartTime?: number;
}

// 平仮名・カタカナ・CJK統合漢字・拡張A・半角カタカナのいずれかが1文字でも含まれるか
const CJK_REGEX = /[぀-ゟ゠-ヿ一-鿿㐀-䶿ｦ-ﾟ]/;

// フォーム描画から送信までの最短許容時間 (ms)。これより短ければ bot 判定。
const MIN_SUBMIT_INTERVAL_MS = 3000;

function isLikelyBot(data: ContactFormData): { bot: boolean; reason?: string } {
  // 1. Honeypot: 隠しフィールドが埋まっていれば確実に bot
  if (data.website && data.website.trim().length > 0) {
    return { bot: true, reason: 'honeypot filled' };
  }

  // 2. 送信タイミング: フォーム描画から極端に短時間で送信されたら bot
  if (typeof data.formStartTime === 'number') {
    const elapsed = Date.now() - data.formStartTime;
    if (elapsed >= 0 && elapsed < MIN_SUBMIT_INTERVAL_MS) {
      return { bot: true, reason: `submitted too fast (${elapsed}ms)` };
    }
  } else {
    // formStartTime が欠落 = フォーム経由ではない直叩きの可能性
    return { bot: true, reason: 'missing formStartTime' };
  }

  // 3. 日本語必須: name / company / message のいずれにも CJK 文字が無ければ bot
  const combined = `${data.name ?? ''}${data.company ?? ''}${data.message ?? ''}`;
  if (!CJK_REGEX.test(combined)) {
    return { bot: true, reason: 'no CJK characters' };
  }

  return { bot: false };
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\-+() ]+$/.test(phone);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.type || !(data.type in CONTACT_TYPE_LABELS)) {
    errors.push({ field: 'type', message: 'お問い合わせ種別が不正です' });
  }

  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'お名前を入力してください' });
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'お名前は100文字以内で入力してください' });
  }

  if (data.company && data.company.length > 100) {
    errors.push({ field: 'company', message: '会社名は100文字以内で入力してください' });
  }

  if (!data.phone || !data.phone.trim()) {
    errors.push({ field: 'phone', message: '電話番号を入力してください' });
  } else if (!validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: '電話番号の形式が正しくありません' });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'メールアドレスを入力してください' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'メールアドレスの形式が正しくありません' });
  }

  // recruit の場合、message(=簡単な自己PR) は任意
  if (data.type !== 'recruit') {
    if (!data.message || !data.message.trim()) {
      errors.push({ field: 'message', message: 'お問い合わせ内容を入力してください' });
    } else if (data.message.trim().length < 10) {
      errors.push({ field: 'message', message: '10文字以上でご入力ください' });
    }
  }

  if (data.message && data.message.length > 5000) {
    errors.push({ field: 'message', message: '5000文字以内で入力してください' });
  }

  if (!data.consent) {
    errors.push({ field: 'consent', message: 'プライバシーポリシーへの同意が必要です' });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Bot 判定: サイレント拒否 (200 OK を返すが Google Form には投げない)
    // bot にエラーを返すと送信パターンを変えてくるため、成功したように見せかける
    const botCheck = isLikelyBot(body);
    if (botCheck.bot) {
      console.warn('Contact form: rejected as bot', botCheck.reason);
      return NextResponse.json({
        success: true,
        message: 'お問い合わせを受け付けました',
      });
    }

    const errors = validateFormData(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const typeLabel = CONTACT_TYPE_LABELS[body.type];
    const isRecruit = body.type === 'recruit';

    // Google Form のフィールドにマッピング
    // - 非recruit: message → お問い合わせ内容 のみ
    // - recruit:  message → 自己PR のみ（お問い合わせ内容は種別ラベルのみ）
    const googleMessage = isRecruit ? `【${typeLabel}】` : `【${typeLabel}】\n\n${body.message}`;
    const googleSelfPr = isRecruit ? body.message : '';

    const formData = new URLSearchParams();
    formData.append(googleForm.entries.name, body.name);
    if (body.company) {
      formData.append(googleForm.entries.company, body.company);
    }
    formData.append(googleForm.entries.phone, body.phone);
    formData.append(googleForm.entries.email, body.email);
    formData.append(googleForm.entries.message, googleMessage);
    if (googleSelfPr) {
      formData.append(googleForm.entries.selfPr, googleSelfPr);
    }
    if (body.consent) {
      formData.append(googleForm.entries.consent, googleForm.consentValue);
    }

    const response = await fetch(googleForm.formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok && response.status >= 500) {
      throw new Error(`Google Form submission failed: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: [
          {
            field: 'general',
            message: '送信中にエラーが発生しました。しばらく経ってから再度お試しください。',
          },
        ],
      },
      { status: 500 }
    );
  }
}
