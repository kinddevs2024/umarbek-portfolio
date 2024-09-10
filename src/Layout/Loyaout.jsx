import React from 'react'
import {  } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Loyaout = ({children}) => {
  return (
    <>
    <div className='bg-white dark:bg-gray-900 duration-300 text-black dark:text-white'>
     <Header/>
    {children}
    <Footer/> 
    </div>
    
    </>
  )
}

export default Loyaout