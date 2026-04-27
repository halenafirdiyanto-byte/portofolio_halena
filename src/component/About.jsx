import React from "react";
import Profile from "../assets/Profil.jpeg";
import jslogo from "../assets/reactjs.png";
import uxlogo from "../assets/UX.png";
import javalogo from "../assets/Javascript.png";



const About = () => {
    return(
        <section id="about" className="py-20 bg-sky-950">
            <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-white ">
                About me
            </h2>
            <div className="flex flex-col items-center mb-12">
            <img src={`${Profile}`} alt="profile picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-fuchsia-100 shadow-md"/>
            <p className="text-lg text-white mb-2"> Software Engineering Student </p>
            <p className="text-xl text-white"> I'm an software engineering student at ITESA Muhammadiyah Semarang  </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 ">

        <div className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-8 text-white">
                React JS
                </h3>
                <p className="text-white text-xl ">JavaScript libraries <br></br> that are used in the mobile <br></br>and web application development <br></br>process</p>
                <img src={`${jslogo}`} alt="reeactjs" className="w-10 h-10 object-cover ml-32 mb-10 mt-24 "/>

        </div>

         <div className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-8 text-white">UI/UX</h3>
                <p className="text-white text-xl">a professional responsible for designing the user interface and user experience of a product or application.</p>
                <img src={`${uxlogo}`} alt="reeactjs" className="w-12 h-12 object-cover ml-32 mt-32 "/>
        </div>

         <div className="bg-lime-500 p-6 rounded-3xl shadow-slate-300 shadow-lg hover:bg-lime-300 transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-8 text-white">JavaScript</h3>
                <p className="text-white text-xl">a runtime for a JavaScript environment <br></br>outside a web browser built<br></br> on a JavaScript engine</p>
                <img src={`${javalogo}`} alt="reeactjs" className="w-10 h-10 object-cover ml-32 mt-32 "/>

        </div>

        </div>

          </div>
        </section>
    )
}

export default About;