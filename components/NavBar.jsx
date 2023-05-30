"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

        // change nav when scrolling
        const [color, setColor] = useState(false)
        const ChangeColor = () => {
          if (window.scrollY >=50) {
           setColor(true)
          } else {
           setColor(false)
          }
        }
        window.addEventListener('scroll', ChangeColor)
      
  return (
    <div>
      <nav className={color ? 'navbar-new navbar-bg' : 'navbar-new'}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/assets/images/Logo.svg"
                  alt="PNJLogo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="ms-4 text-primary-blue font-semibold text-lg">LSP - PNJ</span>
              </Link>
              {/* Hamburger Button For Mobile */}
              <div className="md:hidden">
                    <button 
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ?(
                            <Image src="/assets/icons/close.svg" width={30} height={30} alt="close" />
                        ) : (
                            <Image 
                                src="/assets/icons/hamburger.svg"
                                width={30}
                                height={30}
                                alt="menu"
                                className="focus:border-none active:border-none"
                            />
                        )}

                    </button>
              </div>
            </div>
          </div>
          <div>
            <div 
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                    navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
                >
                    <ul className="h-screen md:h-auto items-center justify-center md:flex gap-3 ">
                        <li className="pb-6 text-lg text-primary-blue py-2 md:px-6 text-center border-b-2 md:border-b-0  border-primary-blue md:hover:bg-transparent md:hover:text-primary-blue hover:text-white hover:bg-primary-blue">
                            <Link href="/" onClick={() => setNavbar(!navbar)} className="group" >
                                Tentang Kami
                                <div className="line md:group-hover:scale-100" />
                            </Link>
                        </li>
                        <li className="pb-6 text-lg text-primary-blue py-2 md:px-6 text-center border-b-2 md:border-b-0  border-primary-blue md:hover:bg-transparent md:hover:text-primary-blue hover:text-white hover:bg-primary-blue">
                            <Link href="/" onClick={() => setNavbar(!navbar)} className="group" >
                                FAQ
                                <div className="line md:group-hover:scale-100" />
                            </Link>
                        </li>
                        <li className="blue-btn hidden md:flex ">
                            <Link href="/login" onClick={() => setNavbar(!navbar)} >
                                Login
                            </Link>
                        </li>
                        <li className="block md:hidden pb-6 text-xl text-primary-blue py-2 md:px-6 text-center border-b-2 md:border-b-0 border-primary-blue md:hover:bg-transparent  ">
                            <Link href="/login" onClick={() => setNavbar(!navbar)} >
                                Login
                            </Link>
                        </li>
                    </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
