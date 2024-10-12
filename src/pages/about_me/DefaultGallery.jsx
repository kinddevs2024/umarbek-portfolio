import { info } from 'autoprefixer';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from "styled-components";


const DefaultGallery = () => {
    const { t } = useTranslation("global");

    const data = [
        {
            imageLink:
                "https://img.icons8.com/color/500/html-5--v1.png",
                info : "HTML",
        },
        {
            imageLink:
                "https://img.icons8.com/color/480/css3.png",
                info : "CSS",

        },
        {
            imageLink:
                "https://img.icons8.com/color/480/javascript--v1.png",
                info : "JS",

        },
        {
            imageLink:
                "https://docs.material-tailwind.com/svg/react.svg",
                info : "React",

        },
        {
            imageLink:
                "https://docs.material-tailwind.com/img/icon-figma.svg",
                info : "Figma",

        },
        {
            imageLink:
                "https://img.icons8.com/color/480/tailwind_css.png",
                info : "Tailwindcss",

        },
        {
            imageLink:
                "https://img.icons8.com/color/480/git.png",
                info : "Git",

        },
        {
            imageLink:
                "https://img.icons8.com/color/480/material-ui.png",
                info : "Material UI",

        },
        {
            imageLink:
                "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/480/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo.png",
                info : "Typescript",

        },
        {
            imageLink:
                "https://img.icons8.com/fluency/480/vite.png",
                info : "Vite",

        },
        {
            imageLink:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo.gif",
                info : "Gsap",

        },
        {
            imageLink:
                "https://img.icons8.com/fluency/480/canva.png",
                info : "Canva",

        },
    ];

    return (
        <div className=' w-full h-full justify-center text-wrap text-center text-2xl  items-center'>
            <h1 className='m-10 '>
            {t("len")}
            </h1>
        <div className="grid grid-cols-1 container   mb-20 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink , info }, index) => (
                <div key={index}>
                    <StyledWrapper>
                        <div className="card  s mb-5 z-0">

                            <img
                                className="h-40 w-full -z-10 max-w-full rounded-xl object-contain  object-center"
                                src={imageLink}
                                alt="gallery-photo"
                            />
                            <button className="card-button  hover:z-10 ">{info}</button>
                        </div>
                    </StyledWrapper>
                </div>
            ))}
        </div>
        </div>
    );
}

const StyledWrapper = styled.div`
  .card {

 border-radius: 20px;
 position: relative;
 padding: 1.8rem;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 1.5em;
 font-weight: bold;
}

/*Hover*/
.card:hover {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
`;

export default DefaultGallery;