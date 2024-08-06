// import React from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <main className="bg-[#1ABC9C] text-white h-screen flex justify-center items-center">
        <div className="content text-center">
          <img src={avatar} className="size-64 mx-auto mb-8" alt="" />
          <h2 className="uppercase text-4xl font-bold">start framework</h2>

          <div className="star my-5 flex items-center justify-center">
            <span className="w-20 h-1 bg-white"></span>
            <i className="fa-solid fa-star mx-5"></i>
            <span className="w-20 h-1 bg-white"></span>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </main>
    </>
  );
}
