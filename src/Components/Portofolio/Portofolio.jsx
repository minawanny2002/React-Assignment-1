import React, { useEffect } from 'react'



export default function Portofolio() {


  useEffect(() => {

    const layer = document.querySelector(".click-layout");
    layer.addEventListener('click' , function(e){
      if(e.target==layer){
        layer.classList.add("hidden");
      }
      
    } )


    const myCards = document.querySelectorAll('#card');
    myCards.forEach(card => {
      card.addEventListener('click', function (e) {
        layer.querySelector("img").setAttribute("src" , card.querySelector("img").getAttribute("src"))
        layer.classList.remove("hidden");
        console.log("minaaaaaa");
      })
    })

  }, []);


  return (
    <>
      <div className="click-layout flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-[rgba(74,74,171,0.7)] z-50 hidden">

        <div className='w-full h-1/3 md:w-1/3  md:h-1/2 lg:w-1/3  lg:h-1/2 flex justify-center items-center'>
          <img src="Images\poert1.png" className='w-full h-full'/>
        </div>
      </div>



      <div className='flex flex-col justify-center items-center p-12'>
        <h1 className='text-[#2c3e50] text-center font-bold text-xl md:text-3xl lg:text-4xl mb-3'>PORTOFOLIO COMPONENT</h1>
        <div class="flex justify-center items-center w-full max-w-md px-4">
          <div className="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-[#2c3e50]"></div>
          <div className="mx-2 ">
            <i className="fa-solid fa-star text-[#2c3e50]"></i>
          </div>
          <div className="lg:w-1/4 md:w-1/3 w-1/2 border-t-4 border-[#2c3e50]"></div>
        </div>


        <div className="cards flex flex-row flex-wrap gap-10 w-full justify-center items-center p-5 lg:p-12">
          <div className='w-full md:w-1/3 lg:w-1/4  relative group/grand overflow-hidden' id='card'>
            <img src="Images\poert1.png" className='w-full rounded-xl' />
            <div className="layer absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/4 relative group/grand overflow-hidden' id='card'>
            <img src="Images\port2.png" className='w-full rounded-xl' />
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/4  relative group/grand overflow-hidden' id='card'>
            <img src="Images\port3.png" className='w-full rounded-xl' />
            <div className="layer absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/4  relative group/grand overflow-hidden' id='card'>
            <img src="Images\poert1.png" className='w-full rounded-xl' />
            <div className="layer absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/4 relative group/grand overflow-hidden' id='card'>
            <img src="Images\port2.png" className='w-full rounded-xl' />
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/4  relative group/grand overflow-hidden' id='card'>
            <img src="Images\port3.png" className='w-full rounded-xl' />
            <div className="layer absolute top-0 right-0 left-0 bottom-0 bg-[rgba(26,188,156,0.8)] rounded-xl opacity-0 transition-all duration-[0.5s] group-hover/grand:opacity-100 flex justify-center items-center">
              <i className="fa-solid fa-plus text-white text-[80px] lg:text-[150px] "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
