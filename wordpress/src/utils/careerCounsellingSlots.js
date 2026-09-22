/** Career counselling availability (host wall time: Asia/Kolkata). */

export const BOOKING_CONFIG = {
  title: '30 Min Career Counselling',
  durationMinutes: 30,
  hostName: 'iBridge360 Career Team',
  hostInitial: 'iB',
  contactMethod: 'Email',
  contactEmail: 'support@ibridge360.com',
  defaultTimezone: 'Asia/Kolkata',
  weekdaySlots: [10, 11, 12, 14, 15, 16, 17, 18],
  closedWeekdays: [0],
  bookingWindowDays: 45,
  minLeadMs: 2 * 60 * 60 * 1000,
};

export const TIMEZONES = [
  'Asia/Kolkata',
  'Asia/Dubai',
  'Asia/Singapore',
  'Europe/London',
  'America/New_York',
  'America/Los_Angeles',
];

function pad(n) {
  return String(n).padStart(2, '0');
}

export function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(date, delta) {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

export function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isToday(date) {
  return isSameDay(date, new Date());
}

export function getMonthGrid(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startPad = new Date(year, month, 1).getDay();
  const cells = [];
  for (let i = 0; i < startPad; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function isDateBookable(date, now = new Date()) {
  if (!date) return false;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const candidate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (candidate < today) return false;
  const max = new Date(today);
  max.setDate(max.getDate() + BOOKING_CONFIG.bookingWindowDays);
  if (candidate > max) return false;
  if (BOOKING_CONFIG.closedWeekdays.includes(candidate.getDay())) return false;
  return true;
}

function getPartsInZone(utcMs, timezone) {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: timezone,
      hourCycle: 'h23',
    }).formatToParts(new Date(utcMs));
    const hour = parts.find((p) => p.type === 'hour')?.value ?? '00';
    const minute = parts.find((p) => p.type === 'minute')?.value ?? '00';
    return { hour: Number(hour), minute: Number(minute) };
  } catch {
    const d = new Date(utcMs);
    return { hour: d.getHours(), minute: d.getMinutes() };
  }
}

export function formatTimeInZone(utcMs, timezone, use12h) {
  const { hour, minute } = getPartsInZone(utcMs, timezone);
  if (!use12h) return `${pad(hour)}:${pad(minute)}`;
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const h12 = hour % 12 || 12;
  return `${h12}:${pad(minute)} ${suffix}`;
}

export function getAvailableSlots(date, timezone = BOOKING_CONFIG.defaultTimezone, now = new Date()) {
  if (!isDateBookable(date, now)) return [];
  const dateKey = toDateKey(date);
  const slots = [];

  for (const hour of BOOKING_CONFIG.weekdaySlots) {
    const hostUtcMs = Date.parse(`${dateKey}T${pad(hour)}:00:00+05:30`);
    if (Number.isNaN(hostUtcMs)) continue;
    if (hostUtcMs - now.getTime() < BOOKING_CONFIG.minLeadMs) continue;
    slots.push({
      hour,
      utcMs: hostUtcMs,
      iso: new Date(hostUtcMs).toISOString(),
      label24: formatTimeInZone(hostUtcMs, timezone, false),
      label12: formatTimeInZone(hostUtcMs, timezone, true),
    });
  }
  return slots;
}

/** First bookable day from today (inclusive). */
export function getFirstBookableDate(now = new Date()) {
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  for (let i = 0; i < BOOKING_CONFIG.bookingWindowDays + 1; i += 1) {
    if (isDateBookable(cursor, now) && getAvailableSlots(cursor, BOOKING_CONFIG.defaultTimezone, now).length) {
      return new Date(cursor);
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return null;
}

export function formatSelectedDayLabel(date) {
  if (!date) return '';
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  return `${weekday} ${pad(date.getDate())}`;
}

export function formatMonthLabel(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
}
