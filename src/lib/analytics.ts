declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const AW_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
const BOOKING_LABEL = process.env.NEXT_PUBLIC_ADS_BOOKING_LABEL ?? "";
const CALL_LABEL = process.env.NEXT_PUBLIC_ADS_CALL_LABEL ?? "";
const WHATSAPP_LABEL = process.env.NEXT_PUBLIC_ADS_WHATSAPP_LABEL ?? "";

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  gtag("event", name, params);
}

export function trackBookingConversion(condition: string) {
  gtag("event", "generate_lead", {
    event_category: "OPD Booking",
    event_label: condition,
    currency: "INR",
    value: 500,
  });

  if (AW_ID && BOOKING_LABEL) {
    gtag("event", "conversion", {
      send_to: `${AW_ID}/${BOOKING_LABEL}`,
      value: 500,
      currency: "INR",
    });
  }
}

export function trackPhoneClick(page: string) {
  gtag("event", "click", {
    event_category: "Contact",
    event_label: "phone_call",
    page,
  });

  if (AW_ID && CALL_LABEL) {
    gtag("event", "conversion", {
      send_to: `${AW_ID}/${CALL_LABEL}`,
    });
  }
}

export function trackWhatsAppClick(page: string) {
  gtag("event", "click", {
    event_category: "Contact",
    event_label: "whatsapp",
    page,
  });

  if (AW_ID && WHATSAPP_LABEL) {
    gtag("event", "conversion", {
      send_to: `${AW_ID}/${WHATSAPP_LABEL}`,
    });
  }
}
