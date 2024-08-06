import React, { useEffect, useState } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";



export default function Portfolio() {

  const [imgSrc, setImgSrc] = useState('');
  const [show, setShow] = useState(false);


  return (
    <>
      <section className="portfolio pb-24 pt-32 text-center relative">
        <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold">portfolio component</h2>

        <div className="star my-5 flex items-center justify-center">
          <span className="w-20 h-1 bg-black"></span>
          <i className="fa-solid fa-star mx-5"></i>
          <span className="w-20 h-1 bg-black"></span>
        </div>

        <div className="port">
          <div className="container flex flex-wrap">
            <div onClick={()=> {setImgSrc(port1); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port1} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div onClick={()=> {setImgSrc(port2); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port2} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div onClick={()=> {setImgSrc(port3); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port3} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div onClick={()=> {setImgSrc(port1); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port1} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div onClick={()=> {setImgSrc(port2); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port2} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div onClick={()=> {setImgSrc(port3); setShow(true)}} className="box w-full md:w-1/2 lg:w-1/3 p-5">
              <div className="item relative">
                <img className="rounded-lg" src={port3} alt="" />
                <div className="overlay rounded-lg flex justify-center items-center absolute inset-0 bg-[#1ABC9C] opacity-0 hover:opacity-90 duration-1000">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section onClick={(e) => e.target.id == "modal" && setShow(false)} id='modal' className={`px-10 fixed inset-0 top-24 bg-opacityGray z-50 justify-center items-center ${show? 'flex' : 'hidden'}`}>
          <div className="modalBox w-full sm:h-3/4 md:w-3/4 lg:w-1/2 h-1/2">
              <img className='rounded-xl' src={imgSrc} alt="" />
          </div>
      </section>
    </>
  );
}
