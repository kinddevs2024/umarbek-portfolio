import React from 'react'
import { } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import Card from '../pages/Home/Card';


const Loyaout = ({ children }) => {
  return (
    <>
      <div className='bg-white cursor-none dark:bg-bg-dark duration-300 text-black dark:text-white'>
        <Header />
        {children}
        <Footer />
        <div className=' fixed  hidden  xl:block top-[30%] '>

          <Card />
        </div>
        <div className=' hidden xl:flex'>
          <Cursor
            size='xl'
            hasDot
            isHollow
            dotColor='#ffffff'
            hasCursor
            color='#ffffff'
            speed='fast'
            animation='none'
            hoveringAnimation='beat'
            mixBlendMode


            zIndex={10000}
          />
        </div>

      </div>

    </>
  )
}

export default Loyaout