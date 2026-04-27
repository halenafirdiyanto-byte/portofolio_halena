import React from "react";
import Profile from "../assets/Profil.jpeg";

const About = () => {
    return(
        <section id="about" className="py-20 bg-sky-950">
            <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-white ">
                About me
            </h2>

            <div className="flex flex-col items-center mb-12">
            <img src={Profile} alt="profile picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-fuchsia-100 shadow-md"/>
            <p className="text-lg text-white mb-2"> Software Engineering Student </p>
            <p className="text-xl text-white"> I'm a software engineering student at ITESA Muhammadiyah Semarang </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 ">

        {/* Elementary School */}
        <a 
          href="https://share.google/orqPraUknwuGIVwtB" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300 block"
        >
            <h3 className="text-3xl font-bold mb-6 text-white">
                Elementary School
            </h3>
            <p className="text-white text-xl">
                Muhammadiyah Plus Mijen, Semarang Elementary School
            </p>
        </a>

        {/* Junior High School */}
        <a 
          href="https://share.google/jKKRmYzpweuKovGBY" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300 block"
        >
            <h3 className="text-3xl font-bold mb-6 text-white">
                Junior High School
            </h3>
            <p className="text-white text-xl">
                Junior High School 23
            </p>
        </a>

        {/* Vocational High School */}
        <a 
          href="https://share.google/Pik8CFtYOoPbyTBtS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300 block"
        >
            <h3 className="text-3xl font-bold mb-6 text-white">
                Vocational High School
            </h3>
            <p className="text-white text-xl">
                Vocational High School 3 Kendal
            </p>
        </a>

        </div>

          </div>
        </section>
    )
}

export default About;