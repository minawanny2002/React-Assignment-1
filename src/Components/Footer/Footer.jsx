import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex flex-wrap w-full bg-[#2c3e50] lg:p-20'>
                <div className='w-full md:w-1/3 flex flex-col justify-center items-center text-white p-8'>
                    <h1 className='mb-2 text-2xl font-bold'>LOCATION</h1>
                    <p className='mb-5'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='w-full md:w-1/3 flex flex-col justify-center items-center text-white p-8'>
                    <h1 className='text-2xl font-bold mb-5'>AROUND THE WEB</h1>
                    <div className='flex w-full md:w-1/3 lg:w-1/2 justify-evenly items-center '>
                        <div className='border-white border-solid border-[1px] w-10 h-10 rounded-full flex justify-center items-center'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className='border-white border-solid border-[1px] w-10 h-10 rounded-full flex justify-center items-center'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className='border-white border-solid border-[1px] w-10 h-10 rounded-full flex justify-center items-center'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className='border-white border-solid border-[1px] w-10 h-10 rounded-full flex justify-center items-center'>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
                <div className='text-center w-full md:w-1/3 flex flex-col justify-center items-center text-white p-8'>
                    <h1 className='mb-2 text-2xl font-bold'>ABOUT FREELANCER</h1>
                    <p className='mb-5 text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    
                </div>
            </div>
            <div className='bg-[#1a252f] flex justify-center items-center text-white p-5'>
                <h1>Copyright © Your Website 2021</h1>
            </div>
        </>
    )
}
