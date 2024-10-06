import React, { useLayoutEffect } from 'react'
import Cards from './Cards'
import gsap from 'gsap';
import { Link } from 'react-router-dom';

// https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/

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
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/project2.png",
      p: "HTML 53.1% CSS 46.9%",
      link: "https://github.com/kinddevs2024/DECBASE",
      name: "DECBASE",
      linksite : "https://decbase-two.vercel.app/",
      data : "data: 2023.03.21",



    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/project3.png",
      p: "CSS 51.0% HTML 49.0%",
      link: "https://github.com/kinddevs2024/cofee",
      name: "CAFENA",
      linksite : "https://cofee-five.vercel.app/",
      data : "data: 2023.04.07",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/project4.png",
      p: "CSS 65.4% HTML 34.6%",
      link: "https://github.com/kinddevs2024/easy-bank",
      name: "easy bank",
      linksite : "https://easy-bank-phi-jade.vercel.app/",
      data : "data: 2023.05.17",

    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/project5.png",
      p: "JavaScript 94.1% CSS 4.0% HTML1.9%",
      link: "https://github.com/kinddevs2024/shablon",
      name: "shablon",
      linksite : "https://shablon-beta.vercel.app/",
      data : "data: 2023.06.08",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/canculator.png",
      p: "JavaScript 100.0%",
      link: "https://github.com/kinddevs2024/Canculator",
      name: "canculator",
      linksite : "https://canculator-swart.vercel.app/",
      data : "data: 2023.07.12",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/BOT.png",
      p: "JavaScript 81.5% CSS 10.0% HTML8.5%",
      link: "https://github.com/kinddevs2024/Sadia-Contact",
      name: "Sadia-Contact",
      linksite : "https://nozanur.vercel.app/",
      data : "data: 2023.08.15",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/CRAPPO.png",
      p: "JavaScript 100.0%",
      link: "https://github.com/kinddevs2024/Canculator",
      name: "CRAPPO",
      linksite : "https://canculator-swart.vercel.app/",
      data : "data: 2023.09.12",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/MY9.png",
      p: "JavaScript 100.0%",
      link: "https://github.com/kinddevs2024/Canculator",
      name: "MY9",
      linksite : "https://canculator-swart.vercel.app/",
      data : "data: 2023.10.04",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/Pixer.png",
      p: "HTML 60.2% CSS 39.8%",
      link: "https://github.com/kinddevs2024/Pixer",
      name: "Pixer",
      linksite : "https://pixer-six-phi.vercel.app/",
      data : "data: 2023.11.23",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/TODO.png",
      p: "HTML 100.0%",
      link: "https://github.com/kinddevs2024/todo",
      name: "TODO",
      linksite : "https://todoumarbek.netlify.app/",
      data : "data: 2024.01.06",


    },
    {
      imageLink:
        "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/PORT.png",
      p: "JavaScript 94.2% CSS 4.9% HTML 0.9%",
      link: "https://github.com/kinddevs2024/umarbek-portfolio",
      name: "Portfolio",
      linksite : "https://umarbek-portfolio.vercel.app/",
      data : "data: 2024.02.20",


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

export default Projects;