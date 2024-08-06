import React from "react";

export default function About() {
  return (
    <>
      <section className="about bg-[#1ABC9C] text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/4 ">
          <h2 className="uppercase text-4xl font-bold text-center">about component</h2>

          <div className="star my-5 flex items-center justify-center">
            <span className="w-20 h-1 bg-white"></span>
            <i className="fa-solid fa-star mx-5"></i>
            <span className="w-20 h-1 bg-white"></span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
              <p className="md:p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="md:p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
        </div>
      </section>
    </>
  );
}
