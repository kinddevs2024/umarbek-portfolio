import React from 'react'
const Loader = () => {
    const myTimeout = setTimeout(myGreeti, 2000);
    function myGreeti() {
        document.getElementById("id").classList.add("hidden");
    }
    return (
        <div>
            <div id='id' className='w-screen h-screen     fixed top-0 z-50  flex bg-white dark:bg-bg-dark justify-center items-center'>
                <div id='demo' className="lava-lamp ">
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