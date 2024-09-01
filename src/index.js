import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
import translationES from './locales/es/translation.json';
import translationHI from './locales/hi/translation.json';
import {UserProvider} from "./AllPages/RegisterWasteForSale/waste";
import {DarkModeProvider} from "./Components/adminDashboard/DarkModeContext";


i18n.init({
    resources: {
        en: { translation: translationEN },
        ar: { translation: translationAR },
        es: { translation: translationES },
        hi: { translation: translationHI }
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
        escapeValue: false // React already does escaping
    }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <I18nextProvider i18n={i18n}>
              <DarkModeProvider>
                <UserProvider>
                    <App />
                </UserProvider>
              </DarkModeProvider>
          </I18nextProvider>,
      </BrowserRouter>
  </React.StrictMode>
);
