import gsap from 'gsap';
import React, { useEffect, useLayoutEffect } from 'react'
import { } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@material-tailwind/react";
import MessageDialog from '../about_me/MessageDialog';


const Hero = () => {
    const { t } = useTranslation("global");

    useLayoutEffect(() => {
        gsap.to("img", { rotation: 0, delay: 2 });
        gsap.to("h1", { scale: 1, delay: 1.4 },);
        gsap.to("h1", { scale: 0, delay: 0 },);

    });




    return (
        <div>
            <section className='container'>
                <div className='flex justify-center mb-[5%] flex-col gap-5 items-center w-full mt-[8%] '>
                    <h1 className='text-4xl .box w-80 -mb-[30px]'><img src="https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/me.png" alt="smile" /></h1>
                    <h1 className='text-4xl indent-3 text-center'>{t("I")}</h1>
                    <h1 className="sm:text-5xl font-extrabold text-xl md:max-w-[60%]  w-full text-center object-cover bg-[url('https://www.iconfinder.com/static/img/illustrations/marker2.svg?ba92f9ef8e')] bg- bg-no-repeat ">{t("gtext")}</h1>
                    <h1 className='sm:text-2xl text-md font-extralight md:w-full  sm:max-w-[60%] w-full text-center'>{t("vtext")}</h1>
                    <h1><MessageDialog /></h1>
                </div>
            </section>
        </div>
    )
}

export default Hero;