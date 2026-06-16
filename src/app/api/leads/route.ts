import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// In-memory rate limiter: 5 submissions per IP per minute
// For multi-instance production deployments, replace with Redis-based solution (e.g. @upstash/ratelimit)
const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const limit = 5;
  const entry = ipRequestMap.get(ip);
  if (!entry || entry.resetAt <= now) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await req.json();

    if (!body.full_name || !body.email || !body.phone || !body.website_type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(String(body.email))) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          full_name: String(body.full_name).slice(0, 200),
          business_name: body.business_name ? String(body.business_name).slice(0, 200) : null,
          phone: String(body.phone).slice(0, 20),
          whatsapp: body.whatsapp ? String(body.whatsapp).slice(0, 20) : null,
          email: String(body.email).slice(0, 200),
          website_type: String(body.website_type).slice(0, 100),
          business_category: body.business_category ? String(body.business_category).slice(0, 100) : null,
          preferred_color: body.preferred_color ? String(body.preferred_color).slice(0, 100) : null,
          pages_needed: body.pages_needed ? String(body.pages_needed).slice(0, 500) : null,
          features_required: body.features_required ? String(body.features_required).slice(0, 1000) : null,
          reference_websites: body.reference_websites ? String(body.reference_websites).slice(0, 500) : null,
          deadline: body.deadline ? String(body.deadline).slice(0, 50) : null,
          budget: body.budget ? String(body.budget).slice(0, 100) : null,
          additional_notes: body.additional_notes ? String(body.additional_notes).slice(0, 2000) : null,
          status: "new",
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("Lead insert error:", error);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
