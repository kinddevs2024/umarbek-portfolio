import React from 'react'
import Links from './Links';
import Hero from './Hero';
import { useTranslation } from 'react-i18next';
// import Loader from './Loader';
export function Home() {

  const { t } = useTranslation("layout");

  return (
    <>
    
      <div id='blur' className='   '>
        
      {/* <Loader/> */}

        {/* <CustomCursor/> */}
        <Hero />
        <Links />
        {/* < img className=' container' src="https://cdn.prod.website-files.com/614716f50b4f49202fdd0087/646c83f933925057cfe27156_image.jpg" alt="" /> */}
        {/* <h1>
          {t("English")}
        </h1> */}
      </div>
    </>
  );
}



export default Home