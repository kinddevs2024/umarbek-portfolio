import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'

const Eror = () => {
  useLayoutEffect(() =>{
    gsap.to("img",{rotation:0,  delay:3});
    gsap.to(".Eror",{ scale:1,  delay:3},);
    gsap.to(".Eror",{ scale:0 , delay:2},);

});
  return (
    <div className='flex justify-center Eror items-center'>
      <img className='w-[70%] h-[50%]' src="public/404.svg" alt="404" />
    </div>
  )
}

export default Eror