import { NextRequest, NextResponse } from "next/server";

// STUB — not wired to a real email service provider yet.
// TODO(esp-integration): Before launch, replace the console.log below with
// a call to a free-tier ESP (Mailchimp, ConvertKit, or Beehiiv all have
// free tiers) so the lead magnet actually delivers and subscribers are
// stored somewhere durable. Do NOT rely on writing to the local filesystem
// here — Vercel's serverless functions are ephemeral and won't persist it.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;
  const source = (body as { source?: unknown })?.source;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  console.log("[subscribe] new lead:", { email, source: typeof source === "string" ? source : "unknown" });

  return NextResponse.json({ ok: true });
}
