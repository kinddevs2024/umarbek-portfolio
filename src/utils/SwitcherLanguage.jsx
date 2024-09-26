import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from "/public/uzb.png"


function LanguageSwitcher() {
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
        <div className="relative max-w-[120px] text-secondary sm:flex hidden">
            <select
                defaultValue={localStorage.getItem("language")}
                onChange={handleLanguageChange}
                name="selectOption"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gren bg-transparent dark:text-gren rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
