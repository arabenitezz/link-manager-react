import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faComments, faVoteYea } from "@fortawesome/free-solid-svg-icons";

const FEATURE_BLOCKS = [
  {
    icon: faVoteYea,
    text: "Vota los mejores enlaces"
  },
  {
    icon: faComments,
    text: "Comenta y comparte"
  },
  {
    icon: faTags,
    text: "Búsqueda por etiquetas"
  }
];

const Banner2 = () => {
  return (
    <section className="bg-gray-50 relative flex flex-col items-center mt-10 mb-10 max-w-screen-lg px-2 mx-auto md:flex-row sm:px-6 p-6 gap-2">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl">
              Lo que ofrecemos:
            </h2>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 content-center gap-4 md:grid-cols-3">
          {FEATURE_BLOCKS.map((block, index) => (
            <blockquote key={index} className="flex font-bold text-xl h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
              <div>
                <div className="flex flex-col items-center mt-4">
                  <FontAwesomeIcon icon={block.icon} className="text-blue-500 justify-between text-5xl mb-4" />
                  <p className="text-center text-gray-600">{block.text}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner2;

