import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  function handleScroll() {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
        <nav className={`fixed top-0 start-0 end-0 bg-slate-700 z-50 duration-500 ${scrolled? 'py-6':'py-9'}`}>
            <div className="container mx-auto px-7 uppercase flex flex-col items-start lg:flex-row lg:justify-between lg:items-center text-white">
                <div className="mainTitle w-full flex justify-between">
                    <h1 className='text-3xl font-bold'> <Link to="">Start Framework</Link> </h1>
                    <div onClick={()=> setShow(!show)} className="toggle group flex flex-col items-end w-10 space-y-2 lg:hidden cursor-pointer">
                      <div className='w-full h-1 bg-black'></div>
                      <div className='w-3/4 group-hover:w-full duration-700 h-1 bg-black'></div>
                      <div className='w-full h-1 bg-black'></div>
                    </div>
                </div>

                <ul className={`links ${show ? 'flex':'hidden'} lg:flex flex-col space-y-5 mt-5 lg:flex-row lg:space-x-5 lg:space-y-0 lg:m-0 font-semibold duration-1000`}>
                    <li> <NavLink to="about">about</NavLink> </li>
                    <li> <NavLink to="portfolio">portfolio</NavLink> </li>
                    <li> <NavLink to="products">products</NavLink> </li>
                    <li> <NavLink to="contact">contact</NavLink> </li>
                </ul>

                
            </div>
        </nav>
    </>
  )
}
