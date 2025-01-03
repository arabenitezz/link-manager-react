import React from "react";
import backgroundImage from './static/fondo.jpg';

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-lg px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            LinkManager 
            <span className="font-bold text-blue-500">Pro</span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Link Manager Pro te permite organizar y compartir tus enlaces favoritos de manera eficiente. Guarda, categoriza y comenta los recursos más importantes para ti.
          </p>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full ">
            <img 
              src={backgroundImage} 
              alt="Link Manager Pro background"
              className="rounded-lg w-full h-[320px] shadow-lg shadow-blue-500/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

