import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotificationEmail } from '@/lib/resend';

interface EnquiryRequestBody {
  fullName?: string;
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  program?: string;
  targetProgram?: string;
  programSlug?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
  notes?: string;
  source?: string;
  // Honeypot field for bot detection
  hp?: string;
  website?: string;
}

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodic cleanup if map grows
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const active = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Identify Client IP for rate-limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0] : realIp || '127.0.0.1').trim();

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this connection. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as EnquiryRequestBody;

    // 2. Honeypot check (Spam bots usually populate hidden fields)
    if (body.hp || body.website) {
      console.warn(`[CademyX Spam Trap]: Dropped honeypot submission from IP ${clientIp}`);
      // Return 200 without sending email to confuse bots
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received.',
      });
    }

    // 3. Normalize & Sanitize Form Fields
    const fullName = (body.fullName || body.name || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const phone = (body.phone || '').trim();
    const program = (
      body.program ||
      body.targetProgram ||
      body.programSlug ||
      'General Academic Advisory'
    ).trim();
    const category = (body.category || body.inquiryType || 'Academic Advisory').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || body.notes || '').trim();
    const source = (body.source || 'Website Lead Form').trim();

    // 4. Server-Side Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (fullName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Full name cannot exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (email.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Email address cannot exceed 120 characters.' },
        { status: 400 }
      );
    }

    if (phone && phone.length > 30) {
      return NextResponse.json(
        { success: false, error: 'Phone number cannot exceed 30 characters.' },
        { status: 400 }
      );
    }

    if (message && message.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Message content cannot exceed 3000 characters.' },
        { status: 400 }
      );
    }

    // 5. Send Admin Notification Email via Resend
    // NOTE: Strictly sends to admin (cademyxedu@gmail.com).
    // NO visitor auto-reply or confirmation email is dispatched.
    const result = await sendAdminNotificationEmail({
      fullName,
      email,
      phone,
      program,
      category,
      inquiryType: body.inquiryType,
      subject,
      message,
      source,
      ipAddress: clientIp,
    });

    // 6. Enforce Real Success: Never report success if delivery fails
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            'Failed to dispatch email notification. Please check server configuration or reach out directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        'Your enquiry has been successfully delivered to our academic advisory team. We will review your details promptly.',
    });
  } catch (err: unknown) {
    console.error('[CademyX API /api/enquiry Error]:', err);
    return NextResponse.json(
      {
        success: false,
        error:
          'An unexpected server error occurred while processing your request. Please try again or reach out to our admissions desk directly.',
      },
      { status: 500 }
    );
  }
}
