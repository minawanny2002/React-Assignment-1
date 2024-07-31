import React, { useEffect } from 'react'

export default function Contact() {


  useEffect(() => {
    const myInputs = document.querySelectorAll("#inputs");
    myInputs.forEach(input => {
      input.addEventListener('input', function () {
        input.previousSibling.classList.remove("opacity-0");
        if (input.value == "") {
          input.previousSibling.classList.add("opacity-0");
        }
      })



    })

  }, [])
  return (
    <div >


      <div className='flex flex-col justify-center items-center p-10 lg:p-10 pt-16 lg:pt-16'>
        <h1 className='text-[#2c3e50] font-bold text-2xl md:text-3xl lg:text-5xl mb-3'>CONTACT SECTION</h1>
        <div class="flex justify-center items-center w-full max-w-md px-4">
          <div class="lg:w-1/4 md:w-1/3 w-1/5 border-t-4 border-[#2c3e50]"></div>
          <div class="mx-2 ">
            <i class="fa-solid fa-star text-[#2c3e50]"></i>
          </div>
          <div class="lg:w-1/4 md:w-1/3 w-1/5 border-t-4 border-[#2c3e50]"></div>
        </div>
      </div>

      <div className="flex justify-center  items-center ">
        <div class="w-full p-8 lg:p-10 lg:w-3/4">
          <div class="mb-4 overflow-hidden w-full">
            <label htmlFor="inpuuuts1" id='labels' className='text-green-500  relative top-[0px] transition-all duration-700 opacity-0 '>userName</label>
            <input id='inputs' type="text" placeholder="userName" className="inputss block w-full rounded py-3 px-4 mb-3   border-0 border-b-[1px] focus:outline-none"></input>
          </div>
          <div class="mb-4 overflow-hidden w-full">
            <label htmlFor="inpuuuts1" id='labels' className='text-green-500  relative top-[0px] transition-all duration-700 opacity-0'>userAge</label>
            <input id='inputs' type="text" placeholder="userAge" className="inputss block w-full rounded py-3 px-4 mb-3   border-0 border-b-[1px] focus:outline-none"></input>
          </div>
          <div class="mb-4 overflow-hidden w-full">
            <label htmlFor="inpuuuts1" id='labels' className='text-green-500  relative top-[0px] transition-all duration-700 opacity-0'>userEmail</label>
            <input id='inputs' type="text" placeholder="userEmail" className="inputss block w-full rounded py-3 px-4 mb-3   border-0 border-b-[1px] focus:outline-none"></input>
          </div>
          <div class="mb-4 overflow-hidden w-full">
            <label htmlFor="inpuuuts1" id='labels' className='text-green-500  relative top-[0px] transition-all duration-700 opacity-0'>userPassword</label>
            <input id='inputs' type="text" placeholder="userPassword" className="inputss block w-full rounded py-3 px-4 mb-3   border-0 border-b-[1px] focus:outline-none"></input>
          </div>
          <div class="flex items-center justify-start">
            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
