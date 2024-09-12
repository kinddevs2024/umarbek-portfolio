import React from 'react'
const Loader = () => {
    const myTimeout = setTimeout(myGreeti, 2000);
    function myGreeti() {
        document.getElementById("id").classList.add("hidden");
    }
    return (
        <div>
            <div id='id' className='w-screen h-screen     fixed top-0 z-0   flex bg-white dark:bg-bg-dark justify-center items-center'>
                <div id='demo' class="lava-lamp ">
                    <div class="bubble"></div>
                    <div class="bubble1"></div>
                    <div class="bubble2"></div>
                    <div class="bubble3"></div>
                </div>
            </div>
        </div>
    )
}
export default Loader