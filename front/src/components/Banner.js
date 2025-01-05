import React from "react";
import backgroundImage from './static/banner.jpeg';

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-lg px-2 mx-auto md:flex-row sm:px-6 p-6">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          CodeLinker 
            <span className="font-bold text-blue-500">Pro</span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-justify">
          CodeLinker Pro es la herramienta definitiva para programadores. Organiza y comparte tus enlaces favoritos de recursos de programación de manera eficiente. Guarda tutoriales, documentaciones, snippets de código y herramientas en un solo lugar, categorizados y comentados para tu conveniencia. ¡Facilita tu aprendizaje y acelera tus proyectos con CodeLinker Pro!"
          </p>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full overflow-hidden">
            <div className="w-full">
              <iframe
                src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
                width="100%"
                height="280"
                className="giphy-embed w-full"
                allowFullScreen
              ></iframe>
              <p className="text-center text-sm mt-2">
                <a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">
                  via GIPHY
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

