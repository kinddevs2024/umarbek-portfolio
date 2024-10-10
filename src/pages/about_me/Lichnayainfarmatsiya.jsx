import gsap from 'gsap';
import React, { useEffect, useLayoutEffect } from 'react'
import { } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@material-tailwind/react";
import MessageDialog from './MessageDialog';


const Lichnayainfarmatsiya = () => {
    const { t } = useTranslation("global");

    useLayoutEffect(() => {
        gsap.to("img", { rotation: 0, delay: 2 });
        gsap.to("h1", { scale: 1, delay: 1.4 },);
        gsap.to("h1", { scale: 0, delay: 0 },);

    });

    return (
        <div className='container '>
            <div className='flex   p-12  justify-evenly     mb-[5%] flex-wrap   w-full mt-[8%] '>
                <div>
                    <h1 className='text-4xl max-w-[500px]   w-80 '><img src="https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/me.png" alt="smile" /></h1>
                </div>
                <div className='flex justify-center max-w-[400px]   xl:items-end items-center flex-col  gap-6'>
                    <h1 className='text-4xl indent-3 xl:text-end  text-center '>{t("Info")}</h1>
                    <h1 className="sm:text-xl font-extrabold text-md   object-cover xl:text-end  text-center">{t("infodis")}</h1>
                    <MessageDialog />
                </div>

            </div>
        </div>
    )
}

export default Lichnayainfarmatsiya;