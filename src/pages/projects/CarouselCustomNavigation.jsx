import { Carousel } from "@material-tailwind/react";
import styled from "styled-components";
import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';


export function CarouselCustomNavigation() {
    useLayoutEffect(() => {
        gsap.to("aside", { rotation: 0, delay: 2 });
        gsap.to("aside", { scale: 1, delay: 1.4 },);
        gsap.to("aside", { scale: 0, delay: 0 },);

    });

    const { t } = useTranslation("global");

    const data = [

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
        {
            imageLink:
                "https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/refs/heads/main/public/2.png",
            p: "JavaScript 94.2% CSS 4.9% HTML 0.9%",
            link: "https://github.com/kinddevs2024/umarbek-portfolio",
            name: "Portfolio",
            linksite: "https://umarbek-portfolio.vercel.app/",
            data: "data: 2024.02.20",


        },
    ];

    return (
        <Carousel
            className="rounded-xl   max-w-[1200px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
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
                        <img src={imageLink} className=" rounded-xl" alt="" />
                        <StyledWrapper className=" " >
                            <div className="card">
                                <div className="align">
                                    <span className="red" />
                                    <span className="yellow" />
                                    <span className="green" />
                                </div>

                                <h1> {name}</h1>
                                <p>
                                    {p} <br />
                                    {data}<br />
                                    {linksite}<br />
                                    {link}<br />
                                </p>
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
  height: 120px;
  padding: 0.5rem;
  background: rgba(198, 198, 198, 0.34);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.440);
  border-left: 2px  rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
  transform: skewX(10deg);
  transition: .4s;
  overflow: hidden;
  color: white;
}

.card:hover {
  height: 254px;
  transform: skew(0deg);
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
  text-align: center;
  margin: 1.3rem;
  color: rgb(218, 244, 237);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}


`;