import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faComments, faVoteYea } from "@fortawesome/free-solid-svg-icons";

const Banner2 = () => {
  return (

    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl">
              ¿Qué esperas para agregar tu primer link?
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
              sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
              autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>

        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
            <div>

              <div className="mt-4">

              <FontAwesomeIcon icon={faVoteYea} className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600">Vota los mejores enlaces</p>
              </div>
            </div>
          </blockquote>

          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
            <div>

              <div className="mt-4">
              <FontAwesomeIcon icon={faComments} className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600">Comenta y comparte</p>
              </div>
            </div>

          </blockquote>

          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex gap-0.5 text-green-500">
              </div>

              <div className="mt-4">

              <FontAwesomeIcon icon={faTags} className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600">Organiza con etiquetas</p>
              </div>
            </div>

          </blockquote>
        </div>
      </div>
    </section>
 


  );
};

export default Banner2;

