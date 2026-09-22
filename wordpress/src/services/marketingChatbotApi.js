import {
  ASSESSMENT_SYSTEM_PROMPT,
  HACKATHON_SYSTEM_PROMPT,
  LMS_SYSTEM_PROMPT,
} from '../content/chatbot/chatbotKnowledge';

const TOPIC_PROMPTS = {
  lms: LMS_SYSTEM_PROMPT,
  assessment: ASSESSMENT_SYSTEM_PROMPT,
  hackathon: HACKATHON_SYSTEM_PROMPT,
};

/**
 * Calls local Vite/dev proxy (or same-origin handler) so the Groq key
 * never needs a browser→api.groq.com request (avoids CORS failures).
 */
export async function askMarketingChatbot(question, history = [], topicId = 'lms') {
  const trimmed = question.trim();
  if (!trimmed) return '';

  const systemPrompt = TOPIC_PROMPTS[topicId];
  if (!systemPrompt) {
    throw new Error(`Chat topic "${topicId}" is not available yet.`);
  }

  const response = await fetch('/api/marketing-chatbot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topicId,
      question: trimmed,
      history: history.slice(-10).map((m) => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      })),
      systemPrompt,
    }),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    /* ignore */
  }

  if (!response.ok) {
    const detail = data?.error || data?.message || `HTTP ${response.status}`;
    throw new Error(detail);
  }

  const content = typeof data?.reply === 'string' ? data.reply.trim() : '';
  if (!content) throw new Error('Empty reply from assistant');
  return content;
}
