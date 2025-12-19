import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0 ">
        HSCODE
      </h1>

      <nav className="hidden md:flex gap-12 items-center">
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          COMPANY
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          FEATURES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          RESOURSES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
          DOCS
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGNIN
      </button>

      {/* Mobile Menu Button - Visible on Mobile*/}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl p-2 z-50">
        <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'}></i>{' '}
      </button>

      {/* Mobile Menu - Hidden By Default*/}
      <div
        id="mobileMenu"
        className={`fixed top-16 bottom-0 right-0 left-0 p-5 z-40 md:hidden 
    bg-black/70 backdrop-blur-md transition-all duration-500 
    ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            COMPANY
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            FEATURES
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            RESOURSES
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
