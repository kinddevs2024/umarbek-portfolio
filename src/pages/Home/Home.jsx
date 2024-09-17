import React from 'react'
import Links from './Links';
export function Home() {


  return (
    <>
      <div className=' '>
        <section className='container'>
          <div data-aos="zoom-in" className="flex justify-center h-[80%] pb-[20%] items-center text-center ">
            <div className='m-0 flex justify-center items-center flex-col gap-10 '>
              <h1 className='xl:text-[250px] lg:text-[200px] md:tex t-[150px] text-[75px]  bg-gradient-to-r from-[#3D606E] via-[#30535F] to-[#30535F] inline-block text-transparent bg-clip-text '>Umarbek</h1>
              {/* <div className='flex flex-row w-full h-[20px]  ob'>
              <svg xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 -960 960 960" width="20%" fill="#315a97"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
              <p>/</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
              </div> */}
              <img className='  absolute  z-10 h-[28%] w-[15%] mt-5' src="public/coding.png" alt="" />
              <h1 className='xl:text-[200px] lg:text-[150px] md:text-[100px]  text-[75px]  bg-gradient-to-r from-[#3D606E] via-[#30535F] to-[#30535F] inline-block text-transparent bg-clip-text '>Ulug'bekov</h1>


            </div>

          </div>
        </section>
        <Links/>
        
        <img src="https://cdn.prod.website-files.com/614716f50b4f49202fdd0087/646c83f933925057cfe27156_image.jpg" alt="" />

      </div>
    </>
  );
}



export default Home