"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/navBar.css";

const variants = {
  open: { x: "0%", opacity: 1, transition: { duration: 0.5 } },
  closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
};

export default function Nav() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [usetoken, setUsetoken] = useState<string>()

  const [open, setOpen] = useState(false);


useEffect(() => {
  const item = localStorage.getItem('authToken');
  if (item) {
    setUsetoken(item)
  }


  const handleOutsideClick = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);

const Links = [
  { link: "/", name: "Inicio" },
  { link: "/#sobreMi", name: "Sobre mi" },
  { link: "/#proyectos", name: "Proyectos" },
  { link: "/#blog", name: "Blog" },
  { link: "/#contactame", name: "Contáctame" },
];

return (
  <div>
    <nav className="stic bg-white bg-opacity-10 backdrop-blur-lg transition-all h-24 duration-300 ease-in-out z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center  cursor-pointer  align-baseline "
        >
          <Image
            width={70}
            height={70}
            src={"/img/logo.png"}
            alt="Nicolas Pereyra | Desarrollador Web"
          />
        </Link>

        <button
          type="button"
          ref={buttonRef}
          className="flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg focus:outline-none"
          aria-controls="sidebar"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col">
            <div className="w-11 h-1.5 bg-black rounded-sm my-1.5 mb-0.5 sanguchito"></div>
            <div className="w-7 h-1.5 bg-black rounded-sm my-1.5 ml-4 sanguchito2"></div>
          </div>
        </button>
      </div>
    </nav>

    <AnimatePresence>
      {open && (
        <motion.aside
          ref={sidebarRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          className="fixed top-0 right-0 w-64 h-full bg-white  bg-opacity-30 backdrop-blur-lg  z-40 p-4 shadow-lg"
        >
          <div className="flex p-5">
            <button onClick={() => setOpen(false)} className="">
              <div className="flex justify-center items-center mt-2">
                <div className={`relative w-10 h-10 hamburger ${open ? 'open' : ''}`}>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </button>
          </div>
          <div className=" flex flex-col space-y-4">
            {Links.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-lg text-gray-800 hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {(usetoken) ? (
              <Link
                key={"admin"}
                href={"/admin-page"}
                className="text-lg text-gray-800 hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                Admin
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  </div>
);
}
