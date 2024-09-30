import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
const Loader = () => {

    useLayoutEffect(() =>{
        gsap.to(".loader",{rotation:0,  delay:3});
        gsap.to(".loader",{ scale:1,  delay:3},);
        gsap.to(".loader",{ scale:0 , delay:1.5},);

    });

    const myTimeout = setTimeout(myGreeti, 3000);
    function myGreeti() {
        document.getElementById("id").classList.add("hidden");
    }
    return (
        <div>
            <div id='id' className='w-screen h-screen     fixed top-0 z-50  flex bg-white dark:bg-bg-dark justify-center items-center'>
                <div id='demo' className=" loader lava-lamp ">
                    <div className="bubble"></div>
                    <div className="bubble1"></div>
                    <div className="bubble2"></div>
                    <div className="bubble3"></div>
                </div>
            </div>
        </div>
    )
}
export default Loader