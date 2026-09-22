import { useEffect, useMemo, useState } from 'react';
import {
  Clock,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

import {
  BOOKING_CONFIG,
  TIMEZONES,
  addMonths,
  formatMonthLabel,
  formatSelectedDayLabel,
  getAvailableSlots,
  getFirstBookableDate,
  getMonthGrid,
  isDateBookable,
  isSameDay,
  isToday,
  startOfMonth,
  toDateKey,
} from '../../utils/careerCounsellingSlots';
import { submitCareerCounsellingBooking } from '../../utils/careerCounsellingBooking';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function CareerCounsellingScheduler() {
  const [monthCursor, setMonthCursor] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [timezone, setTimezone] = useState(BOOKING_CONFIG.defaultTimezone);
  const [use12h, setUse12h] = useState(false);
  const [step, setStep] = useState('calendar');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    education: '',
    city: '',
    phone: '',
    email: '',
    reason: '',
  });

  useEffect(() => {
    const first = getFirstBookableDate();
    if (first) {
      setSelectedDate(first);
      setMonthCursor(startOfMonth(first));
    }
  }, []);

  const monthCells = useMemo(() => getMonthGrid(monthCursor), [monthCursor]);
  const slots = useMemo(
    () => (selectedDate ? getAvailableSlots(selectedDate, timezone) : []),
    [selectedDate, timezone],
  );
  const canGoPrevMonth = useMemo(() => monthCursor > startOfMonth(new Date()), [monthCursor]);

  const handleSelectDate = (date) => {
    if (!isDateBookable(date)) return;
    setSelectedDate(date);
    setSelectedSlot(null);
    setError('');
  };

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setError('');
    setStep('details');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedSlot) {
      setError('Please select a time slot.');
      return;
    }

    setSubmitting(true);
    setError('');

    const result = await submitCareerCounsellingBooking({
      ...form,
      scheduledIso: selectedSlot.iso,
      scheduledLabel: `${formatSelectedDayLabel(selectedDate)} · ${
        use12h ? selectedSlot.label12 : selectedSlot.label24
      } (${timezone})`,
      timezone,
    });

    setSubmitting(false);

    if (!result.success) {
      setError(result.message || 'Booking failed. Please try again.');
      return;
    }

    setStep('success');
  };

  if (step === 'success') {
    const slotLabel = use12h ? selectedSlot?.label12 : selectedSlot?.label24;
    return (
      <div className="cc-booking cc-booking--success-only">
        <div className="cc-booking__panel cc-booking__panel--success">
          <CheckCircle2 className="cc-booking__success-icon" aria-hidden />
          <p className="cc-booking__success-kicker">iBridge360</p>
          <h1>Thank you!</h1>
          <p className="cc-booking__success-lead">
            Your career counselling request was submitted successfully.
          </p>
          <div className="cc-booking__success-card">
            <p className="cc-booking__success-title">{BOOKING_CONFIG.title}</p>
            <p>
              {formatSelectedDayLabel(selectedDate)} · {slotLabel}
            </p>
            <p className="cc-booking__muted">{timezone}</p>
          </div>
          <p className="cc-booking__success-footer">
            Our team will contact you shortly to confirm your session.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cc-booking">
      <div className="cc-booking__shell">
        <aside className="cc-booking__info">
          <span className="cc-booking__brand">iBridge360</span>
          <div className="cc-booking__host">
            <span className="cc-booking__avatar" aria-hidden>
              {BOOKING_CONFIG.hostInitial}
            </span>
            <span>{BOOKING_CONFIG.hostName}</span>
          </div>
          <h1 className="cc-booking__title">{BOOKING_CONFIG.title}</h1>
          <ul className="cc-booking__meta">
            <li>
              <Clock size={18} aria-hidden />
              <span>{BOOKING_CONFIG.durationMinutes}m</span>
            </li>
            <li>
              <Mail size={18} aria-hidden />
              <span>{BOOKING_CONFIG.contactMethod}</span>
            </li>
            <li>
              <Globe size={18} aria-hidden />
              <label className="sr-only" htmlFor="cc-timezone">
                Timezone
              </label>
              <select
                id="cc-timezone"
                value={timezone}
                onChange={(e) => {
                  setTimezone(e.target.value);
                  setSelectedSlot(null);
                }}
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <p className="cc-booking__blurb">
            Pick a time that works for you. We will follow up by email to confirm your
            career counselling session — no video link required to book.
          </p>
          {selectedSlot && step === 'details' && (
            <p className="cc-booking__picked">
              Selected:{' '}
              <strong>
                {formatSelectedDayLabel(selectedDate)} ·{' '}
                {use12h ? selectedSlot.label12 : selectedSlot.label24}
              </strong>
            </p>
          )}
        </aside>

        {step === 'calendar' ? (
          <>
            <section className="cc-booking__calendar" aria-label="Select a date">
              <div className="cc-booking__cal-header">
                <button
                  type="button"
                  className="cc-booking__icon-btn"
                  disabled={!canGoPrevMonth}
                  onClick={() => setMonthCursor((m) => addMonths(m, -1))}
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} />
                </button>
                <h2>{formatMonthLabel(monthCursor)}</h2>
                <button
                  type="button"
                  className="cc-booking__icon-btn"
                  onClick={() => setMonthCursor((m) => addMonths(m, 1))}
                  aria-label="Next month"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="cc-booking__weekdays">
                {WEEKDAYS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="cc-booking__days">
                {monthCells.map((date, index) => {
                  if (!date) {
                    return (
                      <span
                        key={`empty-${index}`}
                        className="cc-booking__day cc-booking__day--empty"
                      />
                    );
                  }
                  const bookable = isDateBookable(date);
                  const selected = selectedDate && isSameDay(date, selectedDate);
                  return (
                    <button
                      key={toDateKey(date)}
                      type="button"
                      disabled={!bookable}
                      onClick={() => handleSelectDate(date)}
                      className={[
                        'cc-booking__day',
                        bookable ? 'cc-booking__day--available' : '',
                        selected ? 'cc-booking__day--selected' : '',
                        isToday(date) ? 'cc-booking__day--today' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      style={
                        selected
                          ? {
                              background: '#2563eb',
                              backgroundColor: '#2563eb',
                              color: '#ffffff',
                              WebkitTextFillColor: '#ffffff',
                            }
                          : undefined
                      }
                    >
                      {date.getDate()}
                      {selected && <span className="cc-booking__day-dot" />}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="cc-booking__slots" aria-label="Select a time">
              <div className="cc-booking__slots-header">
                <h2>{selectedDate ? formatSelectedDayLabel(selectedDate) : 'Pick a date'}</h2>
                <div className="cc-booking__format-toggle" role="group" aria-label="Time format">
                  <button
                    type="button"
                    className={`cc-booking__format-btn${!use12h ? ' is-active' : ''}`}
                    onClick={() => setUse12h(false)}
                  >
                    24h
                  </button>
                  <button
                    type="button"
                    className={`cc-booking__format-btn${use12h ? ' is-active' : ''}`}
                    onClick={() => setUse12h(true)}
                  >
                    12h
                  </button>
                </div>
              </div>

              {!selectedDate && (
                <p className="cc-booking__hint">Select an available date to see time slots.</p>
              )}
              {selectedDate && slots.length === 0 && (
                <p className="cc-booking__hint">No slots left for this day. Try another date.</p>
              )}

              <div className="cc-booking__slot-list">
                {slots.map((slot) => (
                  <button
                    key={slot.iso}
                    type="button"
                    className={[
                      'cc-booking__slot',
                      selectedSlot?.iso === slot.iso ? 'is-selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => handleSelectSlot(slot)}
                  >
                    {use12h ? slot.label12 : slot.label24}
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="cc-booking__details" aria-label="Your details">
            <button
              type="button"
              className="cc-booking__back"
              onClick={() => {
                setStep('calendar');
                setError('');
              }}
            >
              <ArrowLeft size={16} aria-hidden />
              Change time
            </button>
            <h2>Enter your details</h2>
            <p className="cc-booking__hint">
              No account needed — we only use the details you enter below. Our team will
              follow up via {BOOKING_CONFIG.contactEmail}.
            </p>

            <form className="cc-booking__form" onSubmit={handleSubmit} noValidate>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </label>
              <label>
                <span>Education level</span>
                <input
                  type="text"
                  name="education"
                  required
                  value={form.education}
                  onChange={(e) => setForm((f) => ({ ...f, education: e.target.value }))}
                  placeholder="Enter your education level"
                />
              </label>
              <label>
                <span>City</span>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                  placeholder="Enter your city"
                />
              </label>
              <label>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="9876543210"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span>Reason for counselling</span>
                <textarea
                  name="reason"
                  rows={3}
                  required
                  value={form.reason}
                  onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                  placeholder="Career path, programs, resume, interviews…"
                />
              </label>

              {error && (
                <p className="cc-booking__error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="cc-booking__primary-btn" disabled={submitting}>
                {submitting ? 'Sending…' : 'Schedule event'}
              </button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}

export default CareerCounsellingScheduler;
