declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const GA_TRACKING_ID = "AW-1000064987";
export const CALL_CONVERSION_SEND_TO = "AW-1000064987/1XVgCJLkp_AcENuP79wD";

// Click to call conversion reporter as specified in Google Ads
export const reportCallConversion = (url?: string): boolean => {
  if (typeof window !== "undefined") {
    if (typeof window.gtag_report_conversion === "function") {
      return window.gtag_report_conversion(url);
    }
    if (typeof window.gtag === "function") {
      const callback = () => {
        if (typeof url !== "undefined") {
          window.location.href = url;
        }
      };
      window.gtag("event", "conversion", {
        send_to: CALL_CONVERSION_SEND_TO,
        value: 5.0,
        currency: "SGD",
        event_callback: callback,
      });
      return false;
    }
  }
  return false;
};

// Helper to track custom events
export const trackEvent = (
  action: string,
  params?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};

// Helper to track Appointment Booking conversions for Google Ads
export const trackAppointmentConversion = (details?: {
  service?: string;
  method?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // Primary Google Ads Conversion Event
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/appointment_booking`,
      event_category: "Appointment",
      event_label: details?.service || "General Salon Appointment",
      value: details?.value || 1.0,
      currency: details?.currency || "SGD",
      ...details,
    });

    // Standard Google Analytics / GA4 event
    window.gtag("event", "book_appointment", {
      service_name: details?.service || "General Appointment",
      booking_method: details?.method || "online_whatsapp",
    });
  }
};
