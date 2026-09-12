import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Your Trusted Bike Mechanics',
      description: 'Expert bike service at honest prices. We fix your bike right the first time, every time.',
      callNow: 'Call Us Now',
      whatsapp: 'WhatsApp Us',
      findUs: 'Find Us on Map',
    },
    stats: {
      customers: 'Happy Customers',
      bikes: 'Bikes Serviced',
      years: 'Years Experience',
      rating: 'Google Rating',
    },
    about: {
      title: 'Why Customers Trust Us',
      subtitle: 'We are your neighborhood bike mechanics. Simple, honest, and reliable service.',
      honest: 'Honest Service',
      honestDesc: 'No hidden charges. We explain the problem and cost before starting work.',
      experience: '15+ Years Experience',
      experienceDesc: 'Our mechanics have years of experience fixing all types of bikes.',
      quality: 'Quality Parts',
      qualityDesc: 'We use only genuine spare parts that last longer.',
      customer: 'Customer First',
      customerDesc: 'Your happiness is our goal. We work until you are satisfied.',
    },
    services: {
      title: 'What We Do',
      subtitle: 'All bike services under one roof. From oil change to engine repair.',
    },
    pricing: {
      title: 'Simple & Transparent Pricing',
      subtitle: 'No surprises. Know the cost before we start any work.',
      bestValue: 'Best Value',
      generalService: 'General Service',
      bookNow: 'Book Service Now',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a question or need service? We are here to help.',
      name: 'Your Name',
      phone: 'Phone Number',
      service: 'What Service Do You Need?',
      message: 'Describe Your Problem',
      send: 'Send via WhatsApp',
    },
    footer: {
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      services: 'சேவைகள்',
      pricing: 'விலை',
      reviews: 'விமர்சனங்கள்',
      contact: 'தொடர்பு',
    },
    hero: {
      tagline: 'உங்கள் நம்பகமான பைக் மெக்கானிக்',
      description: 'நியாய விலையில் நிபுணர் பைக் சேவை. முதல் முறையே சரியாக பழுது பார்ப்போம்.',
      callNow: 'இப்போது அழைக்கவும்',
      whatsapp: 'வாட்ஸ்அப் செய்யவும்',
      findUs: 'வரைபடத்தில் காண்க',
    },
    stats: {
      customers: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
      bikes: 'செய்யப்பட்ட பைக்குகள்',
      years: 'ஆண்டுகள் அனுபவம்',
      rating: 'Google மதிப்பீடு',
    },
    about: {
      title: 'ஏன் வாடிக்கையாளர்கள் எங்களை நம்புகிறார்கள்',
      subtitle: 'நாங்கள் உங்கள் அக்கம் பக்கத்தின் பைக் மெக்கானிக். எளிய, நேர்மையான மற்றும் நம்பகமான சேவை.',
      honest: 'நேர்மையான சேவை',
      honestDesc: 'மறைமுக கட்டணங்கள் இல்லை. வேலை தொடங்கும் முன் பிரச்சனை மற்றும் செலவை விளக்குகிறோம்.',
      experience: '15+ ஆண்டுகள் அனுபவம்',
      experienceDesc: 'எங்கள் மெக்கானிக்கள் அனைத்து வகை பைக்குகளையும் சரிசெய்ய பல ஆண்டுகள் அனுபவம் கொண்டவர்கள்.',
      quality: 'தரமான பாகங்கள்',
      qualityDesc: 'நீடித்த உண்மையான பாகங்களை மட்டுமே பயன்படுத்துகிறோம்.',
      customer: 'வாடிக்கையாளர் முதலில்',
      customerDesc: 'உங்கள் மகிழ்ச்சி எங்கள் இலக்கு. நீங்கள் திருப்தி அடையும் வரை வேலை செய்கிறோம்.',
    },
    services: {
      title: 'நாங்கள் என்ன செய்கிறோம்',
      subtitle: 'ஒரே கூரையின் கீழ் அனைத்து பைக் சேவைகள். எண்ணெய் மாற்றம் முதல் இயந்திர பழுது வரை.',
    },
    pricing: {
      title: 'எளிய மற்றும் வெளிப்படையான விலை',
      subtitle: 'ஆச்சரியம் இல்லை. வேலை தொடங்கும் முன் விலை தெரிந்துகொள்ளுங்கள்.',
      bestValue: 'சிறந்த மதிப்பு',
      generalService: 'பொது சேவை',
      bookNow: 'இப்போது பதிவு செய்யுங்கள்',
    },
    contact: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      subtitle: 'கேள்வி உள்ளதா அல்லது சேவை தேவையா? நாங்கள் இங்கே இருக்கிறோம்.',
      name: 'உங்கள் பெயர்',
      phone: 'தொலைபேசி எண்',
      service: 'எந்த சேவை தேவை?',
      message: 'உங்கள் பிரச்சனையை விவரிக்கவும்',
      send: 'வாட்ஸ்அப் மூலம் அனுப்பவும்',
    },
    footer: {
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'எங்கள் சேவைகள்',
      contactUs: 'எங்களை தொடர்பு கொள்ளுங்கள்',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
