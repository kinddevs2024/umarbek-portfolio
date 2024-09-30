import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div id='fff' className='w-screen h-[53px]   flex justify-center items-center border-black dark:bg-white   duration-300'>
      <div className='w-[70%] container flex flex-row gap-[20%] justify-center items-center'>
        <Link to={"https://github.com/uumarbek"}>
          <img className='w-[25px] bg-white rounded-full' src="https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/main/public/github.png" alt="githup" />
        </Link>
        <Link to={"https://www.instagram.com/uumar_bek/"}>
          <img className='w-[25px] bg-white rounded-full' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/instagram.png?raw=true" alt="githup" />
        </Link>
        <Link to={"tel:+998 90 978 08 18"}>
          <img className='w-[25px] bg-white rounded-full ' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/telegram.png?raw=true" alt="githup" />
        </Link>
      </div>
    </div>
  )
}

export default Links