import { Resend } from 'resend';

export interface AdminEmailPayload {
  fullName: string;
  email: string;
  phone?: string;
  program?: string;
  category?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
  source?: string;
  ipAddress?: string;
}

export interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

/**
 * Escapes HTML characters in user input to prevent injection in email clients.
 */
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Formats sender address with display name if not already formatted.
 */
function getSenderAddress(): string {
  const configured = (process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev').trim();
  if (configured.includes('<') && configured.includes('>')) {
    return configured;
  }
  return `CademyX Advisory <${configured}>`;
}

/**
 * Sends a structured admin notification email using the official Resend SDK.
 * 
 * Rules:
 * - Admin notification ONLY: CademyX admin receives the submitted lead details.
 * - NO auto-reply or confirmation email is sent to the visitor/candidate.
 * - Reply-To is set to the visitor's email address so admin can reply directly.
 * - Only returns success: true when Resend API returns an authorized message id.
 */
export async function sendAdminNotificationEmail(
  payload: AdminEmailPayload
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.error(
      '[CademyX Resend Error]: RESEND_API_KEY is not defined in server environment variables.'
    );
    return {
      success: false,
      error:
        'Email notification service is not configured on the server. Please set RESEND_API_KEY.',
    };
  }

  const resend = new Resend(apiKey);

  const adminEmail = (
    process.env.CONTACT_NOTIFICATION_EMAIL || 'cademyxedu@gmail.com'
  ).trim();
  const fromAddress = getSenderAddress();

  const safeName = escapeHtml(payload.fullName || 'Anonymous Visitor');
  const safeEmail = escapeHtml(payload.email || '');
  const safePhone = escapeHtml(payload.phone || 'Not provided');
  const safeProgram = escapeHtml(payload.program || 'General Academic Advisory');
  const safeCategory = escapeHtml(payload.category || payload.inquiryType || 'Advisory Inquiry');
  const safeSubject = escapeHtml(payload.subject || '');
  const safeMessage = escapeHtml(payload.message || '');
  const safeSource = escapeHtml(payload.source || 'Website Lead Form');

  const timestampIST = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const emailSubject = `New CademyX Website Enquiry — [${safeCategory || 'General'}]`;

  // Official CademyX Palette: Royal Deep Blue: #182A9A, Deep Navy Blue: #101F70, Pure White: #FFFFFF, Soft Blue White: #F3F5FF, Light Periwinkle: #DCE3FF, Slate Blue: #26345C, Muted Blue: #6573A8
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F3F5FF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #26345C;">
  <div style="max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #DCE3FF; overflow: hidden; box-shadow: 0 4px 16px rgba(16, 31, 112, 0.08);">
    
    <!-- Top Navy Brand Bar with Royal Blue Accent Line -->
    <div style="background-color: #101F70; padding: 28px 32px 24px 32px; border-bottom: 4px solid #182A9A;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td>
            <div style="font-size: 22px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px;">
              Cademy<span style="color: #DCE3FF;">X</span>
            </div>
            <div style="font-size: 12px; color: #DCE3FF; margin-top: 4px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">
              Inbound Advisory Notification
            </div>
          </td>
          <td style="text-align: right; vertical-align: middle;">
            <span style="display: inline-block; padding: 6px 12px; border-radius: 20px; background-color: rgba(220, 227, 255, 0.18); border: 1px solid rgba(220, 227, 255, 0.5); color: #FFFFFF; font-size: 11px; font-weight: 700; text-transform: uppercase;">
              ${safeCategory}
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Content Area -->
    <div style="padding: 32px;">
      <h2 style="font-size: 18px; font-weight: 700; color: #101F70; margin: 0 0 8px 0;">
        New Website Form Submission
      </h2>
      <p style="font-size: 14px; color: #6573A8; margin: 0 0 24px 0; line-height: 1.5;">
        A visitor has submitted an enquiry through the CademyX portal. Below are the complete submission details:
      </p>

      <!-- Visitor Details Table -->
      <div style="background-color: #F3F5FF; border: 1px solid #DCE3FF; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; width: 145px; vertical-align: top;">Visitor Name:</td>
            <td style="padding: 9px 0; color: #101F70; font-weight: 700;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Email Address:</td>
            <td style="padding: 9px 0; font-weight: 600;">
              <a href="mailto:${safeEmail}" style="color: #182A9A; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Phone / WhatsApp:</td>
            <td style="padding: 9px 0; font-weight: 600;">
              <a href="tel:${safePhone}" style="color: #101F70; text-decoration: none;">${safePhone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Program / Track:</td>
            <td style="padding: 9px 0; color: #101F70; font-weight: 600;">${safeProgram}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Category / Type:</td>
            <td style="padding: 9px 0; color: #101F70; font-weight: 600;">${safeCategory}</td>
          </tr>
          ${
            safeSubject
              ? `<tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Subject:</td>
            <td style="padding: 9px 0; color: #101F70;">${safeSubject}</td>
          </tr>`
              : ''
          }
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Submission Source:</td>
            <td style="padding: 9px 0; color: #26345C; font-weight: 500;">${safeSource}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6573A8; font-weight: 600; vertical-align: top;">Timestamp (IST):</td>
            <td style="padding: 9px 0; color: #26345C; font-weight: 500;">${timestampIST}</td>
          </tr>
        </table>
      </div>

      <!-- Inquired Message / Notes -->
      ${
        safeMessage
          ? `
      <div style="margin-bottom: 24px;">
        <div style="font-size: 12px; font-weight: 700; color: #101F70; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
          Submitted Message / Academic Notes
        </div>
        <div style="background-color: #F3F5FF; border: 1px solid #DCE3FF; border-radius: 10px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #26345C; white-space: pre-wrap;">${safeMessage}</div>
      </div>
      `
          : ''
      }

      <!-- Direct Reply Action Button -->
      <div style="padding-top: 12px; text-align: center;">
        <a href="mailto:${safeEmail}?subject=Regarding%20Your%20CademyX%20Advisory%20Enquiry" style="display: inline-block; background-color: #182A9A; color: #FFFFFF; font-size: 14px; font-weight: 700; padding: 14px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 2px 6px rgba(16, 31, 112, 0.25);">
          Reply Directly to ${safeName}
        </a>
        <div style="font-size: 12px; color: #6573A8; margin-top: 10px;">
          (Clicking &lsquo;Reply&rsquo; in your email client will also directly address ${safeEmail})
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #F3F5FF; padding: 18px 32px; border-top: 1px solid #DCE3FF; text-align: center; font-size: 12px; color: #6573A8;">
      Confidential Admin Notification &bull; CademyX &bull; Delivered via Resend
    </div>
  </div>
</body>
</html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [adminEmail],
      replyTo: payload.email,
      subject: emailSubject,
      html: htmlContent,
    });

    if (error) {
      console.error('[CademyX Resend Delivery Error]:', error);
      return {
        success: false,
        error: error.message || 'Resend was unable to dispatch the email.',
      };
    }

    if (!data || !data.id) {
      console.error('[CademyX Resend Warning]: No message ID returned from Resend API.', data);
      return {
        success: false,
        error: 'Email provider did not return a valid delivery confirmation.',
      };
    }

    console.log(
      `[CademyX Resend Success]: Admin notification delivered. ID=${data.id}, Recipient=${adminEmail}, Source=${payload.source}`
    );

    return {
      success: true,
      id: data.id,
    };
  } catch (err: unknown) {
    console.error('[CademyX Resend Exception]:', err);
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : 'Unexpected server error while contacting email delivery service.',
    };
  }
}
