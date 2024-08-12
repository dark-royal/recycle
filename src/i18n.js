import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

i18n
    .use(LanguageDetector).use(initReactI18next).init({
debug: true,
   lng: 'en',
    resources:{
        en:{
            translation:{
                navbar1:"Home",
                navbar2:"About us",
                navbar3:"Locate",
                navbar4:"Blog"
            }
        },
        fr:{
            Navbar1: "Accueil",
            Navbar2: "À propos de nous",
            Navbar3: "Localiser",
            Navbar4: "Blog",

        },

        yo:{
            Navbar1: "Ile",
            Navbar2: "Nipa wa",
            Navbar3: "Wa",
            Navbar4: "Blogi",

        },

        hi:{
            Navbar1: "घर",
            Navbar2: "हमारे बारे में",
            Navbar3: "स्थान",
            Navbar4: "ब्लॉग"


        },
        sp:{
            Navbar1: "Inicio",
            Navbar2: "Sobre nosotros",
            Navbar3: "Ubicar",
            Navbar4: "Blog"
        }
    }

})