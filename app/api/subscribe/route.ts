import { NextRequest, NextResponse } from "next/server";
import { subscribeToLeadMagnet } from "@/lib/kit";

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

  const subscribed = await subscribeToLeadMagnet(email);
  if (!subscribed) {
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again shortly." },
      { status: 502 }
    );
  }

  console.log("[subscribe] new lead:", { email, source: typeof source === "string" ? source : "unknown" });

  return NextResponse.json({ ok: true });
}
