import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    common: {
      callNow: 'Call Now',
      callUs: 'Call Us',
      whatsappUs: 'WhatsApp Us',
      getDirections: 'Get Directions',
      selectService: 'Select a service',
      selectTime: 'Select time',
      step: 'Step',
      code: 'Code',
      loading: 'Loading...',
      openNow: 'Open Now',
      closed: 'Closed',
      bookingSent: 'Booking Sent!',
      bookingConfirmed: 'Booking Confirmed!',
      weWillContact: 'We will contact you shortly to confirm your appointment.',
      bookAppointment: 'Book Appointment',
      bookViaWhatsapp: 'Book via WhatsApp',
      sendViaWhatsapp: 'Send via WhatsApp',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      close: 'Close',
      scrollToTop: 'Scroll to top',
    },
    language: {
      english: 'English',
      tamil: 'Tamil',
      switchToEnglish: 'Switch to English',
      switchToTamil: 'Switch to Tamil',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      trustedCustomers: 'Trusted by 5000+ Customers',
      rating: '4.9 Star Rating',
      warranty: '30-Day Warranty',
      freePickupDrop: 'Free Pickup & Drop',
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
      items: [
        {
          title: 'General Service',
          description: 'Complete bike inspection and maintenance to keep your ride in top condition.',
        },
        {
          title: 'Engine Service',
          description: 'Expert engine tuning, servicing, and performance optimization.',
        },
        {
          title: 'Oil Change',
          description: 'Premium engine oil replacement for smooth and efficient performance.',
        },
        {
          title: 'Brake Service',
          description: 'Brake pad replacement, disc servicing, and safety checks.',
        },
        {
          title: 'Tyre Service',
          description: 'Tyre fitting, puncture repair, balancing, and alignment.',
        },
        {
          title: 'Electrical Work',
          description: 'Battery, wiring, lighting, and electrical diagnostics.',
        },
        {
          title: 'Other Repairs',
          description: 'All types of bike repairs and spare parts replacement.',
        },
      ],
      general: 'General Service',
      engineRepair: 'Engine Repair',
      oilChange: 'Oil Change',
      brakeService: 'Brake Service',
      tyreService: 'Tyre/Puncture',
      electricalWork: 'Electrical Issue',
      other: 'Other',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Getting your bike serviced is easy. Just 4 simple steps.',
      steps: [
        { title: 'Call or WhatsApp', description: 'Contact us to book your service' },
        { title: 'We Check Your Bike', description: 'Our mechanic inspects and tells you the cost' },
        { title: 'We Fix It', description: 'Expert service with genuine parts' },
        { title: 'Take Your Bike Home', description: 'Ride safe with our quality guarantee' },
      ],
    },
    pricing: {
      title: 'Simple & Transparent Pricing',
      subtitle: 'No surprises. Know the cost before we start any work.',
      bestValue: 'Best Value',
      generalService: 'General Service',
      description: 'Complete check-up and maintenance for your bike',
      onwards: 'onwards',
      features: [
        'Full bike inspection',
        'Engine oil change',
        'Chain cleaning & lubrication',
        'Brake adjustment',
        'Tyre pressure check',
        'Lights & electrical check',
      ],
      bookNow: 'Book Service Now',
      priceNote: '* Final price depends on bike model and condition. We will confirm before starting work.',
    },
    highlights: {
      title: 'What Makes Us Different',
      subtitle: 'We give you the best service experience.',
      items: [
        { title: 'Genuine Parts', description: 'Only original spare parts' },
        { title: 'Quick Service', description: 'Ready in 2-3 hours' },
        { title: 'Expert Mechanics', description: '15+ years experience' },
        { title: 'Free Pickup', description: 'Within 10km radius' },
        { title: 'All Brands', description: 'Every bike brand' },
        { title: '30-Day Warranty', description: 'On all services' },
      ],
    },
    whyChooseUs: {
      title: 'Why Choose Us',
      subtitle: 'Here is why thousands of customers trust us with their bikes.',
      items: [
        { title: 'Experienced Mechanics', description: 'Skilled professionals with years of hands-on experience.' },
        { title: 'Quality Work', description: 'We use genuine parts and follow industry best practices.' },
        { title: 'Transparent Pricing', description: 'No hidden charges. Clear quotes before any work begins.' },
        { title: 'Reliable Service', description: 'On-time delivery and dependable service you can count on.' },
      ],
    },
    location: {
      title: 'Visit Us',
      subtitle: 'Find us at our workshop. We are conveniently located and ready to serve you.',
      address: 'Our Address',
      openingHours: 'Opening Hours',
      weekdays: 'Weekdays',
      saturday: 'Saturday',
      sunday: 'Sunday',
      getDirections: 'Get Directions',
    },
    faq: {
      title: 'Common Questions',
      subtitle: 'Quick answers to questions our customers ask.',
      items: [
        {
          question: 'How often should I service my bike?',
          answer: 'Every 2-3 months or 2000-3000 km. Regular service keeps your bike running smooth and saves money on big repairs.',
        },
        {
          question: 'Do you provide pickup and drop?',
          answer: 'Yes! Free pickup and drop within 10 km. Just call or WhatsApp us to arrange.',
        },
        {
          question: 'Which bike brands do you service?',
          answer: 'All brands! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM, and more.',
        },
        {
          question: 'How long does service take?',
          answer: 'General service takes 2-3 hours. Major repairs may take 1-2 days. We always tell you the time before starting.',
        },
        {
          question: 'Do you use genuine parts?',
          answer: 'Yes, always. We use genuine OEM parts and show you the old parts before replacing them.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'Cash, UPI (GPay, PhonePe, Paytm), and cards. Pay however you are comfortable.',
        },
        {
          question: 'Is there any warranty?',
          answer: 'Yes! 30-day warranty on all services. If the same problem comes back, we fix it free.',
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a question or need service? We are here to help.',
      contactInformation: 'Contact Information',
      description: 'We are open every day. Call, WhatsApp, or visit us anytime.',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      visitUs: 'Visit Us',
      workingHours: 'Working Hours',
      open7Days: 'Open 7 Days',
      sendUsMessage: 'Send Us a Message',
      name: 'Your Name',
      phone: 'Phone Number',
      service: 'What Service Do You Need?',
      message: 'Describe Your Problem',
      send: 'Send via WhatsApp',
      namePlaceholder: 'Enter your name',
      phonePlaceholder: 'Enter your phone number',
      messagePlaceholder: "Tell us what's wrong with your bike...",
    },
    footer: {
      description: 'Your trusted neighborhood bike mechanics. Honest service at fair prices.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contactUs: 'Contact Us',
      getDirections: 'Get Directions',
      rights: 'All rights reserved.',
      partner: 'Your Trusted Bike Service Partner',
      serviceList: [
        'General Service',
        'Engine Repair',
        'Oil Change',
        'Brake Service',
        'Tyre Service',
        'Electrical Work',
      ],
    },
    floatingWhatsapp: {
      tooltip: 'Need help? Chat with us!',
      ariaLabel: 'Chat on WhatsApp',
    },
    chatBot: {
      title: 'Velayutham Auto Bot',
      online: 'Online',
      greeting: 'Hi! Ask me anything',
      greetingSub: 'about our bike services',
      typing: 'Typing...',
      help: 'Need more help?',
      helpWhatsApp: 'Chat on WhatsApp',
      placeholder: 'Type your question...',
      openLabel: 'Open chat',
      closeLabel: 'Close chat',
    },
    booking: {
      quickBooking: 'Quick Booking',
      yourName: 'Your Name',
      phoneNumber: 'Phone Number',
      selectService: 'Select Service',
      bookingSent: 'Booking Sent!',
    },
    bookingModal: {
      title: 'Book a Service',
      subtitle: 'Fill the form and we will confirm your booking',
      yourName: 'Your Name',
      phoneNumber: 'Phone Number',
      serviceNeeded: 'Service Needed',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      additionalMessage: 'Additional Message (Optional)',
      namePlaceholder: 'Enter your name',
      phonePlaceholder: 'Enter your phone number',
      messagePlaceholder: 'Describe any specific issues...',
      selectService: 'Select a service',
      selectTime: 'Select time',
      bookAppointment: 'Book Appointment',
      bookingConfirmed: 'Booking Confirmed!',
      weWillContact: 'We will contact you shortly to confirm your appointment.',
      times: {
        '8am': '8:00 AM',
        '9am': '9:00 AM',
        '10am': '10:00 AM',
        '11am': '11:00 AM',
        '12pm': '12:00 PM',
        '1pm': '1:00 PM',
        '2pm': '2:00 PM',
        '3pm': '3:00 PM',
        '4pm': '4:00 PM',
        '5pm': '5:00 PM',
        '6pm': '6:00 PM',
      },
    },
  },
  ta: {
    common: {
      callNow: 'இப்போது அழைக்கவும்',
      callUs: 'எங்களை அழைக்கவும்',
      whatsappUs: 'வாட்ஸ்அப் செய்யவும்',
      getDirections: 'வழிதடத்தைப் பெறுங்கள்',
      selectService: 'சேவையைத் தேர்வு செய்யவும்',
      selectTime: 'நேரத்தைத் தேர்வு செய்யவும்',
      step: 'படி',
      code: 'குறியீடு',
      loading: 'ஏற்றுகிறது...',
      openNow: 'இப்போது திறந்துள்ளது',
      closed: 'மூடப்பட்டுள்ளது',
      bookingSent: 'பதிவு அனுப்பப்பட்டது!',
      bookingConfirmed: 'பதிவு உறுதிசெய்யப்பட்டது!',
      weWillContact: 'உங்கள் சந்திப்பை உறுதிசெய்ய நாங்கள் விரைவில் தொடர்பு கொள்வோம்.',
      bookAppointment: 'சந்திப்பை பதிவு செய்யவும்',
      bookViaWhatsapp: 'வாட்ஸ்அப் மூலம் பதிவு செய்யவும்',
      sendViaWhatsapp: 'வாட்ஸ்அப் மூலம் அனுப்பவும்',
      openMenu: 'மெனுவைத் திறக்கவும்',
      closeMenu: 'மெனுவை மூடவும்',
      close: 'மூடவும்',
      scrollToTop: 'மேலே செல்லவும்',
    },
    language: {
      english: 'ஆங்கிலம்',
      tamil: 'தமிழ்',
      switchToEnglish: 'ஆங்கிலத்திற்கு மாற்றவும்',
      switchToTamil: 'தமிழிற்கு மாற்றவும்',
    },
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      services: 'சேவைகள்',
      pricing: 'விலை',
      reviews: 'வாடிக்கையாளர் கருத்துக்கள்',
      contact: 'தொடர்பு',
    },
    hero: {
      trustedCustomers: '5000+ வாடிக்கையாளர்களின் நம்பிக்கை',
      rating: '4.9 நட்சத்திர மதிப்பீடு',
      warranty: '30 நாட்கள் உறுதி',
      freePickupDrop: 'இலவச பிக்அப் & டிராப்',
      tagline: 'உங்கள் நம்பகமான பைக் மெக்கானிக்',
      description: 'நியாய விலையில் நிபுணர் பைக் சேவை. உங்கள் பைக்கை முதல் முறையிலேயே சரியாக பழுது பார்ப்போம்.',
      callNow: 'இப்போது அழைக்கவும்',
      whatsapp: 'வாட்ஸ்அப் செய்யவும்',
      findUs: 'வரைபடத்தில் எங்களை காண்க',
    },
    stats: {
      customers: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
      bikes: 'சேவை செய்யப்பட்ட பைக்குகள்',
      years: 'ஆண்டுகள் அனுபவம்',
      rating: 'Google மதிப்பீடு',
    },
    about: {
      title: 'ஏன் வாடிக்கையாளர்கள் எங்களை நம்புகிறார்கள்',
      subtitle: 'நாங்கள் உங்கள் பகுதியின் பைக் மெக்கானிக். எளிய, நேர்மையான மற்றும் நம்பகமான சேவை.',
      honest: 'நேர்மையான சேவை',
      honestDesc: 'மறைமுக கட்டணங்கள் கிடையாது. வேலை தொடங்கும் முன் கோளாரு மற்றும் செலவை விளக்குகிறோம்.',
      experience: '15+ ஆண்டுகள் அனுபவம்',
      experienceDesc: 'அனைத்து வகை பைக்குகளையும் சரிசெய்வதில் எங்கள் மெக்கானிக்களுக்கு பல ஆண்டுகள் அனுபவம் உள்ளது.',
      quality: 'தரமான பாகங்கள்',
      qualityDesc: 'நீடித்து நிற்கும் அசல் spare parts-களை மட்டுமே பயன்படுத்துகிறோம்.',
      customer: 'வாடிக்கையாளர் முதலில்',
      customerDesc: 'உங்கள் மகிழ்ச்சியே எங்கள் இலக்கு. நீங்கள் முழு திருப்தி அடையும் வரை பணிபுரிவோம்.',
    },
    services: {
      title: 'நாங்கள் செய்யும் சேவைகள்',
      subtitle: 'ஆயில் மாற்றம் முதல் இயந்திர பழுதுபார்ப்பு வரை அனைத்து பைக் சேவைகளும் ஒரே இடத்தில்.',
      items: [
        {
          title: 'பொது சேவை',
          description: 'உங்கள் பைக்கை சிறந்த நிலையில் வைத்திருக்க முழு பரிசோதனை மற்றும் பராமரிப்பு.',
        },
        {
          title: 'இயந்திர சேவை',
          description: 'நிபுணர் இயந்திர ட்யூனிங், சேவை மற்றும் செயல்திறன் மேம்பாடு.',
        },
        {
          title: 'ஆயில் மாற்றம்',
          description: 'சீரான மற்றும் திறமையான செயல்திறனுக்கு உயர்தர இயந்திர ஆயில் மாற்றம்.',
        },
        {
          title: 'பிரேக் சேவை',
          description: 'பிரேக் பேட் மாற்றம், டிஸ்க் சேவை மற்றும் பாதுகாப்பு பரிசோதனை.',
        },
        {
          title: 'டயர் சேவை',
          description: 'டயர் பொருத்துதல், பங்க்சர் சரிசெய்தல், பாலன்ஸிங் மற்றும் அலைன்மெண்ட்.',
        },
        {
          title: 'மின்சார பணி',
          description: 'பேட்டரி, வயரிங், லைடிங் மற்றும் மின்சார பிழை கண்டறிதல்.',
        },
        {
          title: 'மற்ற பழுதுபார்ப்புக்கள்',
          description: 'அனைத்து வகை பைக் பழுதுபார்ப்பு மற்றும் spare parts மாற்றம்.',
        },
      ],
      general: 'பொது சேவை',
      engineRepair: 'இயந்திர பழுதுபார்ப்பு',
      oilChange: 'ஆயில் மாற்றம்',
      brakeService: 'பிரேக் சேவை',
      tyreService: 'டயர் / பங்க்சர்',
      electricalWork: 'மின்சார பிரச்சனை',
      other: 'மற்றவை',
    },
    howItWorks: {
      title: 'இது எப்படி செயல்படுகிறது',
      subtitle: 'உங்கள் பைக்குக்கு சேவை செய்வது மிக எளியது. வெறும் 4 எளிய படிகள்.',
      steps: [
        { title: 'அழைக்கவும் அல்லது WhatsApp செய்யவும்', description: 'சேவையை பதிவு செய்ய எங்களை தொடர்பு கொள்ளவும்' },
        { title: 'உங்கள் பைக்கை சோதிப்போம்', description: 'எங்கள் மெக்கானிக் பரிசோதித்து செலவைச் சொல்வார்' },
        { title: 'பழுதுபார்ப்போம்', description: 'அசல் பாகங்களுடன் நிபுணர் சேவை' },
        { title: 'உங்கள் பைக்கை பெற்றுச் செல்லவும்', description: 'எங்கள் தர உறுதியுடன் பாதுகாப்பாக பயணிக்கவும்' },
      ],
    },
    pricing: {
      title: 'எளிய மற்றும் வெளிப்படையான விலை',
      subtitle: 'முன்கூட்டிய ஆச்சரியங்கள் இல்லை. வேலை தொடங்கும் முன் செலவைத் தெரிந்துகொள்ளவும்.',
      bestValue: 'சிறந்த தேர்வு',
      generalService: 'பொது சேவை',
      description: 'உங்கள் பைக்குக்கான முழு சோதனை மற்றும் பராமரிப்பு',
      onwards: 'தொடங்கி',
      features: [
        'முழு பைக் பரிசோதனை',
        'இயந்திர ஆயில் மாற்றம்',
        'செயின் சுத்தமிடுதல் & லூப்ரிக்கேஷன்',
        'பிரேக் சரிசெய்தல்',
        'டயர் அழுத்த பரிசோதனை',
        'லைட்கள் & மின்சார பரிசோதனை',
      ],
      bookNow: 'சேவையை இப்போது பதிவு செய்யவும்',
      priceNote: '* இறுதி விலை பைக் மாடல் மற்றும் நிலைமையை பொறுத்தது. வேலை தொடங்கும் முன் உறுதி செய்வோம்.',
    },
    highlights: {
      title: 'எங்களை வேறுபடுத்துவது என்ன',
      subtitle: 'சிறந்த சேவை அனுபவத்தை வழங்குகிறோம்.',
      items: [
        { title: 'அசல் பாகங்கள்', description: 'அசல் spare parts மட்டும்' },
        { title: 'விரைவான சேவை', description: '2-3 மணிநேரத்தில் தயார்' },
        { title: 'நிபுணர் மெக்கானிக்குகள்', description: '15+ ஆண்டுகள் அனுபவம்' },
        { title: 'இலவச பிக்அப்', description: '10 கி.மீ. சுற்றுப்புறத்தில்' },
        { title: 'அனைத்து பிராண்டுகள்', description: 'எல்லா பைக் பிராண்டுகளும்' },
        { title: '30 நாட்கள் உறுதி', description: 'அனைத்து சேவைகளிலும்' },
      ],
    },
    whyChooseUs: {
      title: 'எங்களை ஏன் தேர்ந்தெடுக்க வேண்டும்',
      subtitle: 'ஆயிரக்கணக்கான வாடிக்கையாளர்கள் தங்கள் பைக்குகளை எங்களிடம் ஒப்படைப்பதற்கான காரணங்கள்.',
      items: [
        { title: 'அனுபவம் வாய்ந்த மெக்கானிக்குகள்', description: 'பல ஆண்டுகள் நேரடி அனுபவம் கொண்ட திறமையான நிபுணர்கள்.' },
        { title: 'தரமான பணி', description: 'அசல் பாகங்களைப் பயன்படுத்தி சிறந்த நடைமுறைகளைப் பின்பற்றுகிறோம்.' },
        { title: 'வெளிப்படையான விலை', description: 'மறைமுக கட்டணங்கள் இல்லை. வேலைக்கு முன் தெளிவான மதிப்பு.' },
        { title: 'நம்பகமான சேவை', description: 'நீங்கள் நம்பக்கூடிய நேரத்தில் நம்பகமான சேவை.' },
      ],
    },
    location: {
      title: 'எங்களை சந்திக்கவும்',
      subtitle: 'எங்கள் வர்க்ஷாப்பில் காண்க. எளிதாக அடையக்கூடிய இடத்தில் சேவைக்கு தயாராக உள்ளோம்.',
      address: 'எங்கள் முகவரி',
      openingHours: 'திறந்திருக்கும் நேரம்',
      weekdays: 'வார நாட்கள்',
      saturday: 'சனிக்கிழமை',
      sunday: 'ஞாயிற்றுக்கிழமை',
      getDirections: 'வழிதடத்தைப் பெறுங்கள்',
    },
    faq: {
      title: 'பொதுவான கேள்விகள்',
      subtitle: 'வாடிக்கையாளர்கள் கேட்கும் கேள்விகளுக்கான விரைவான பதில்கள்.',
      items: [
        {
          question: 'எனது பைக்கை எவ்வளவு இடைவெளியில் சேவை செய்ய வேண்டும்?',
          answer: 'ஒவ்வொரு 2-3 மாதங்களிலும் அல்லது 2000-3000 கி.மீ. பிறகு சேவை செய்யவும். வழக்கமான சேவை பைக்கை சீராக இயக்கி, பெரிய பழுதுபார்ப்பு செலவை மிச்சப்படுத்தும்.',
        },
        {
          question: 'பிக்அப் மற்றும் டிராப் சேவை உள்ளதா?',
          answer: 'ஆம்! 10 கி.மீ. தூரத்திற்குள் இலவச பிக்அப் மற்றும் டிராப். ஏற்பாடு செய்ய எங்களை அழைக்கவும் அல்லது WhatsApp செய்யவும்.',
        },
        {
          question: 'எந்த பைக் பிராண்டுகளுக்கு சேவை செய்கிறீர்கள்?',
          answer: 'அனைத்து பிராண்டுகளும்! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM மற்றும் பல.',
        },
        {
          question: 'சேவை செய்ய எவ்வளவு நேரம் ஆகும்?',
          answer: 'பொது சேவைக்கு 2-3 மணிநேரம் ஆகும். பெரிய பழுதுபார்ப்புகளுக்கு 1-2 நாட்கள் ஆகலாம். தொடங்கும் முன் நேரத்தைச் சொல்வோம்.',
        },
        {
          question: 'அசல் பாகங்களைப் பயன்படுத்துகிறீர்களா?',
          answer: 'ஆம், எப்போதும். அசல் OEM பாகங்களைப் பயன்படுத்துகிறோம்; மாற்றும் முன் பழைய பாகங்களை காட்டுகிறோம்.',
        },
        {
          question: 'எந்த பணப்பரிவர்த்தனை முறைகளை ஏற்றுக்கொள்கிறீர்கள்?',
          answer: 'ரொக்கம், UPI (GPay, PhonePe, Paytm) மற்றும் கார்டுகள். உங்களுக்கு ஏற்றப்படி செலுத்தலாம்.',
        },
        {
          question: 'உறுதிக் காலம் உள்ளதா?',
          answer: 'ஆம்! அனைத்து சேவைகளுக்கும் 30 நாட்கள் உறுதி. அதே பிரச்சனை மீண்டும் வந்தால் இலவசமாக சரிசெய்வோம்.',
        },
      ],
    },
    contact: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      subtitle: 'கேள்வி உள்ளதா அல்லது சேவை தேவையா? நாங்கள் உதவ இங்கே இருக்கிறோம்.',
      contactInformation: 'தொடர்பு தகவல்',
      description: 'நாங்கள் தினமும் திறந்திருப்போம். அழைக்கவும், WhatsApp செய்யவும் அல்லது எங்களை நேரில் சந்திக்கவும்.',
      callUs: 'எங்களை அழைக்கவும்',
      whatsapp: 'WhatsApp',
      visitUs: 'எங்களை சந்திக்கவும்',
      workingHours: 'வேலை நேரம்',
      open7Days: '7 நாட்களும் திறந்து',
      sendUsMessage: 'எங்களுக்கு செய்தி அனுப்பவும்',
      name: 'உங்கள் பெயர்',
      phone: 'மொபைல் எண்',
      service: 'உங்களுக்கு எந்த சேவை தேவை?',
      message: 'உங்கள் பிரச்சனையை விவரிக்கவும்',
      send: 'வாட்ஸ்அப் மூலம் அனுப்பவும்',
      namePlaceholder: 'உங்கள் பெயரை உள்ளிடவும்',
      phonePlaceholder: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
      messagePlaceholder: 'உங்கள் பைக்கில் உள்ள பிரச்சனையை எங்களுக்கு சொல்லவும்...',
    },
    footer: {
      description: 'உங்கள் நம்பகமான உள்ளூர் பைக் மெக்கானிக். நியாய விலையில் நேர்மையான சேவை.',
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'எங்கள் சேவைகள்',
      contactUs: 'எங்களை தொடர்பு கொள்ளுங்கள்',
      getDirections: 'வழிதடத்தைப் பெறுங்கள்',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      partner: 'உங்கள் நம்பகமான பைக் சேவை பங்குதாரர்',
      serviceList: [
        'பொது சேவை',
        'இயந்திர பழுதுபார்ப்பு',
        'ஆயில் மாற்றம்',
        'பிரேக் சேவை',
        'டயர் சேவை',
        'மின்சார பணி',
      ],
    },
    floatingWhatsapp: {
      tooltip: 'உதவி வேண்டுமா? எங்களுடன் பேசுங்கள்!',
      ariaLabel: 'WhatsApp மூலம் பேசவும்',
    },
    chatBot: {
      title: 'வேலையுடம் ஆட்டோ பாட்',
      online: 'இணைநிலையில்',
      greeting: 'வணக்கம்! எந்தக் கேள்வியாலும்',
      greetingSub: 'எங்கள் பைக் சேவைகளைப் பற்றி',
      typing: 'எழுதுகிறது...',
      help: 'மேலும் உதவி வேண்டுமா?',
      helpWhatsApp: 'WhatsApp மூலம் பேசுங்கள்',
      placeholder: 'உங்கள் கேள்வியை வழங்குக',
      openLabel: 'அரட்டைத் திறக்கவும்',
      closeLabel: 'அரட்டை மூடுங்கள்',
    },
    booking: {
      quickBooking: 'விரைவான பதிவு',
      yourName: 'உங்கள் பெயர்',
      phoneNumber: 'மொபைல் எண்',
      selectService: 'சேவையைத் தேர்ந்தெடுக்கவும்',
      bookingSent: 'பதிவு அனுப்பப்பட்டது!',
    },
    bookingModal: {
      title: 'சேவையை பதிவு செய்யவும்',
      subtitle: 'பார்மை நிரப்பவும்; நாங்கள் உங்கள் பதிவை உறுதி செய்வோம்',
      yourName: 'உங்கள் பெயர்',
      phoneNumber: 'மொபைல் எண்',
      serviceNeeded: 'தேவையான சேவை',
      preferredDate: 'விருப்பமான தேதி',
      preferredTime: 'விருப்பமான நேரம்',
      additionalMessage: 'கூடுதல் செய்தி (விருப்பம்)',
      namePlaceholder: 'உங்கள் பெயரை உள்ளிடவும்',
      phonePlaceholder: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
      messagePlaceholder: 'குறிப்பிட்ட பிரச்சனைகளை விவரிக்கவும்...',
      selectService: 'சேவையைத் தேர்ந்தெடுக்கவும்',
      selectTime: 'நேரத்தைத் தேர்ந்தெடுக்கவும்',
      bookAppointment: 'சந்திப்பை பதிவு செய்யவும்',
      bookingConfirmed: 'பதிவு உறுதிசெய்யப்பட்டது!',
      weWillContact: 'உங்கள் சந்திப்பை உறுதிசெய்ய நாங்கள் விரைவில் தொடர்பு கொள்வோம்.',
      times: {
        '8am': 'காலை 8:00',
        '9am': 'காலை 9:00',
        '10am': 'காலை 10:00',
        '11am': 'காலை 11:00',
        '12pm': 'மதியம் 12:00',
        '1pm': 'மதியம் 1:00',
        '2pm': 'மதியம் 2:00',
        '3pm': 'மதியம் 3:00',
        '4pm': 'மாலை 4:00',
        '5pm': 'மாலை 5:00',
        '6pm': 'மாலை 6:00',
      },
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'ta') return savedLanguage;

    return window.navigator.language?.toLowerCase().startsWith('ta') ? 'ta' : 'en';
  });

  const changeLanguage = (lang) => {
    if (lang !== 'en' && lang !== 'ta') return;

    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
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
