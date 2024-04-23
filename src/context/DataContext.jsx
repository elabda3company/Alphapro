import React, { createContext, useState, useContext } from 'react';
import arData from '../components/arData';
import enData from '../components/enData';

const LanguageContext = createContext();

export const useLang = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const data = language === 'english' ? enData : arData;

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, data, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};