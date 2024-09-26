import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MenuDefault } from "./Switcherbtn";

function SecondSwitcher() {
    const { i18n } = useTranslation();

    const lang = localStorage.getItem("language");

    useEffect(() => {
        if (!lang) {
            localStorage.setItem("language", "en");
        }
    }, []);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="relative max-w-[70px] text-secondary">
            <MenuDefault />
        </div>
    );
}

export default SecondSwitcher;
