
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'ml' | 'hi';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data structure
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.dqaa': 'DQAA',
    'nav.books': 'Books',
    'nav.contact': 'Contact',
    'hero.title': 'Dr. P.T. Abdul Rahman',
    'hero.subtitle': 'Transforming lives through education, inspiring communities through service',
    'hero.cta.discover': 'Discover His Story',
    'hero.cta.vision': 'Watch His Vision',
    'dqaa.title': 'Darul Quran Abdulla Academy',
    'dqaa.subtitle': 'Excellence in Islamic Education',
    'dqaa.description': 'Founded by Dr. P.T. Abdul Rahman, DQAA represents the pinnacle of integrated Islamic education.',
    'admission.title': 'Join DQAA',
    'admission.subtitle': 'Begin Your Journey of Excellence',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Connect with Dr. Rahman',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الدكتور',
    'nav.dqaa': 'دار القرآن',
    'nav.books': 'الكتب',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'الدكتور ف.ت. عبد الرحمن',
    'hero.subtitle': 'تحويل الحياة من خلال التعليم، وإلهام المجتمعات من خلال الخدمة',
    'hero.cta.discover': 'اكتشف قصته',
    'hero.cta.vision': 'شاهد رؤيته',
    'dqaa.title': 'دار القرآن عبد الله أكاديمي',
    'dqaa.subtitle': 'التميز في التعليم الإسلامي',
    'dqaa.description': 'تأسست على يد الدكتور ف.ت. عبد الرحمن، تمثل دار القرآن قمة التعليم الإسلامي المتكامل.',
    'admission.title': 'انضم إلى دار القرآن',
    'admission.subtitle': 'ابدأ رحلة التميز',
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تواصل مع الدكتور الرحمن',
  },
  ml: {
    'nav.home': 'ഹോം',
    'nav.about': 'കുറിച്ച്',
    'nav.dqaa': 'ദാറുൽ ഖുർആൻ',
    'nav.books': 'പുസ്തകങ്ങൾ',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'hero.title': 'ഡോ. പി.ടി. അബ്ദുൽ റഹ്മാൻ',
    'hero.subtitle': 'വിദ്യാഭ്യാസത്തിലൂടെ ജീവിതം മാറ്റുന്നു, സേവനത്തിലൂടെ സമൂഹത്തെ പ്രചോദിപ്പിക്കുന്നു',
    'hero.cta.discover': 'അദ്ദേഹത്തിന്റെ കഥ കണ്ടെത്തുക',
    'hero.cta.vision': 'അദ്ദേഹത്തിന്റെ ദർശനം കാണുക',
    'dqaa.title': 'ദാറുൽ ഖുർആൻ അബ്ദുള്ള അക്കാദമി',
    'dqaa.subtitle': 'ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിലെ മികവ്',
    'dqaa.description': 'ഡോ. പി.ടി. അബ്ദുൽ റഹ്മാൻ സ്ഥാപിച്ച ദാറുൽ ഖുർആൻ സമഗ്ര ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിന്റെ ശിഖരമാണ്.',
    'admission.title': 'ദാറുൽ ഖുർആനിൽ ചേരുക',
    'admission.subtitle': 'മികവിന്റെ യാത്ര ആരംഭിക്കുക',
    'contact.title': 'ബന്ധപ്പെടുക',
    'contact.subtitle': 'ഡോ. റഹ്മാനുമായി ബന്ധപ്പെടുക',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'के बारे में',
    'nav.dqaa': 'दारुल कुरान',
    'nav.books': 'किताबें',
    'nav.contact': 'संपर्क करें',
    'hero.title': 'डॉ. पी.टी. अब्दुल रहमान',
    'hero.subtitle': 'शिक्षा के माध्यम से जीवन को बदलना, सेवा के माध्यम से समुदायों को प्रेरित करना',
    'hero.cta.discover': 'उनकी कहानी खोजें',
    'hero.cta.vision': 'उनका दृष्टिकोण देखें',
    'dqaa.title': 'दारुल कुरान अब्दुल्ला अकादमी',
    'dqaa.subtitle': 'इस्लामिक शिक्षा में उत्कृष्टता',
    'dqaa.description': 'डॉ. पी.टी. अब्दुल रहमान द्वारा स्थापित, दारुल कुरान एकीकृत इस्लामिक शिक्षा के शिखर का प्रतिनिधित्व करता है।',
    'admission.title': 'दारुल कुरान में शामिल हों',
    'admission.subtitle': 'उत्कृष्टता की यात्रा शुरू करें',
    'contact.title': 'संपर्क में रहें',
    'contact.subtitle': 'डॉ. रहमान से जुड़ें',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  const isRTL = currentLanguage === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, isRTL]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
