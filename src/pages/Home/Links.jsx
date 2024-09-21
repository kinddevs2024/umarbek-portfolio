import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div id='fff' className='w-screen h-[53px] absolute  flex justify-center items-center border-black dark:bg-white bg-[#3D606E]  duration-300'>
      <div className='w-[70%] container flex flex-row gap-[20%] justify-center items-center'>
        <Link to={"https://github.com/uumarbek"}>
          <img className='w-[20px]' src="https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/main/public/github.png" alt="githup" />
        </Link>
        <Link to={"https://www.instagram.com/uumar_bek/"}>
          <img className='w-[20px]' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/instagram.png?raw=true" alt="githup" />
        </Link>
        <Link to={"tel:+998 90 978 08 18"}>
          <img className='w-[20px]' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/telegram.png?raw=true" alt="githup" />
        </Link>
      </div>
    </div>
  )
}

export default Links