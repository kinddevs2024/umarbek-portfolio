import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { Link } from 'react-router-dom';


const Projects = () => {


  const data = [
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/project1.png",
      p: "HTML 58.1% CSS 41.9%",
      link: "https://github.com/kinddevs2024/NOICELAND",
      name: "NOICELAND",
      linksite : "https://noiceland-ashy-gamma.vercel.app/",
      data : "data: 2023.02.16",

    },
    
  ];
  useLayoutEffect(() => {
    gsap.to("aside", { rotation: 0, delay: 2 });
    gsap.to("aside", { scale: 1, delay: 1.4 },);
    gsap.to("aside", { scale: 0, delay: 0 },);

  });
  return (
    <>
      <div className='flex flex-row container flex-wrap max-w-[1980px] justify-center'>
        {data.map(({ imageLink, p, link, name , linksite , data }, index) => (
          <div key={index} className='flex flex-wrap  m-4'>

            <aside className="  bg-blue-gray-200  dark:bg-black text-white aside flex flex-wrap container p-6 rounded-lg w-full max-w-lg font-mono">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm ml-3">{name}</p>
              </div>
              <div className="mt-4">
                <Link to={link}><p className="text-green-400  cursor-none">$ install project</p></Link>
                <p className="text-white"></p>
                <p className="text-white">{data}</p>
                <Link to={link}><p className="text-green-400 cursor-none">{p}</p></Link>
                <Link to={linksite}><img className='cursor-none rounded-md w-auto h-auto' src={imageLink} alt="" /></Link>
              </div>
            </aside>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects