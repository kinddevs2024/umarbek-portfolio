import React from 'react'
import Lichnayainfarmatsiya from './Lichnayainfarmatsiya'
import Table from './Table'
import DefaultGallery from './DefaultGallery'
import { Analytics } from "@vercel/analytics/react"


const About_me = () => {
  return (
    <>
      <Lichnayainfarmatsiya/>
      <DefaultGallery/>
      <Analytics />

      {/* <Table/> */}
      
    </>
  )
}

export default About_me