import React, { createContext, useContext, useState, ReactNode } from 'react';

// Indian regional languages + English
export type LanguageCode = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'ml' | 'bn' | 'mr' | 'gu' | 'pa';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isHindi: boolean; // For backward compatibility
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      isHindi: language === 'hi' // For backward compatibility
    }}>
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

