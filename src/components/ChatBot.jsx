import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Wrench, Settings, Droplet, Shield, Circle, Zap, Hammer, HelpCircle, Loader2, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';
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
  { keywords: ['service', 'servic', 'check', 'mainten', 'inspect', 'சேவை', 'சோதனை', 'பராமரிப்பு', 'பழுதுபார்ப்பு', 'பரிசோதனை'], answerEn: 'Every 2-3 months or 2000-3000 km. Regular service keeps your bike running smooth and saves money on big repairs.', answerTa: 'ஒவ்வொரு 2-3 மாதங்களிலும் அல்லது 2000-3000 கி.மீ. பிறகு சேவை செய்யவும். வழக்கமான சேவை பைக்கை சீராக இயக்கி, பெரிய பழுதுபார்ப்பு செலவை மிச்சப்படுத்தும்.' },
  { keywords: ['pickup', 'drop', 'collect', 'bring', 'fetch', 'carry', 'பிக்அப்', 'டிராப்', 'தொடர்பு', 'கொண்டு', 'வாங்கி'], answerEn: 'Yes! Free pickup and drop within 10 km. Just call or WhatsApp us to arrange.', answerTa: 'ஆம்! 10 கி.மீ. தூரத்திற்குள் இலவச பிக்அப் மற்றும் டிராப். ஏற்பாடு செய்ய எங்களை அழைக்கவும் அல்லது WhatsApp செய்யவும்.' },
  { keywords: ['brand', 'brands', 'honda', 'hero', 'tvs', 'bajaj', 'royal enfield', 'yamaha', 'suzuki', 'ktm', 'which bike', 'all bike', 'பிராண்டு', 'கயற்கள்', 'எந்த', 'அனைத்து', 'சேவை', 'பைக்'], answerEn: 'All brands! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM, and more.', answerTa: 'அனைத்து பிராண்டுகளும்! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM மற்றும் பல.' },
  { keywords: ['time', 'how long', 'duration', 'hours', 'how much time', 'take long', 'நேரம்', 'எவ்வளவு', 'படிகள்', 'மணிநேரம்', 'ஆகும்'], answerEn: 'General service takes 2-3 hours. Major repairs may take 1-2 days. We always tell you the time before starting.', answerTa: 'பொது சேவைக்கு 2-3 மணிநேரம் ஆகும். பெரிய பழுதுபார்ப்புகளுக்கு 1-2 நாட்கள் ஆகலாம். தொடங்கும் முன் நேரத்தைச் சொல்வோம்.' },
  { keywords: ['genuine', 'original', 'part', 'parts', 'oem', 'original parts', 'அசல்', 'தனியான', 'பாகங்கள்', 'பூன்னர்', 'OEM'], answerEn: 'Yes, always. We use genuine OEM parts and show you the old parts before replacing them.', answerTa: 'ஆம், எப்போதும். அசல் OEM பாகங்களைப் பயன்படுத்துகிறோம்; மாற்றும் முன் பழைய பாகங்களை காட்டுகிறோம்.' },
  { keywords: ['payment', 'pay', 'method', 'cash', 'upi', 'card', 'gpay', 'phonepe', 'paytm', 'how pay', 'கடத்தல்', 'முறை', 'பொருள்', 'செலுத்தல்', 'ரொக்கம்', 'UPI', 'கார்டு'], answerEn: 'Cash, UPI (GPay, PhonePe, Paytm), and cards. Pay however you are comfortable.', answerTa: 'ரொக்கம், UPI (GPay, PhonePe, Paytm) மற்றும் கார்டுகள். உங்களுக்கு ஏற்றப்படி செலுத்தலாம்.' },
  { keywords: ['warranty', 'guarantee', 'guar', 'covered', 'உறுதி', 'காலம்', 'நீட்டம்', 'பாதுகாப்பு', 'செயல்படும்', 'இலவசமாக'], answerEn: 'Yes! 30-day warranty on all services. If the same problem comes back, we fix it free.', answerTa: 'ஆம்! அனைத்து சேவைகளுக்கும் 30 நாட்கள் உறுதி. அதே பிரச்சனை மீண்டும் வந்தால் இலவசமாக சரிசெய்வோம்.' },
  { keywords: ['price', 'cost', 'charge', 'fee', 'how much', 'expensive', 'cheap', 'rate', 'விலை', 'செலவு', 'சம்பாதித்தல்', 'செயல்படுத்தல்', 'பண்ணும்', 'எவ்வளவு', 'தனியாக'], answerEn: 'We give clear quotes before starting any work. No hidden charges. Call or WhatsApp for a quote.', answerTa: 'வேலை தொடங்கும் முன் தெளிவான மதிப்பைக் கொடுக்கும். மறைமுக கட்டணங்கள் இல்லை. மதிப்பு பெற அழைக்கவும் அல்லது WhatsApp செய்யவும்.' },
  { keywords: ['contact', 'phone', 'number', 'address', 'location', 'visit', 'find', 'where', 'தொடர்பு', 'தொலைப்பதிவு', 'முகவரி', 'இடம்', 'சந்திக்கவும்', 'எங்கு', 'இடம்'], answerEn: 'We are at Near Highway Trichy-Chennai, Veppur, Cuddalore District, Tamil Nadu - 606304. Call +919751438066 or WhatsApp us.', answerTa: 'நாங்கள் Near Highway Trichy-Chennai, Veppur, Cuddalore District, Tamil Nadu - 606304 இல் உள்ளோம். +919751438066 அழைக்கவும் அல்லது WhatsApp செய்யவும்.' },
  { keywords: ['book', 'appointment', 'schedule', 'fix', 'visit', 'coming', 'arrange', 'பதிவு', 'சந்திப்பு', 'திரும்பு', 'நேரம்', 'செய்யவும்', 'ஏற்பாடு', 'வரவும்'], answerEn: 'You can book a service by calling us, WhatsApping us, or using the Book Appointment button on our site.', answerTa: 'நாங்களை அழைத்து, WhatsApp செய்து, அல்லது இந்த தகவில் Book Appointment பெண்ணத்தைப் பயன்படுத்தி சேவையை பதிவு செய்யலாம்.' },
  { keywords: ['brake', 'braking', 'disc', 'பிரேக்', 'தடை', 'டிஸ்க்', 'பாதுகாப்பு', 'பேட்'], answerEn: 'We do brake pad replacement, disc servicing, and safety checks. Your safety comes first.', answerTa: 'பிரேக் பேட் மாற்றம், டிஸ்க் சேவை மற்றும் பாதுகாப்பு பரிசோதனை செய்கிறோம். உங்கள் பாதுகாப்பு முதலில்.' },
  { keywords: ['tyre', 'puncture', 'pankchar', 'wheel', 'டயர்', 'பங்க்சர்', 'வீட்டக் கோள்', 'நிலைநிற்கல்', 'சரிசெய்தல்', 'அழுத்தம்', 'நிர்வகப்படுத்தல்'], answerEn: 'Tyre fitting, puncture repair, balancing, and alignment. We handle all tyre needs.', answerTa: 'டயர் பொருத்துதல், பங்க்சர் சரிசெய்தல், பாலன்ஸிங் மற்றும் அலைன்மெண்ட். டயர் தொனியத்தைச் சாத்தியமாக நடத்துகிறோம்.' },
  { keywords: ['engine', 'motor', 'இயந்திர', 'தனிமண்டலம்', 'வெட்கம்', 'அழுத்தம்', 'செயல்திறன்', 'பழுதுபார்ப்பு'], answerEn: 'Expert engine tuning, servicing, and performance optimization. We fix all engine issues.', answerTa: 'நிபுணர் இயந்திர ட்யூனிங், சேவை மற்றும் செயல்திறன் மேம்பாடு. அனைத்து இயந்திர பிரச்சனைகளையும் சரிசெய்வோம்.' },
  { keywords: ['oil', 'lubricant', 'grease', 'ஆயில்', 'ஊட்டச்சத்து', 'கொழும்பு', 'சீரான'], answerEn: 'Premium engine oil replacement for smooth and efficient performance.', answerTa: 'சீரான மற்றும் திறமையான செயல்திறனுக்கு உயர்தர இயந்திர ஆயில் மாற்றம்.' },
  { keywords: ['electrical', 'battery', 'wire', 'light', 'lighting', 'charging', 'மின்சார', 'பேட்டரி', 'வயரிங்', 'விதகுதல்', 'ஒளி', 'மீண்டும் சரிசெய்தல்', 'காட்சி'], answerEn: 'Battery, wiring, lighting, and electrical diagnostics. We fix all electrical problems.', answerTa: 'பேட்டரி, வயரிங், லைடிங் மற்றும் மின்சார பிழை கண்டறிதல். அனைத்து மின்சார பிரச்சனைகளையும் சரிசெய்வோம்.' },
  { keywords: ['hello', 'hi', 'hey', 'good', 'namaste', 'vanakkam', 'வணக்கம்', 'கேட்கிறேன்', 'ஹாய்', 'உங்கள்', 'உதவி'], answerEn: 'Hello! Welcome to Velayutham Auto Works. How can we help you today? You can ask about our services or click a suggestion below.', answerTa: 'வணக்கம்! Velayutham Auto Works க்கு வரவேற்கிறோம். இன்றைய உங்களுக்கு எப்படி உதவலாம்? எங்கள் சேவைகளைப் பற்றிய கேள்விகள் கேட்கவும் அல்லது கீழே உள்ள முன்வர்களைத் தேர்ந்தெடுங்கள்.' },
  { keywords: ['thank', 'thanks', 'appreciate', 'நன்றி', 'வாழ்த்துக்கள்', 'பாராட்டு'], answerEn: 'You are welcome! We are always here to help. Visit us or call +919751438066 anytime.', answerTa: 'உங்கள் வாழ்த்துக்கள்! நாங்கள் எப்போதும் உதவ இருக்கிறோம். எங்களை எப்போதும் அழைக்கவும் அல்லது +919751438066 அழைக்கவும்.' },
];

const findAnswer = (message, language) => {
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

  if (!bestMatch || bestScore < 1) return null;
  return language === 'ta' ? bestMatch.answerTa : bestMatch.answerEn;
};

const speakText = (text, language) => {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === 'ta' ? 'ta-IN' : 'en-US';
  utterance.rate = 0.95;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const targetLang = language === 'ta' ? 'ta' : 'en';
  let matchedVoice = null;

  for (const voice of voices) {
    if (voice.lang.toLowerCase().startsWith(targetLang)) {
      matchedVoice = voice;
      break;
    }
  }

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  window.speechSynthesis.speak(utterance);
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const { language, t } = useLanguage();
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
      const answer = findAnswer(messageText, language);
      if (answer) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: answer, sender: 'bot' }]);
        if (!isMuted) {
          setTimeout(() => speakText(answer, language), 1400);
        }
      } else {
        const fallbackEn = "I'm not sure about that. Here are some things I can help with:\n- How often should I service my bike?\n- Do you provide pickup and drop?\n- Which bike brands do you service?\n- How long does service take?\n- What payment methods do you accept?\n- Do you use genuine parts?\n- Is there a warranty?\n\nYou can ask about these or chat with our team on WhatsApp for more details.";
        const fallbackTa = "அந்தக் கேள்வியை நிரூதமாக அறியவில்லை. என்னை இந்த காரிகளில் உதவலாம்:\n- எனது பைக்கை எவ்வளவு இடைவெளியில் சேவை செய்ய வேண்டும்?\n- பிக்அப் மற்றும் டிராப் சேவை உள்ளதா?\n- எந்த பைக் பிராண்டுகளுக்கு சேவை செய்கிறீர்கள்?\n- சேவை செய்ய எவ்வளவு நேரம் ஆகும்?\n- எந்த பணப்பரிவர்த்தனை முறைகளை ஏற்றுக்கொள்கிறீர்கள்?\n- அசல் பாகங்களைப் பயன்படுத்துகிறீர்களா?\n- உறுதிக் காலம் உள்ளதா?\n\nஇவை பற்றி கேட்கவும் அல்லது கீழே WhatsApp மூலம் தொடர்பு கொள்ளுங்கள்.";
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: language === 'ta' ? fallbackTa : fallbackEn,
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
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white/80 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
                  aria-label={isMuted ? t('chatBot.unmuteLabel') : t('chatBot.muteLabel')}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
                  aria-label={t('chatBot.closeLabel')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
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
                        <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
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
