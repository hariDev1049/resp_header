'use client';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useState } from 'react';
import { navelements } from '../Utils/navElements';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-slate-500 shadow-xl h-full">
      <div className="py-5 px-20 flex justify-between mx-auto h-full">
        <div className="cursor-pointer font-semibold">Logo</div>
        <div
          className={`hidden sm:flex gap-12 list-none cursor-pointer h-full `}
        >
          {navelements.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className="hover:font-semibold h-full hover:border-b-slate-800 text-slate-900"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <IoIosCloseCircleOutline
          className={`${
            isOpen ? 'flex sm:hidden' : 'hidden'
          } text-2xl text-slate-800 `}
          onClick={handleClick}
        />
        <GiHamburgerMenu
          className={`${
            isOpen ? 'hidden' : 'flex'
          } text-2xl text-slate-800 sm:hidden`}
          onClick={handleClick}
        />
      </div>
      <div
        className={`${
          isOpen
            ? 'w-full h-full flex flex-col gap-16 py-10 justify-items-center ease-in duration-500 sm:hidden'
            : 'ease-in duration-500 hidden'
        }`}
      >
        {navelements.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className="hover:font-semibold h-full hover:border-b-slate-800 text-slate-900"
            onClick={handleClick}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
