import { Carousel } from "@material-tailwind/react";
import styled from "styled-components";
import React, {  } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from "./Button";
import Buttono from "./Buttono";


export function CarouselCustomNavigation() {



    const data = [
        
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/2.png",
            p: "JavaScript 94.2% CSS 4.9% HTML 0.9%",
            link: "https://github.com/kinddevs2024/umarbek-portfolio",
            name: "Portfolio",
            linksite: "https://umarbek-portfolio.vercel.app/",
            data: "data: 2024.02.20",


        },

        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/1.png",
            p: "HTML 53.1% CSS 46.9%",
            link: "https://github.com/kinddevs2024/DECBASE",
            name: "DECBASE",
            linksite: "https://decbase-two.vercel.app/",
            data: "data: 2023.03.21",



        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/5.png",
            p: "CSS 51.0% HTML 49.0%",
            link: "https://github.com/kinddevs2024/cofee",
            name: "CAFENA",
            linksite: "https://cofee-five.vercel.app/",
            data: "data: 2023.04.07",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/4.png",
            p: "CSS 65.4% HTML 34.6%",
            link: "https://github.com/kinddevs2024/easy-bank",
            name: "easy bank",
            linksite: "https://easy-bank-phi-jade.vercel.app/",
            data: "data: 2023.05.17",

        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/11.png",
            p: "JavaScript 94.1% CSS 4.0% HTML1.9%",
            link: "https://github.com/kinddevs2024/shablon",
            name: "shablon",
            linksite: "https://shablon-beta.vercel.app/",
            data: "data: 2023.06.08",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/10.png",
            p: "JavaScript 100.0%",
            link: "https://github.com/kinddevs2024/Canculator",
            name: "canculator",
            linksite: "https://canculator-swart.vercel.app/",
            data: "data: 2023.07.12",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/9.png",
            p: "JavaScript 81.5% CSS 10.0% HTML8.5%",
            link: "https://github.com/kinddevs2024/Sadia-Contact",
            name: "Sadia-Contact",
            linksite: "https://nozanur.vercel.app/",
            data: "data: 2023.08.15",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/8.png",
            p: "JavaScript 100.0%",
            link: "https://github.com/kinddevs2024/Canculator",
            name: "CRAPPO",
            linksite: "https://canculator-swart.vercel.app/",
            data: "data: 2023.09.12",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/7.png",
            p: "JavaScript 100.0%",
            link: "https://github.com/kinddevs2024/Canculator",
            name: "MY9",
            linksite: "https://canculator-swart.vercel.app/",
            data: "data: 2023.10.04",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/6.png",
            p: "HTML 60.2% CSS 39.8%",
            link: "https://github.com/kinddevs2024/Pixer",
            name: "Pixer",
            linksite: "https://pixer-six-phi.vercel.app/",
            data: "data: 2023.11.23",


        },
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/3.png",
            p: "HTML 100.0%",
            link: "https://github.com/kinddevs2024/todo",
            name: "TODO",
            linksite: "https://todoumarbek.netlify.app/",
            data: "data: 2024.01.06",


        },
    ];
    const { t } = useTranslation("global");

    return (
        <Carousel
            className="rounded-xl   max-w-[1200px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex  -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black dark:bg-white" : "w-4 dark:bg-white/50 bg-bg-none"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >





            {data.map(({ imageLink, p, link, name, linksite, data }, index) => (
                <div key={index} >

                    <div>
                        <StyledWrapper className="StyledWrapper " >
                            <div className="card dark:bg-[#3d606eb4] m-20">
                                <div className="align">
                                    <span className="red" />
                                    <span className="yellow" />
                                    <span className="green" />
                                </div>

                                <Link to={linksite}>
                                
                                <img src={imageLink} className=" rounded-xl" alt="" />
                                </Link>

                                <h1 className=" text-center "> {name}</h1>
                                <h1 className=" flex w-full flex-col  items-start  gap-2" >
                                    {data}<br />
                                    {/* <Button/> */}
                                    <Buttono linksite={linksite}/>
                                </h1>
                            </div>
                        </StyledWrapper>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

const StyledWrapper = styled.div`
  .card {
  height: 100%;
  padding: 0.5rem;
  background: #3D606E;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.623);
  border-left: 2px  rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
  transition: .4s;
  overflow: hidden;
  color: white;
}



.align {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
}

.red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff605c;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.yellow {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffbd44;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.green {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ca4e;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.card h1 {
  margin: 1.3rem;
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}


`;