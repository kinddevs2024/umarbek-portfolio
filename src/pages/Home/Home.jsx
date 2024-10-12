import React from 'react'
import Hero from './Hero';
import { Analytics } from "@vercel/analytics/react"


export function Home() {



  return (
    <>
      <div>
        <Hero />
        <Analytics />
      </div>
    </>
  );
}



export default Home