import React from 'react'

export default function Home() {
    
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-[#1abc9c] p-12'>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className="person-img w-[250px] h-[250px] mb-10    ">
                        <img src="Images\avataaars.svg" className='w-full' />
                    </div>
                    <h1 className='font-bold text-xl md:text-3xl lg:text-5xl text-white mb-10'>START FRAMEWORK</h1>

                    <div className="flex justify-center items-center w-full max-w-md px-4 mb-6">
                        <div className="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-white"></div>
                        <div className="mx-2 ">
                            <i className="fa-solid fa-star text-white"></i>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-white"></div>
                    </div>

                    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
