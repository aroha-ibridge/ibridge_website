import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { askMarketingChatbot } from '../../services/marketingChatbotApi';
import {
  ADVISOR,
  CHAT_BOTS,
  LMS_QUICK_PROMPTS,
  LMS_WELCOME,
  ASSESSMENT_QUICK_PROMPTS,
  ASSESSMENT_WELCOME,
  HACKATHON_QUICK_PROMPTS,
  HACKATHON_WELCOME,
  LEAD_INTENT_PATTERN,
  LEAD_INTRO,
  LEAD_SUCCESS,
} from '../../content/chatbot/chatbotKnowledge';
import { withBase } from '../../utils/siteBase';
import AdvisorAvatar from './AdvisorAvatar';
import ChatLeadForm from './ChatLeadForm';
import './marketingChatbot.css';

const TEASER_KEY = 'ibc-teaser-dismissed';
const TEASER_DELAY = 5000;
const MIN_TYPING_MS = 650;

/* Site paths the advisor may mention — longest first so alternation matches fully */
const INTERNAL_LINKS = [
  'online-assessment-platform',
  'book-career-counselling',
  'courses/data-engineering',
  'microsoft-fabric-data-engineering-course',
  'databricks-data-engineering-course',
  'data-analytics-course',
  'pyspark-course',
  'advanced-excel-course',
  'tableau-course',
  'sql-bootcamp',
  'python-bootcamp',
  'java-full-stack-development-course',
  'python-full-stack-development-course',
  'mern-full-stack-development-course',
  'courses/data-science',
  'training-upskilling',
  'individual-learner',
  'terms-conditions',
  'privacy-policy',
  'learnsmart-lms',
  'institution',
  'code-arena',
  'contact-us',
  'corporate',
  'about-us',
  'products',
  'programs',
  'blogs',
];

const TOPIC_WELCOME = {
  lms: LMS_WELCOME,
  assessment: ASSESSMENT_WELCOME,
  hackathon: HACKATHON_WELCOME,
};

const TOPIC_PROMPTS = {
  lms: LMS_QUICK_PROMPTS,
  assessment: ASSESSMENT_QUICK_PROMPTS,
  hackathon: HACKATHON_QUICK_PROMPTS,
};

/* ── text → safe HTML ───────────────────────────────────────────────── */

function escapeHtml(text) {
  return text.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
}

function inlineHtml(line) {
  let out = escapeHtml(line);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
  );
  out = out.replace(
    /([\w.+-]+@[\w-]+\.[\w.-]+)/g,
    '<a href="mailto:$1">$1</a>',
  );
  out = out.replace(
    new RegExp(`(^|[\\s(])/(${INTERNAL_LINKS.join('|')})\\b`, 'g'),
    (_, prefix, slug) =>
      `${prefix}<a href="${withBase(`/${slug}`)}" data-ibc-internal="1">/${slug}</a>`,
  );
  return out;
}

/** Turns the model's plain text (bold, bullets, headings) into tidy markup. */
function renderRichHtml(text) {
  const lines = String(text).split(/\r?\n/);
  let html = '';
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) {
      closeList();
      return;
    }

    const bullet = line.match(/^(?:[-*•‣▪]|\d+[.)])\s+(.*)$/);
    if (bullet) {
      if (!inList) {
        html += '<ul class="ibc-list">';
        inList = true;
      }
      html += `<li>${inlineHtml(bullet[1])}</li>`;
      return;
    }

    closeList();
    const heading = line.match(/^#{1,4}\s+(.*)$/);
    if (heading) {
      html += `<h4 class="ibc-h">${inlineHtml(heading[1])}</h4>`;
      return;
    }
    // A short **bolded** line on its own reads as a section title
    const boldOnly = line.match(/^\*\*(.+?)\*\*:?$/);
    if (boldOnly) {
      html += `<h4 class="ibc-h">${inlineHtml(boldOnly[1])}</h4>`;
      return;
    }
    html += `<p>${inlineHtml(line)}</p>`;
  });

  closeList();
  return html;
}

/* ── icons ──────────────────────────────────────────────────────────── */

const Icon = {
  close: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  minimize: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M6 10l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  restart: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
      <path
        d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M3.4 20.4L21 12 3.4 3.6 3.4 10l12.6 2-12.6 2z" fill="currentColor" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <path
        d="M4 13v-1a8 8 0 0 1 16 0v1M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2zm16 0v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2zm-3 5v.5a2.5 2.5 0 0 1-2.5 2.5H12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M9 4h6v3H9zM7 5.5H5.5A1.5 1.5 0 0 0 4 7v12.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V7a1.5 1.5 0 0 0-1.5-1.5H17M8.5 12.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M8 4h8v3a4 4 0 0 1-8 0V4zM8 5H5.5A2.5 2.5 0 0 0 5.5 10C6.8 10 8 9 8.5 8M16 5h2.5A2.5 2.5 0 0 1 18.5 10C17.2 10 16 9 15.5 8M10 14h4v2.5c0 1.5-4 1.5-4 0V14zM9 21h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

let seq = 0;
const uid = (p) => `${p}-${Date.now()}-${(seq += 1)}`;
const stamp = (at) =>
  new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function initialThread(bot) {
  const at = Date.now();
  return [
    { id: uid('g1'), role: 'bot', text: bot.hello, at },
    { id: uid('g2'), role: 'bot', text: TOPIC_WELCOME[bot.id] || bot.ask, at },
  ];
}

/* ── component ──────────────────────────────────────────────────────── */

function MarketingChatbot({
  botId = 'lms',
  stackIndex = 0,
  embedded = false,
  open = false,
  onOpen,
  onBack,
  onClose,
  showTeaser = false,
}) {
  const bot = CHAT_BOTS[botId] || CHAT_BOTS.lms;
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [messages, setMessages] = useState(() => initialThread(bot));

  const threadRef = useRef(null);
  const inputRef = useRef(null);
  const historyRef = useRef([]);
  const openedRef = useRef(false);
  const runRef = useRef(0); // bumped on restart so stale replies are dropped
  const leadShownRef = useRef(false); // one details card per conversation
  const topicId = bot.id;

  /* keep the newest message in view */
  useEffect(() => {
    const el = threadRef.current;
    if (!el || !open) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  /* grow the composer with its content */
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }, [input]);

  /* nudge first-time visitors once per session (LMS widget only) */
  useEffect(() => {
    if (!showTeaser || typeof window === 'undefined') return undefined;
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(TEASER_KEY) === '1';
    } catch {
      /* private mode — just show it */
    }
    if (dismissed) return undefined;
    const t = window.setTimeout(() => {
      if (!openedRef.current) setTeaserVisible(true);
    }, TEASER_DELAY);
    return () => window.clearTimeout(t);
  }, [showTeaser]);

  const dismissTeaser = useCallback(() => {
    setTeaserVisible(false);
    try {
      window.sessionStorage.setItem(TEASER_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  const openChat = useCallback(() => {
    openedRef.current = true;
    dismissTeaser();
    onOpen?.();
  }, [dismissTeaser, onOpen]);

  const closeChat = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const toggle = useCallback(() => {
    if (open) closeChat();
    else openChat();
  }, [open, openChat, closeChat]);

  /* focus the composer on open (desktop only — avoids a mobile keyboard jump) */
  useEffect(() => {
    if (!open || typeof window === 'undefined') return;
    if (!window.matchMedia('(min-width: 561px)').matches) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 320);
    return () => window.clearTimeout(t);
  }, [open]);

  /* esc closes — dock owns Escape when embedded */
  useEffect(() => {
    if (!open || embedded) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeChat();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, embedded, closeChat]);

  const push = useCallback((msg) => {
    setMessages((prev) => [...prev, { at: Date.now(), ...msg }]);
  }, []);

  /** Drops the "talk to our team" card into the thread (once per conversation). */
  const openLead = useCallback(
    ({ withIntro = true } = {}) => {
      if (leadShownRef.current) return;
      leadShownRef.current = true;
      if (withIntro) push({ id: uid('b'), role: 'bot', text: LEAD_INTRO });
      push({ id: uid('lead'), role: 'bot', kind: 'lead' });
    },
    [push],
  );

  const onLeadSubmitted = useCallback(
    (leadId) => {
      setMessages((prev) =>
        prev.map((m) => (m.id === leadId ? { ...m, kind: 'lead-done' } : m)),
      );
      push({ id: uid('b'), role: 'bot', text: LEAD_SUCCESS });
    },
    [push],
  );

  const askAI = useCallback(
    async (question, topic) => {
      const trimmed = question.trim();
      if (!trimmed || typing) return;

      push({ id: uid('u'), role: 'user', text: trimmed });
      historyRef.current = [...historyRef.current, { role: 'user', text: trimmed }];
      setInput('');
      setAsked(true);
      setTyping(true);

      const run = runRef.current;
      const started = Date.now();
      try {
        const reply = await askMarketingChatbot(trimmed, historyRef.current, topic);
        await wait(Math.max(0, MIN_TYPING_MS - (Date.now() - started)));
        if (runRef.current !== run) return;
        const text =
          reply ||
          "Sorry, I couldn't pull that up just now. Could you ask me again, or reach the team on /contact-us?";
        push({ id: uid('b'), role: 'bot', text });
        historyRef.current = [...historyRef.current, { role: 'bot', text }];
        // "call me", "demo", "pricing"… → offer the details card right away
        if (LEAD_INTENT_PATTERN.test(trimmed)) openLead({ withIntro: false });
      } catch (err) {
        if (runRef.current !== run) return;
        console.error('Marketing chatbot error:', err);
        const msg = String(err?.message || '');
        let help =
          "I'm having trouble reaching my knowledge base right now. Give me a moment and try again — or drop the team a line on /contact-us.";
        if (/restricted/i.test(msg)) {
          help =
            'Groq has restricted this API organization/key. Create a new key at console.groq.com, set GROQ_API_KEY in wordpress/.env (server-only), then restart the dev server.';
        } else if (/request too large|tpm|tokens per minute|entity too large/i.test(msg)) {
          help =
            "That message hit Groq's free-tier size limit. Please try a shorter question, or upgrade the Groq plan — I've also been tuned to send smaller prompts after a refresh.";
        } else if (/invalid.*api.?key|401|unauthorized/i.test(msg)) {
          help =
            'The Groq API key looks invalid. Update GROQ_API_KEY in wordpress/.env (no quotes, no VITE_/PUBLIC_ prefix) and restart the dev server.';
        } else if (/missing|GROQ_API_KEY|VITE_GROQ/i.test(msg)) {
          help =
            'GROQ_API_KEY is missing. Add it to wordpress/.env (server-only) and restart the dev server.';
        }
        push({ id: uid('e'), role: 'bot', text: help });
      } finally {
        if (runRef.current === run) setTyping(false);
      }
    },
    [typing, push, openLead],
  );

  const restart = useCallback(() => {
    runRef.current += 1;
    historyRef.current = [];
    leadShownRef.current = false;
    setAsked(false);
    setInput('');
    setTyping(false);
    setMessages(initialThread(bot));
  }, [bot]);

  const submit = useCallback(() => {
    const text = input.trim();
    if (!text || typing) return;
    askAI(text, topicId);
  }, [input, typing, topicId, askAI]);

  /* keep in-app links inside the SPA */
  const onThreadClick = useCallback(
    (e) => {
      const link = e.target.closest?.('a[data-ibc-internal]');
      if (!link) return;
      e.preventDefault();
      navigate(link.getAttribute('href'));
      if (typeof window !== 'undefined' && window.innerWidth <= 560) closeChat();
    },
    [navigate, closeChat],
  );

  const rows = useMemo(
    () =>
      messages.map((m, i) => {
        const next = messages[i + 1];
        return {
          ...m,
          grouped: i > 0 && messages[i - 1].role === m.role && !m.kind,
          // one timestamp per burst of messages, on the last of the burst
          showTime: !next || next.role !== m.role || Boolean(next.kind),
        };
      }),
    [messages],
  );

  const activePrompts = TOPIC_PROMPTS[topicId] || [];
  const showPrompts = !asked && activePrompts.length > 0;

  const panel = (
    <section
      className={`ibc-panel ${open ? 'ibc-panel--open' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-label={`Chat with ${ADVISOR.name}, ${bot.role}`}
      aria-hidden={!open}
    >
      <header className="ibc-header">
        <span className="ibc-header__avatar">
          <AdvisorAvatar size={44} label={`${ADVISOR.name}, ${bot.role}`} />
        </span>
        <div className="ibc-header__meta">
          <span className="ibc-header__name">{ADVISOR.name}</span>
          <span className="ibc-header__status">
            <i aria-hidden="true" />
            <span>Online · {bot.role}</span>
          </span>
        </div>
        <div className="ibc-header__actions">
          <button
            type="button"
            className="ibc-iconbtn"
            onClick={restart}
            aria-label="Start a new chat"
            title="Start a new chat"
          >
            {Icon.restart}
          </button>
          <button
            type="button"
            className="ibc-iconbtn"
            onClick={closeChat}
            aria-label="Minimise chat"
            title="Minimise"
          >
            {Icon.minimize}
          </button>
        </div>
      </header>

      <div
        className="ibc-thread"
        ref={threadRef}
        role="log"
        aria-live="polite"
        onClick={onThreadClick}
      >
        <span className="ibc-daystamp">Today</span>

        {rows.map((m) =>
          m.kind === 'lead' || m.kind === 'lead-done' ? (
            <div className="ibc-leadwrap" key={m.id}>
              {m.kind === 'lead' ? (
                <ChatLeadForm
                  topicLabel={bot.label}
                  onSubmitted={() => onLeadSubmitted(m.id)}
                />
              ) : (
                <p className="ibc-lead__done">
                  <span aria-hidden="true">✅</span> Details sent to our team
                </p>
              )}
            </div>
          ) : (
            <div
              key={m.id}
              className={`ibc-row ibc-row--${m.role}${m.grouped ? ' ibc-row--tight' : ''}${
                m.showTime ? '' : ' ibc-row--notime'
              }`}
            >
              {m.role === 'bot' && (
                <span
                  className={`ibc-row__avatar ${m.grouped ? 'ibc-row__avatar--ghost' : ''}`}
                >
                  <AdvisorAvatar size={30} label={`${ADVISOR.name}, ${bot.role}`} />
                </span>
              )}
              <div className="ibc-bubblewrap">
                {m.role === 'bot' ? (
                  <div
                    className="ibc-bubble ibc-bubble--bot"
                    dangerouslySetInnerHTML={{ __html: renderRichHtml(m.text) }}
                  />
                ) : (
                  <div className="ibc-bubble ibc-bubble--user">{m.text}</div>
                )}
                {m.showTime && <span className="ibc-time">{stamp(m.at)}</span>}
              </div>
            </div>
          ),
        )}

        {typing && (
          <div className="ibc-row ibc-row--bot ibc-row--typing">
            <span className="ibc-row__avatar">
              <AdvisorAvatar size={30} label={`${ADVISOR.name}, ${bot.role}`} />
            </span>
            <div className="ibc-typing" aria-label={`${ADVISOR.name} is typing`}>
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {showPrompts && (
          <div className="ibc-prompts">
            <span className="ibc-prompts__label">Popular questions</span>
            {activePrompts.map((p) => (
              <button
                key={p.label}
                type="button"
                className="ibc-chip"
                disabled={typing}
                onClick={() => askAI(p.question, topicId)}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ibc-composer">
        <button type="button" className="ibc-talk" onClick={() => openLead()}>
          {Icon.headset}
          Talk to our team
        </button>

        <div className="ibc-composer__box">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            placeholder={`Message ${ADVISOR.name}…`}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            aria-label="Type your message"
          />
          <button
            type="button"
            className="ibc-send"
            onClick={submit}
            disabled={typing || !input.trim()}
            aria-label="Send message"
          >
            {Icon.send}
          </button>
        </div>
        <p className="ibc-footnote">
          {ADVISOR.name} · {bot.shortLabel} · Press Enter to send
        </p>
      </div>
    </section>
  );

  if (embedded) {
    return (
      <div
        className={`ibc-root ibc-root--embedded ibc-root--${botId}${open ? ' ibc-root--open' : ''}`}
        data-bot={botId}
      >
        {panel}
      </div>
    );
  }

  return (
    <div
      className={`ibc-root ibc-root--${botId}${open ? ' ibc-root--open' : ''}`}
      data-stack={stackIndex}
      data-bot={botId}
    >
      {showTeaser && teaserVisible && !open && (
        <div className="ibc-teaser" role="status">
          <button
            type="button"
            className="ibc-teaser__text"
            onClick={openChat}
          >
            {bot.teaser}
          </button>
          <button
            type="button"
            className="ibc-teaser__dismiss"
            onClick={dismissTeaser}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      <button
        type="button"
        className={`ibc-launcher ${open ? 'ibc-launcher--open' : ''}`}
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? `Close ${bot.label} chat` : `Chat about ${bot.label}`}
        title={bot.label}
      >
        {open ? (
          <span className="ibc-launcher__close">{Icon.close}</span>
        ) : (
          <>
            <span className="ibc-launcher__ring" aria-hidden="true" />
            <span className="ibc-launcher__face">
              <AdvisorAvatar size={64} label={`${ADVISOR.name}, ${bot.role}`} />
            </span>
            <span className="ibc-launcher__dot" aria-hidden="true" />
            <span className="ibc-launcher__tag">{bot.shortLabel}</span>
          </>
        )}
      </button>

      {panel}
    </div>
  );
}

export default MarketingChatbot;
