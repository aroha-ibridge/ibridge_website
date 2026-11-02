import nodemailer from 'nodemailer';

export async function sendCareerLeadNotificationEmail(application = {}) {
  const host = process.env.Email_Host || 'smtp.dreamhost.com';
  const port = parseInt(process.env.Email_Port, 10) || 587;
  const user = process.env.Email_ID || process.env.SMTP_FROM || 'system@ibridge360.com';
  const pass = process.env.Email_Pwd || 'Aroha@2025';
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.PUBLIC_ENQUIRY_TO_EMAIL || 'support@ibridge360.com';
  const fromEmail = process.env.SMTP_FROM || user;
  const bccEmail = process.env.Email_Bcc || undefined;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  });

  const {
    name = '',
    email = '',
    phone = '',
    role = 'Open Role',
    department = '',
    workMode = '',
    experience = '',
    currentCtc = '',
    expectedCtc = '',
    noticePeriod = '',
    joiningDate = '',
    currentLocation = '',
    relocate = '',
    travel = '',
    dateOfBirth = '',
    maritalStatus = '',
    techStack = '',
    roleNote = '',
    note = '',
    profileUrl = '',
    resumeUrl = '',
    pageUrl = '',
  } = application;

  const subject = `New Career Application: ${role} — ${name}`;

  const row = (label, val) => {
    if (!val) return '';
    return `<tr>
      <td style="padding: 10px 14px; font-weight: 600; color: #475569; width: 180px; vertical-align: top; border-bottom: 1px solid #e2e8f0;">${label}</td>
      <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${val}</td>
    </tr>`;
  };

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; line-height: 1.5;">
  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);">
    
    <!-- Brand Header -->
    <div style="background: linear-gradient(135deg, #123A85 0%, #18479F 100%); padding: 24px 28px; color: #ffffff;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em;">New Job Application Received</h1>
      <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">Role: <strong style="color: #ffffff;">${role}</strong></p>
    </div>

    <div style="padding: 24px 28px;">
      
      <!-- Primary Candidate Contacts -->
      <div style="background-color: #f0f5ff; border: 1px solid #c7d9fc; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
        <h2 style="margin: 0 0 12px; font-size: 16px; color: #18479F; font-weight: 700;">Candidate Overview</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 4px 0; font-weight: 600; color: #475569; width: 140px;">Full Name:</td>
            <td style="padding: 4px 0; font-weight: 700; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: 600; color: #475569;">Email Address:</td>
            <td style="padding: 4px 0;"><a href="mailto:${email}" style="color: #18479F; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: 600; color: #475569;">Phone Number:</td>
            <td style="padding: 4px 0;"><a href="tel:${phone}" style="color: #18479F; text-decoration: none; font-weight: 600;">${phone}</a></td>
          </tr>
        </table>
      </div>

      <!-- Resume CTA Button -->
      ${
        resumeUrl
          ? `<div style="text-align: center; margin: 28px 0; padding: 20px; background: #fafafa; border: 1.5px dashed #18479F; border-radius: 10px;">
              <p style="margin: 0 0 12px; font-size: 14px; color: #334155; font-weight: 600;">Candidate Resume (Stored in AWS S3):</p>
              <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer" style="background-color: #18479F; color: #ffffff; padding: 12px 30px; font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 8px; display: inline-block; box-shadow: 0 4px 12px rgba(24, 71, 159, 0.25);">
                📄 View / Download Candidate Resume
              </a>
              <div style="margin-top: 10px; font-size: 11px; color: #64748b; word-break: break-all;">
                S3 Link: <a href="${resumeUrl}" style="color: #18479F;">${resumeUrl}</a>
              </div>
            </div>`
          : ''
      }

      <!-- Detailed Candidate Profile -->
      <h3 style="margin: 20px 0 10px; font-size: 15px; color: #0f172a; border-bottom: 2px solid #18479F; padding-bottom: 6px;">Application Details</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
        ${row('Role Applied', role)}
        ${row('Department', department)}
        ${row('Work Mode', workMode)}
        ${row('Total Experience', experience)}
        ${row('Current CTC', currentCtc ? `₹ ${currentCtc} LPA` : '')}
        ${row('Expected CTC', expectedCtc ? `₹ ${expectedCtc} LPA` : '')}
        ${row('Notice Period', noticePeriod)}
        ${row('Earliest Joining', joiningDate)}
        ${row('Current Location', currentLocation)}
        ${row('Relocate to Bangalore', relocate)}
        ${row('Comfortable Travelling', travel)}
        ${row('Date of Birth', dateOfBirth)}
        ${row('Marital Status', maritalStatus)}
        ${row('Skills / Tech Stack', techStack)}
        ${row('Profile / Portfolio', profileUrl ? `<a href="${profileUrl}" style="color: #18479F;">${profileUrl}</a>` : '')}
        ${row('Why This Role', roleNote || note)}
        ${row('Submitted From Page', pageUrl ? `<a href="${pageUrl}" style="color: #64748b; font-size: 12px;">${pageUrl}</a>` : '')}
      </table>

      <!-- Footer Info -->
      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
        Sent via iBridge360 Career Portal • Notification to ${toEmail}
      </div>
    </div>
  </div>
</body>
</html>`;

  const text = `New Career Application: ${role}
Candidate Name: ${name}
Email: ${email}
Phone: ${phone}
Resume Link (AWS S3): ${resumeUrl || 'None'}

Work Experience: ${experience}
Current CTC: ${currentCtc ? `₹ ${currentCtc} LPA` : 'N/A'}
Expected CTC: ${expectedCtc ? `₹ ${expectedCtc} LPA` : 'N/A'}
Notice Period: ${noticePeriod}
Earliest Joining: ${joiningDate}
Current Location: ${currentLocation}
Relocate: ${relocate}
Travel: ${travel}
Skills / Tech Stack: ${techStack}
Note: ${roleNote || note}
Page: ${pageUrl}
`;

  try {
    const info = await transporter.sendMail({
      from: `"iBridge360 Careers" <${fromEmail}>`,
      to: toEmail,
      bcc: bccEmail,
      subject,
      text,
      html,
    });
    console.log('[lead-email] Lead notification sent successfully! MessageId:', info.messageId);
    return { ok: true, messageId: info.messageId };
  } catch (err) {
    console.error('[lead-email] Failed to send lead email:', err);
    return { ok: false, error: err.message };
  }
}
