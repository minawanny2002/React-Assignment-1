import React from 'react'

export default function About() {
  return (
    <>
      <div className='bg-[#1abc9c] flex flex-col justify-center items-center p-10 lg:p-40'>
        <h1 className='text-white font-bold text-xl md:text-3xl lg:text-5xl mb-3'>ABOUT COMPONENT</h1>
        <div class="flex justify-center items-center w-full max-w-md px-4">
          <div class="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-white"></div>
          <div class="mx-2 ">
            <i class="fa-solid fa-star text-white"></i>
          </div>
          <div class="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-white"></div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 text-white p-5'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.  </p>
          </div>
          <div className='w-full lg:w-1/2 text-white p-5'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.  </p>
          </div>
        </div>
      </div>
    </>
  )
}
