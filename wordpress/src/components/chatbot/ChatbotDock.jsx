import { useCallback, useEffect, useState } from 'react';

import { CHAT_BOTS, CHAT_BOT_ORDER } from '../../content/chatbot/chatbotKnowledge';
import MarketingChatbot from './MarketingChatbot';
import './marketingChatbot.css';

const PRODUCT_ICONS = {
  lms: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M12 6.2C10.2 4.9 7.9 4.4 5.5 5.2 5.2 5.3 5 5.6 5 5.9V17.2c0 .5.5.8 1 .7 2.1-.6 4.2-.2 5.9.9M12 6.2c1.8-1.3 4.1-1.8 6.5-1 0.3.1.5.4.5.7V17.2c0 .5-.5.8-1 .7-2.1-.6-4.2-.2-5.9.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  assessment: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 6.2 5.8v5.3c0 3.7 2.5 6.9 5.8 8.4 3.3-1.5 5.8-4.7 5.8-8.4V5.8L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 12.1 11.2 14l3.6-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  hackathon: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M8.5 8.8 6 12l2.5 3.2M15.5 8.8 18 12l-2.5 3.2M13.2 7.5l-2.4 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const CloseIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Three fully separate product chatbots from the first glance.
 * Each has its own launcher, panel, thread, and knowledge.
 */
function ChatbotDock() {
  const [openId, setOpenId] = useState(null);

  const openBot = useCallback((id) => {
    setOpenId(id);
  }, []);

  const closeAll = useCallback(() => setOpenId(null), []);

  const toggleBot = useCallback((id) => {
    setOpenId((cur) => (cur === id ? null : id));
  }, []);

  useEffect(() => {
    if (!openId) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openId, closeAll]);

  return (
    <div className={`ibc-dock${openId ? ' ibc-dock--open' : ''}`}>
      <nav className="ibc-fabs" aria-label="Product chats">
        {CHAT_BOT_ORDER.map((id) => {
          const bot = CHAT_BOTS[id];
          const isOpen = openId === id;
          return (
            <button
              key={`fab-${id}`}
              type="button"
              className={`ibc-fab ibc-fab--${id}${isOpen ? ' ibc-fab--on' : ''}${
                openId && !isOpen ? ' ibc-fab--idle' : ''
              }`}
              onClick={() => toggleBot(id)}
              aria-expanded={isOpen}
              aria-label={isOpen ? `Close ${bot.label} chat` : `Open ${bot.label} chat`}
            >
              <span className="ibc-fab__orb">
                {isOpen ? CloseIcon : PRODUCT_ICONS[id]}
                {!isOpen && <span className="ibc-fab__live" aria-hidden="true" />}
              </span>
              <span className="ibc-fab__caption">{bot.shortLabel}</span>
              <span className="ibc-fab__copy">
                <span className="ibc-fab__title">{bot.label}</span>
                <span className="ibc-fab__desc">{bot.blurb}</span>
              </span>
              <span className="ibc-fab__action" aria-hidden="true">
                <span className="ibc-fab__cta">{isOpen ? 'Close' : 'Chat'}</span>
                <span className="ibc-fab__arrow">{isOpen ? '×' : '→'}</span>
              </span>
            </button>
          );
        })}
      </nav>

      {CHAT_BOT_ORDER.map((id) => (
        <MarketingChatbot
          key={id}
          embedded
          botId={id}
          open={openId === id}
          onOpen={() => openBot(id)}
          onClose={closeAll}
        />
      ))}
    </div>
  );
}

export default ChatbotDock;
