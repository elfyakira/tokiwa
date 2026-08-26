declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export const events = {
  formSubmit: (formName = "tokiwa_hp_contact", params: Record<string, unknown> = {}) =>
    trackEvent("form_submit", { form_name: formName, ...params }),
};
