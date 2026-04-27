import React from "react";
import book from"../assets/ss_bookshop.png";
import music from "../assets/ss_music.png";
import plantshop from "../assets/ss_plantshop.png";
import login from "../assets/ss_login.png";
import sistem from "../assets/ss_istemlaundry.png";


const Projects = () => {
    return(
        <section id="projects" className="py-20 bg-linear-to-b from-sky-950 to-sky-700">
             <style>
                {`
                    .flex-container {
                        overflow-x: auto; /* Mengizinkan scroll horizontal */
                        overflow-y: hidden; /* Menyembunyikan scroll vertikal */
                        white-space: nowrap; /* Mencegah pembungkusan */
                    }
                    
                    .flex-container::-webkit-scrollbar {
                        display: none; /* Sembunyikan scrollbar di Webkit (Chrome, Safari) */
                    }

                    .flex-container {
                        scrollbar-width: none; /* Sembunyikan scrollbar di Firefox */
                    }
                `}
            </style>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">My Projects</h2>
                <div className="flex flex-container space-x-16 p-10">

                    <div className="border-2 border-lime-500 w-96 shadow-gray-800 shadow-xl rounded-3xl">
                    <img src={music} alt="reeactjs" className="w-full h-50 object-cover rounded-t-3xl border-lime-500 inline-block"/>
                    <h3 className="text-2xl font-semibold text-white mt-2 mb-2 pl-8 pr-8">UI/UX MUSIC THEME</h3>
                        <p className="text-white text-md mb-20 text-balance">Desktop display for music web/APP with main color <br></br> green and 414141</p>
                    </div>

                    <div className="border-2 border-lime-500 w-96 shadow-gray-800 shadow-xl rounded-3xl">
                        <img src={book} alt="Samuel wattimena" className="w-full h-50 object-cover rounded-t-3xl border border-lime-500 inline-block"/> 
                        <h3 className="text-2xl font-semibold text-white mt-2 mb-2 pl-12 pr-12 "> UI/UX BOOKSHOP </h3>
                        <p className="text-white text-md mb-20 text-balance">Dekstop display for bookshop web/APP with main color green and white</p>
                    </div>

                    <div className="border-2 border-lime-500 w-96 shadow-gray-800 shadow-xl rounded-3xl">
                        <img src={plantshop} alt="Samuel wattimena" className="w-full h-50 object-cover rounded-t-3xl border border-lime-500 inline-block"/> 
                        <h3 className="text-2xl font-semibold text-white mt-2 mb-2 pl-11 pr-11">UI/UX PLANTSHOP</h3>
                        <p className="text-white text-md mb-20 text-balance">App display for PLANTSHOP with main color green and white working prototype</p>
                    </div>

                    <div className="border-2 border-lime-500 w-96 shadow-gray-800 shadow-xl rounded-3xl">
                        <img src={login} alt="Samuel wattimena" className="w-full h-50 object-cover rounded-t-3xl border-lime-500 inline-block"/> 
                        <h3 className="text-2xl font-semibold text-white mt-2 mb-2 pl-8 pr-8"> UI/UX LOGIN THEME </h3>
                        <p className="text-white text-md mb-20 text-balance">Dekstop display for login web/APP with main color white</p>
                    </div>

                    <div className="border-2 border-lime-500 w-96 shadow-gray-800 shadow-xl rounded-3xl">
                    <img src={sistem} alt="reeactjs" className="w-full h-50 object-cover rounded-t-3xl border-lime-500 inline-block"/>
                    <h3 className="text-2xl font-semibold text-white mt-2 mb-2 pl-3 pr-3">UI/UX LAUNDRY THEME</h3>
                        <p className="text-white text-md mb-20 text-balance">Desktop display for Laundry web/APP with main color <br></br> green and white and a little gray</p>
                    </div>

                </div>
                

            </div>
        </section>
    )
}

export default Projects;
