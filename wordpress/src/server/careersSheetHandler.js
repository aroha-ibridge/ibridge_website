/**
 * Handles a career application:
 * 1. Dispatches an immediate lead notification email to support@ibridge360.com via DreamHost SMTP.
 * 2. Appends to the private Google Sheet if configured.
 */
import { sendCareerLeadNotificationEmail } from './leadEmailHandler.js';

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

export async function handleCareersSheet(body = {}) {
  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 30);
  if (!name || !email || !phone) {
    return { status: 400, json: { ok: false, error: 'Name, email, and phone are required' } };
  }

  const dateOfBirth = clean(body.dateOfBirth, 40);
  const maritalStatus = clean(body.maritalStatus, 40);
  const experience = clean(body.experience, 100);
  const currentCtc = clean(body.currentCtc, 40);
  const expectedCtc = clean(body.expectedCtc, 40);
  const techStack = clean(body.techStack, 1500);
  const relocate = clean(body.relocate, 10);
  const currentLocation = clean(body.currentLocation, 200);
  const travel = clean(body.travel, 10);
  const noticePeriod = clean(body.noticePeriod, 80);
  const joiningDate = clean(body.joiningDate, 40);
  const profileUrl = clean(body.profileUrl, 500);
  const resumeUrl = clean(body.resumeUrl, 500);
  const roleNote = clean(body.note, 2000);
  const note = [
    dateOfBirth && `Date of birth: ${dateOfBirth}`,
    maritalStatus && `Marital status: ${maritalStatus}`,
    experience && `Total work experience: ${experience}`,
    currentCtc && `Current CTC (₹ LPA): ${currentCtc}`,
    expectedCtc && `Expected CTC (₹ LPA): ${expectedCtc}`,
    techStack && `Tech stack: ${techStack}`,
    relocate && `Relocate to Bangalore: ${relocate}`,
    currentLocation && `Current location: ${currentLocation}`,
    travel && `Comfortable travelling: ${travel}`,
    noticePeriod && `Notice period: ${noticePeriod}`,
    joiningDate && `Earliest joining date: ${joiningDate}`,
    profileUrl && `Profile: ${profileUrl}`,
    resumeUrl && `Resume: ${resumeUrl}`,
    roleNote && `Why this role: ${roleNote}`,
  ]
    .filter(Boolean)
    .join('\n')
    .slice(0, 8000);

  const applicationData = {
    name,
    email,
    phone,
    role: clean(body.role, 200),
    department: clean(body.department, 200),
    workMode: clean(body.workMode, 100),
    experience,
    profileUrl,
    resumeUrl,
    note,
    roleNote,
    pageUrl: clean(body.pageUrl, 500),
    dateOfBirth,
    maritalStatus,
    currentCtc,
    expectedCtc,
    techStack,
    relocate,
    currentLocation,
    travel,
    noticePeriod,
    joiningDate,
  };

  // 1. Dispatch email notification to support@ibridge360.com
  let emailResult = { ok: false };
  try {
    emailResult = await sendCareerLeadNotificationEmail(applicationData);
  } catch (emailErr) {
    console.error('[careers-sheet] Failed to dispatch email notification:', emailErr);
  }

  // 2. Append to Google Sheet (if configured)
  const sheetUrl = process.env.CAREERS_SHEET_URL;
  const secret = process.env.CAREERS_SHEET_SECRET;
  if (sheetUrl && secret) {
    const payload = {
      ...applicationData,
      secret,
      spreadsheetId: process.env.CAREERS_SPREADSHEET_ID || '',
    };

    try {
      const first = await fetch(sheetUrl, {
        method: 'POST',
        redirect: 'manual',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });

      const location = first.headers.get('location');
      if (first.status >= 300 && first.status < 400 && location) {
        await fetch(location, { method: 'GET', signal: AbortSignal.timeout(8000) });
      }
    } catch (sheetErr) {
      console.warn('[careers-sheet] Google Sheet append warning:', sheetErr?.message || sheetErr);
    }
  }

  return { status: 200, json: { ok: true, emailSent: emailResult.ok } };
}
