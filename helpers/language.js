import { Localization } from 'expo';
import i18n from 'i18n-js';

const en = {
  appName: 'Memory Cards',
  chooseOwnLang: 'Choose your own language',
  chooseTargetLang: 'Choose the language you want to learn',
  en: 'English',
  tr: 'Turkish',
  fr: 'French',
  es: 'Espanol',
  de: 'Deutsch',
  it: 'Italy',
  save: 'Save'
};

const fr = {
  
};

const tr = {
  appName: 'Hafıza Kartları',
  chooseOwnLang: 'Kendi dilinizi seçin',
  chooseTargetLang: 'Choose the language you want to learn',
  en: 'İngilizce',
  tr: 'Türkçe',
  fr: 'French',
  es: 'Espanol',
  de: 'Deutsch',
  it: 'Italy',
  save: 'Save'
};

const es = {
  
};

const it = {

};

const de = {

};


i18n.fallbacks = true;
i18n.translations = { fr, en, tr, es, it, de };
i18n.locale = Localization.locale;

export default i18n;