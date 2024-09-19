import React from 'react'


const Hero = () => {
    return (
        <div>
            <section className='container'>
                <div data-aos="zoom-in" className="flex justify-center h-[80%] pb-[20%] items-center text-center ">
                    <div className='m-0 flex justify-center items-center flex-col  gap-10 '>
                        <h1 className='xl:text-[250px] lg:text-[200px] md:tex t-[150px] text-[75px]  bg-gradient-to-r from-[#3D606E] via-[#30535F] to-[#30535F] inline-block text-transparent bg-clip-text '>Umarbek</h1>
                        <img className='  absolute  z-10 h-[200px] w-[200px] mt-24' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/3-Photoroom.png?raw=true" alt="" />
                        <h1 className='xl:text-[170px] lg:text-[150px] md:text-[100px]  text-[75px]  bg-gradient-to-r from-[#3D606E] via-[#30535F] to-[#30535F] inline-block text-transparent bg-clip-text '>Ulugbekov</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;