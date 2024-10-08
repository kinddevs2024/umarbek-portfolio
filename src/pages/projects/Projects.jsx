import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import CryptoCard from './CryptoCard';
import { CarouselCustomNavigation } from './CarouselCustomNavigation';

// https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/

const Projects = () => {



  useLayoutEffect(() => {
    gsap.to(".aside", { rotation: 0, delay: 2 });
    gsap.to(".aside", { scale: 1, delay: 1.4 },);
    gsap.to(".aside", { scale: 0, delay: 0 },);

  });
  return (
    <>
      <div className='flex w-full h-full aside justify-center items-center mt-10'>
        <CarouselCustomNavigation />
      </div>
    </>
  )
}

export default Projects;