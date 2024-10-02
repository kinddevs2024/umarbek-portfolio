
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import enGlobal from "./en/global";
import ruGlobal from "./ru/global";
import uzGlobal from "./uz/global";
import { useEffect, useLayoutEffect } from "react";





const resources = {
    en: {

        global: enGlobal,
    },
    ru: {

        global: ruGlobal,
    },
    uz: {

        global: uzGlobal,
    },
};





// if (!lang) {
//     localStorage.setItem("language", "en");

// } else {
//     localStorage.getItem("language");

// }


// const lang = localStorage.setItem("language");
// const langu = localStorage.getItem("language");





// const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     localStorage.setItem("language", selectedLanguage);
//     i18n.changeLanguage(selectedLanguage);
// };

// const lan = () =>{
//     if (!lang) {
//         localStorage.setItem("language", "en");
//     } else {
//         localStorage.getItem("language");
//     }


// }

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en" ,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
