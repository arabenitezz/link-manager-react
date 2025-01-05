import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
            <FontAwesomeIcon
              icon={faLink}
              className="text-5xl text-blue-500 transition-all duration-300 hover:animate-bounce"
            />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Únete a la Comunidad </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Invítanos un café </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
</header>
  );
};

export default Header;

  