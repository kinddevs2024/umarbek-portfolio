import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div id='fff' className='w-screen h-10 absolute  flex justify-center items-center bg-white border-t-2 border-b-2 border-black dark:bg-white'>
      <div className='w-[70%] flex flex-row gap-[20%] justify-center items-center'>
        <Link to={"nnrn"}>
          <img className='w-7' src="https://raw.githubusercontent.com/kinddevs2024/umarbek-portfolio/main/public/github.png" alt="githup" />
        </Link>
        <Link to={"nnrn"}>
          <img className='w-7' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/instagram.png?raw=true" alt="githup" />
        </Link>
        <Link to={"nnrn"}>
          <img className='w-7' src="https://github.com/kinddevs2024/umarbek-portfolio/blob/main/public/telegram.png?raw=true" alt="githup" />
        </Link>
      </div>
    </div>
  )
}

export default Links