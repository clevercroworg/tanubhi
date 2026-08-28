declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = "AW-1000064987";

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
