import React, { } from 'react'
import { CarouselCustomNavigation } from './CarouselCustomNavigation';
import { Analytics } from "@vercel/analytics/react";


// https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/

const Projects = () => {




  return (
    <>
      <div className='flex w-full h-full  justify-center items-center mt-10'>
        <CarouselCustomNavigation />
        <Analytics />

      </div>
    </>
  )
}

export default Projects;