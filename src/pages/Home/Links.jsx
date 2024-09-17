import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='w-screen h-10 absolute border-white flex justify-center items-center bg-bg-none dark:bg-white'>
      <div className='w-[70%] flex flex-row gap-[20%] justify-center items-center'>
        <Link to={"nnrn"}>
          <img className='w-7' src="public/github.png" alt="githup" />
        </Link>
        <Link to={"nnrn"}>
          <img className='w-7' src="public/instagram.png" alt="githup" />
        </Link>
        <Link to={"nnrn"}>
          <img className='w-7' src="public/telegram.png" alt="githup" />
        </Link>
      </div>
    </div>
  )
}

export default Links