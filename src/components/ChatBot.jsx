import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, ChevronDown, Wrench, Settings, Droplet, Shield, Circle, Zap, Hammer, HelpCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppUrl, createTamilServiceInquiryMessage } from '../whatsapp';

const serviceIconMap = {
  'General Service': Wrench,
  'Engine Repair': Settings,
  'Oil Change': Droplet,
  'Brake Service': Shield,
  'Tyre/Puncture': Circle,
  'Tyre Service': Circle,
  'Electrical Issue': Zap,
  'Electrical Work': Zap,
  'Other': Hammer,
};

const getServiceIcon = (serviceName) => {
  const Icon = serviceIconMap[serviceName] || HelpCircle;
  return Icon;
};

const faqKnowledgeBase = [
  { keywords: ['service', 'servic', 'check', 'mainten', 'inspect'], answer: 'Every 2-3 months or 2000-3000 km. Regular service keeps your bike running smooth and saves money on big repairs.' },
  { keywords: ['pickup', 'drop', 'collect', 'bring', 'fetch', 'carry'], answer: 'Yes! Free pickup and drop within 10 km. Just call or WhatsApp us to arrange.' },
  { keywords: ['brand', 'brands', 'honda', 'hero', 'tvs', 'bajaj', 'royal enfield', 'yamaha', 'suzuki', 'ktm', 'which bike', 'all bike'], answer: 'All brands! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM, and more.' },
  { keywords: ['time', 'how long', 'duration', 'hours', 'how much time', 'take long'], answer: 'General service takes 2-3 hours. Major repairs may take 1-2 days. We always tell you the time before starting.' },
  { keywords: ['genuine', 'original', 'part', 'parts', 'oem', 'original parts'], answer: 'Yes, always. We use genuine OEM parts and show you the old parts before replacing them.' },
  { keywords: ['payment', 'pay', 'method', 'cash', 'upi', 'card', 'gpay', 'phonepe', 'paytm', 'how pay'], answer: 'Cash, UPI (GPay, PhonePe, Paytm), and cards. Pay however you are comfortable.' },
  { keywords: ['warranty', 'guarantee', 'guar', 'covered'], answer: 'Yes! 30-day warranty on all services. If the same problem comes back, we fix it free.' },
  { keywords: ['price', 'cost', 'charge', 'fee', 'how much', 'expensive', 'cheap', 'rate'], answer: 'We give clear quotes before starting any work. No hidden charges. Call or WhatsApp for a quote.' },
  { keywords: ['contact', 'phone', 'number', 'address', 'location', 'visit', 'find', 'where'], answer: 'We are at Near Highway Trichy-Chennai, Veppur, Cuddalore District, Tamil Nadu - 606304. Call +919751438066 or WhatsApp us.' },
  { keywords: ['book', 'appointment', 'schedule', 'fix', 'visit', 'coming', 'arrange'], answer: 'You can book a service by calling us, WhatsApping us, or using the Book Appointment button on our site.' },
  { keywords: ['brake', 'braking', 'disc'], answer: 'We do brake pad replacement, disc servicing, and safety checks. Your safety comes first.' },
  { keywords: ['tyre', 'tyre', 'tire', 'puncture', 'pankchar', 'wheel'], answer: 'Tyre fitting, puncture repair, balancing, and alignment. We handle all tyre needs.' },
  { keywords: ['engine', 'engine', 'motor'], answer: 'Expert engine tuning, servicing, and performance optimization. We fix all engine issues.' },
  { keywords: ['oil', 'lubricant', 'grease'], answer: 'Premium engine oil replacement for smooth and efficient performance.' },
  { keywords: ['electrical', 'battery', 'wire', 'light', 'lighting', 'charging'], answer: 'Battery, wiring, lighting, and electrical diagnostics. We fix all electrical problems.' },
  { keywords: ['hello', 'hi', 'hey', 'good', 'namaste', 'vanakkam'], answer: 'Hello! Welcome to Velayutham Auto Works. How can we help you today? You can ask about our services or click a suggestion below.' },
  { keywords: ['thank', 'thanks', 'appreciate'], answer: 'You are welcome! We are always here to help. Visit us or call +919751438066 anytime.' },
];

const findAnswer = (message) => {
  const lower = message.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const item of faqKnowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch && bestScore >= 2 ? bestMatch.answer : null;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { t } = useLanguage();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = (text) => {
    const messageText = (text || input).trim();
    if (!messageText) return;

    setMessages((prev) => [...prev, { id: Date.now(), text: messageText, sender: 'user' }]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const answer = findAnswer(messageText);
      if (answer) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: answer, sender: 'bot' }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: 'I am not sure about that. Let me connect you with our team via WhatsApp for more details.',
            sender: 'bot',
          },
        ]);
      }
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const suggestionKeywords = [
    'faq.items',
  ];

  const getSuggestions = () => {
    const faqs = t('faq.items') || [];
    if (!Array.isArray(faqs)) return [];
    return faqs.slice(0, 4);
  };

  const waUrl = createWhatsAppUrl(createTamilServiceInquiryMessage({}));

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col w-[320px] sm:w-[360px] border border-gray-100"
            style={{ maxHeight: '520px' }}
          >
            <div className="bg-gradient-to-r from-primary to-blue-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{t('chatBot.title')}</h3>
                  <p className="text-blue-100 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                    {t('chatBot.online')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
                aria-label={t('chatBot.closeLabel')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: '280px', maxHeight: '360px' }}>
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-1">{t('chatBot.greeting')}</p>
                  <p className="text-xs text-gray-500">{t('chatBot.greetingSub')}</p>
                </motion.div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-md shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-xs text-gray-500">{t('chatBot.typing')}</span>
                  </div>
                </motion.div>
              )}

              {messages.length === 0 && showSuggestions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2 pt-2"
                >
                  {getSuggestions().map((faq, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSend(faq.question)}
                      className="w-full text-left bg-white border border-gray-100 rounded-xl p-3 hover:bg-primary/5 hover:border-primary/20 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        {(() => {
                          const serviceName = t('services.general');
                          const Icon = getServiceIcon(faq.question);
                          return <Icon className="w-4 h-4 text-primary flex-shrink-0" />;
                        })()}
                        <span className="text-xs text-gray-700 group-hover:text-primary transition-colors line-clamp-2">
                          {faq.question}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {messages.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(waUrl, '_blank')}
                  className="w-full mt-2 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-xl p-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                >
                  <span>{t('chatBot.help')}</span>
                  <span className="text-green-600">{t('chatBot.helpWhatsApp')}</span>
                </motion.button>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-100 p-3 bg-white">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('chatBot.placeholder')}
                  className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-white transition-colors"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-primary hover:bg-blue-800 disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-blue-800'
        }`}
        aria-label={isOpen ? t('chatBot.closeLabel') : t('chatBot.openLabel')}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-7 h-7 text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
