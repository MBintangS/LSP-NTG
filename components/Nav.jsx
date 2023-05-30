"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";




const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
    // <div className="bg-primary-blue">

      <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
                src="/assets/images/Logo.svg"
                alt="PNJLogo"
                width={40}
                height={40}
                className="object-contain"
                />
            <p className="logo_text">LSP - PNJ</p>
          </Link>

          {/* desktop */}
          <div className=" md:flex hidden flex-center gap-10">
            <Link href="/tentang-kami" className="nav-text flex-row group">
              Tentang Kami
              <div className="line group-hover:scale-100" />
            </Link>
            <Link href="/faq" className="nav-text flex-row group">
              FAQ
              <div className="line group-hover:scale-100" />
            </Link>
            <Link className="blue-btn" href="/login">
              Login
            </Link>
          </div>

          {/* mobile */}
          <div className="md:hidden flex relative flex-center ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 justify-end items-end"
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/"
                    className="dropdown_link flex-row group"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Tentang Kami
                    <div className="line group-hover:scale-100" />
                  </Link>
                  <Link
                    href="/"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    FAQ
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                    }}
                    className="dropdown_link"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
      </nav>
    // </div>
  );
};

export default Nav;
