"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/styles.css";

const variants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#quienesSomos", name: "Nosotros" },
    { link: "/#proyectos", name: "Proyectos" },
    { link: "/#sumate", name: "Sumate" },
    { link: "/contactos", name: "Contáctanos" },
  ];

  return (
    <div>
      <nav className="stic bg-white bg-opacity-10 backdrop-blur-lg transition-all h-24 duration-300 ease-in-out z-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center  cursor-pointer w-auto h-auto align-baseline"
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
        {open ? (
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
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-lg text-gray-800 hover:text-gray-600"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.aside>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </div>
  );
}
