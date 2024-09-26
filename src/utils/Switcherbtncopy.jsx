import React, { useEffect, useState } from 'react';
import img1 from "/public/uzb.png"; // Uzbek
import img2 from "/public/rus.png"; // Russian
import img3 from "/public/eng.png"; // English

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function MenuDefault() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "en");

    // Handle language change
    const handleLanguageChange = (selectedLanguage) => {
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
        setSelectedLanguage(selectedLanguage);
    };


    const getLanguageImage = () => {
        switch (selectedLanguage) {
            case 'ru':
                return img2; // Russian
            case 'uz':
                return img1; // Uzbek
            case 'en':
            default:
                return img3; // English
        }
    };

    return (
        <Menu className="relative">
            <MenuHandler className="bg-transparent w-auto h-auto  m-0 p-0 ">
                <Button
                    className="relative p-0 rounded-full shadow-none border-none bg-transparent flex items-center justify-center"
                >
                    <img
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        src={getLanguageImage()}
                        alt="Language Menu"
                    />
                </Button>
            </MenuHandler>
            <MenuList className="relative z-20 mt-3 bg-oq dark:bg-dakr text-qora border-gren dark:text-oq duration-300 rounded-xl" >
                <MenuItem
                    className="flex flex-row items-center gap-2"
                    onClick={() => handleLanguageChange('en')}
                >
                    <img
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        src={img3}
                        alt="English"
                    />
                    English
                </MenuItem>
                <MenuItem
                    className="flex flex-row items-center gap-2"
                    onClick={() => handleLanguageChange('ru')}
                >
                    <img
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        src={img2}
                        alt="Russian"
                    />
                    Russian
                </MenuItem>
                <MenuItem
                    className="flex flex-row items-center gap-2"
                    onClick={() => handleLanguageChange('uz')}
                >
                    <img
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        src={img1}
                        alt="Uzbekistan"
                    />
                    Uzbekistan
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
