import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faComments, faVoteYea } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-4 md:p-6 lg:px-6 lg:py-6">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
    
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
            quisque ut interdum tincidunt duis.
          </p>
    
          {/* Lista de características */}
          <div className="feature-item flex items-center space-x-2">
            <FontAwesomeIcon icon={faTags} className="text-emerald-600" />
            <span>Organiza con etiquetas</span>
          </div>
          <div className="feature-item flex items-center space-x-2">
            <FontAwesomeIcon icon={faComments} className="text-emerald-600" />
            <span>Comenta y comparte</span>
          </div>
          <div className="feature-item flex items-center space-x-2">
            <FontAwesomeIcon icon={faVoteYea} className="text-emerald-600" />
            <span>Vota los mejores enlaces</span>
          </div>
        </div>
      </div>
    
      <img
        alt=""
        src="/static/imagen"
        className="h-40 w-full object-cover sm:h-48"
      />
    </section>
  );
};

export default Banner;
