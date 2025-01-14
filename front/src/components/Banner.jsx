import React from "react";

const Banner = () => (
  <div className="relative flex flex-col items-center mt-10 mb-10 max-w-screen-lg px-2 mx-auto md:flex-row sm:px-6 p-6 gap-2">
  <div className="flex flex-col justify-center items-center p-6 md:w-1/2 h-full">
    <div className="text-left">
      <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
        ProCode<span className="font-bold text-blue-500">Tube</span>
      </h2>
      <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl text-justify">
      Descubre, organiza y comparte los mejores videos de YouTube sobre programación con CodeProTube. Encuentra tutoriales, charlas inspiradoras, guías prácticas y más, todo categorizado y listo para potenciar tu aprendizaje. ¡Explora, guarda y comparte contenido que llevará tus habilidades al siguiente nivel!
      </p>
    </div>
  </div>
    <div className="flex flex-col justify-center items-center p-6 md:w-1/2">
        <iframe
          src="https://lottie.host/embed/9c6e4e3d-ae53-4e96-9bf4-d11783e53f49/SQY1KVM2A4.lottie"
          width="100%"
          height="400"
          allowFullScreen
        />
    </div>
</div>

);

export default Banner;

