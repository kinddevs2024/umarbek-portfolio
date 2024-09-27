import React from 'react'
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const { t } = useTranslation("global");

    return (
        <div>
            <section className='container   '>

                <div className='flex justify-center   mb-[5%] flex-col gap-10 items-center w-full mt-[15%] '>

                    <h1 className='text-9xl'>😊</h1>
                    <h1 className='text-4xl 	indent-3   text-center'>{t("I")}</h1>
                    <h1 className="sm:text-5xl font-extrabold text-xl md:max-w-[60%]  w-full text-center object-cover bg-[url('https://www.iconfinder.com/static/img/illustrations/marker2.svg?ba92f9ef8e')] bg- bg-no-repeat ">{t("gtext")}</h1>
                    <h1 className='sm:text-2xl  text-md font-extralight md:w-full  sm:max-w-[60%] w-full text-center'>{t("vtext")}</h1>

                </div>

            </section>
        </div>
    )
}

export default Hero;