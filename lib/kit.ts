// Server-only Kit (ConvertKit) API client. Never import this from a client
// component — KIT_API_KEY has no NEXT_PUBLIC_ prefix on purpose.

const KIT_API_KEY = process.env.KIT_API_KEY ?? "";

// The "Newsletter site" form auto-created with the Kit account. A Rule
// attached to this form in the Kit dashboard (Automation → Rules) is what
// actually sends the lead magnet email — subscribing someone here via the
// API just triggers whatever's configured on that form.
const LEAD_MAGNET_FORM_ID = 9769371;

function kitHeaders() {
  return {
    "X-Kit-Api-Key": KIT_API_KEY,
    "Content-Type": "application/json",
  };
}

/**
 * Subscribes an email address to the lead-magnet form. Returns true on
 * success. Never throws — a Kit outage shouldn't break the signup form's
 * UX, it should just fail quietly and get logged.
 *
 * Kit's "add subscriber to form by email" endpoint requires the subscriber
 * to already exist as an account-wide record first (undocumented outside
 * a one-line note in their API reference — confirmed by testing), so this
 * is a two-step call: create-or-fetch the subscriber, then attach the form.
 */
export async function subscribeToLeadMagnet(email: string): Promise<boolean> {
  if (!KIT_API_KEY) return false;

  try {
    const createRes = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: kitHeaders(),
      body: JSON.stringify({ email_address: email }),
    });

    if (!createRes.ok) {
      console.error(`[kit] create subscriber failed: ${createRes.status}`);
      return false;
    }

    const formRes = await fetch(`https://api.kit.com/v4/forms/${LEAD_MAGNET_FORM_ID}/subscribers`, {
      method: "POST",
      headers: kitHeaders(),
      body: JSON.stringify({ email_address: email }),
    });

    if (!formRes.ok) {
      console.error(`[kit] add to form ${LEAD_MAGNET_FORM_ID} failed: ${formRes.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[kit] subscribe threw", err);
    return false;
  }
}
