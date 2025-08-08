import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    'hero.subtitle': 'Desenvolvedor Backend em formação, atuando como QA',
    'hero.description': 'Sou apaixonado por tecnologia, qualidade e performance. Atualmente me especializo em backend e testes automatizados, buscando entregar soluções robustas e confiáveis.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Entre em Contato',
    'hero.copyEmail': 'Copiar Email',
    'hero.email': 'aulushzp@gmail.com',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia.',
    'contact.copyEmail': 'Copiar Email',
  },
  en: {
    'hero.subtitle': 'Backend Developer in training, working as QA',
    'hero.description': 'I am passionate about technology, quality and performance. I currently specialize in backend and automated testing, seeking to deliver robust and reliable solutions.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Get in Touch',
    'hero.copyEmail': 'Copy Email',
    'hero.email': 'aulushzp@gmail.com',
    'contact.title': 'Get in Touch',
    'contact.description': 'I am always open to discussing new opportunities, interesting projects or simply exchanging ideas about technology.',
    'contact.copyEmail': 'Copy Email',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
