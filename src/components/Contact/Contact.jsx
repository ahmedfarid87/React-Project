import React, { useState } from 'react'

export default function Contact() {

  const [upTitleName, setUpTitleName] = useState(false);
  const [upTitleAge, setUpTitleAge] = useState(false);
  const [upTitleMail, setUpTitleMail] = useState(false);
  const [upTitlePass, setUpTitlePass] = useState(false);

  return (
    <>
      <section className="portfolio pt-32">
        <h2 className="uppercase text-4xl font-bold text-center">conatct section</h2>

        <div className="star my-5 flex items-center justify-center">
          <span className="w-20 h-1 bg-black"></span>
          <i className="fa-solid fa-star mx-5"></i>
          <span className="w-20 h-1 bg-black"></span>
        </div>

        <div className="container px-5 py-10">
           <div className="form w-full md:w-3/5 lg:w-1/2 mx-auto">

             <div className="inputName">
                <label className={`self-start text-emerald-400 relative ${upTitleName? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userName">userName:</label>
                <input onInput={(e)=> e.target.value == ''? setUpTitleName(false) : setUpTitleName(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="text" name="userName" id="userName" placeholder='userName'/>
             </div>

             <div className="inputAge">
                <label className={`self-start text-emerald-400 relative ${upTitleAge? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userAge">userAge:</label>
                <input onInput={(e)=> e.target.value == ''? setUpTitleAge(false) : setUpTitleAge(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="number" name="userAge" id="userAge" placeholder='userAge'/>
             </div>
             
             <div className="inputMail">
                <label className={`self-start text-emerald-400 relative ${upTitleMail? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userEmail">userEmail:</label>
                <input onInput={(e)=> e.target.value == ''? setUpTitleMail(false) : setUpTitleMail(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="email" name="userEmail" id="userEmail" placeholder='userEmail'/>
             </div>
             
             <div className="inputPass">
                <label className={`self-start text-emerald-400 relative ${upTitlePass? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userPassword">userPassword:</label>
                <input onInput={(e)=> e.target.value == ''? setUpTitlePass(false) : setUpTitlePass(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="password" name="userPassword" id="userPassword" placeholder='userPassword'/>
             </div>

             <button className='self-start bg-emerald-400 p-4 py-1 rounded-md text-white'>send Message</button>
           </div>
        </div>

      </section>
    </>
  )
}
