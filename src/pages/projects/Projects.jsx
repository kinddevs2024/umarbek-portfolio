import React, { useLayoutEffect } from 'react'
import Cards from './Cards'
import gsap from 'gsap';
import { Link } from 'react-router-dom';

// https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/

const Projects = () => {


  const data = [
    {
      imageLink:
        "public/project1.png",
      p: "HTML 58.1% CSS 41.9%",
      link: "https://github.com/kinddevs2024/NOICELAND",
      name: "NOICELAND"
    },
    {
      imageLink:
        "public/project2.png",
      p: "HTML 53.1% CSS 46.9%",
      link: "https://github.com/kinddevs2024/DECBASE",
      name: "DECBASE"

    },
    {
      imageLink:
        "public/project3.png",
      p: "CSS 51.0% HTML 49.0%",
      link: "https://github.com/kinddevs2024/cofee",
      name: "CAFENA"

    },
    {
      imageLink:
        "public/project4.png",
      p: "CSS 65.4% HTML 34.6%",
      link: "https://github.com/kinddevs2024/easy-bank",
      name: "easy bank"

    },
    {
      imageLink:
        "public/project5.png",
      p: "JavaScript 94.1% CSS 4.0% HTML1.9%",
      link: "https://github.com/kinddevs2024/shablon",
      name: "shablon"

    },


  ];

  useLayoutEffect(() => {
    gsap.to("aside", { rotation: 0, delay: 2 });
    gsap.to("aside", { scale: 1, delay: 1.4 },);
    gsap.to("aside", { scale: 0, delay: 0 },);

  });
  return (
    <>
      <div className='flex flex-row container flex-wrap'>





        {data.map(({ imageLink, p, link, name }, index) => (
          <div key={index} className='flex flex-wrap  m-4'>

            <aside class="bg-black text-white aside flex flex-wrap container p-6 rounded-lg w-full max-w-lg font-mono">
              <div class="flex justify-between items-center">
                <div class="flex space-x-2 text-red-500">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p class="text-sm ml-3">{name}</p>
              </div>
              <div class="mt-4">
                <Link to={link}><p class="text-green-400  cursor-none">$ npm install project</p></Link>
                <p class="text-white"></p>
                <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
                <p class="text-green-400">{p}</p>
                <img src={imageLink} alt="" />
              </div>
            </aside>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects