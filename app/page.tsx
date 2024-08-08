"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "../styles/styles.css";
import "../styles/home.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import {
  GroupCircles,
  SvgCircleBig,
  SvgLineaInclinada,

} from "../components/utils/decos";
import Redes from "@/components/utils/Redes";
const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "50%" },
};

const variants1 = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "20%" },
};

const variants2 = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "70%" },
};
const variants3 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0 },
};

const Home: React.FC = () => {

  const form = useRef<HTMLFormElement>(null);

  const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.current?.nombre.value ||
      !form.current?.email.value ||
      !form.current?.mensaje.value
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Completar todos los campos",
      });
    } else {
      emailjs
        .sendForm(
          "service_fmx6z0h",
          "template_fetqd6a",
          form.current,
          "jp2Uq2mm1X0FYquBA"
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "¡ Bien !",
            text: "Su mensaje ha sido enviado!",
            confirmButtonText: "Ok",
          }).then((resultado) => {
            if (resultado.value && form.current) {
              form.current.nombre.value = "";
              form.current.email.value = "";
              form.current.mensaje.value = "";
            }
          });
        });
    }
  };


  return (
    <main>
      <div className="relative overflow-hidden">
        <div>
          <section
            id="home"
            className='relative bg-[url("../public/img/hero.png")] bg-cover bg-center bg-no-repeat h-screen group overflow-hidden '
          >
            <div className="flex justify-center items-center max-w-screen-xl mx-auto mt-24 sm:mt-60">
              <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-24 ">
                <motion.div
                  initial={"hidden"}
                  transition={{ ease: "easeOut", duration: 3 }}
                  variants={variants3}
                  viewport={{ once: true }}
                  whileInView={"visible"}
                  className="m-auto lg:inline-flex rounded-lg mt-10 sm:order-1 order-2"
                >
                  <div className="justify-start ml-5 sm:max-w-[1100px] max-w-[320px] z-index-10 ">
                    <Image
                      width={600}
                      height={600}
                      src={"/img/name.png"}
                      alt="Nicolas Pereyra | Desarrollador Web"
                    />
                    <div className="flex justify-start z-index-50 mt-5">
                      <h1 className="gradient-text text-2xl">
                        DESARROLLADOR WEB
                      </h1>
                    </div>
                    <div className=" z-index-50 mt-5 sm:text-xl text-base color-b inconsolata  ">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("Soy Nico!")
                            .pauseFor(500)
                            .deleteAll()
                            .changeDelay(100)
                            .typeString("Apasionado por el codigo desde 2021")
                            .start();
                        }}
                      />
                    </div>
                    <Image
                      width={800}
                      height={200}
                      src={"/img/deco-hero.png"}
                      alt="Nicolas Pereyra | Desarrollador Web"
                    />
                  </div>
                </motion.div>
                <div className="items-center  m-auto lg:inline-flex sm:order-2 order-1 mt-8">
                  <div>
                    <img
                      className="w-40 h-40 rounded-full"
                      src="/img/perfil.jpg"
                      alt="Rounded avatar"
                    />
                    <Redes />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section >
        <div id="sobreMi"></div>
        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl mt-16 ">
          <div className="relative flex-col items-start m-auto align-middle" >
            <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 1 }}
                variants={variants2}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="flex m-auto lg:inline-flex rounded-lg 9 sm:order-1 order-1"
              >
                <div className="p-8 max-w-xl text-center lg:text-left">
                  <div>
                    <h2 className="tracking-tightin consolata subtitle">
                      ¿Quien soy?
                    </h2>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo">
                      Mi nombre es Nicolas Pereyra, estudio ingenieria en sistemas en la universidad tecnologica nacional (UTN) en la provincia de cordoba, Argentina.
                    </p>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo">
                      Hace 3 años aproximadamente, empece a aprender programacion en python y fue un camino de ida, al que por ahora, no le veo fin. Puedo decir que soy un apasionado.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 2 }}
                variants={variants3}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="items-center  m-auto lg:inline-flex sm-desaparecer sm:order-1 order-1">
                <GroupCircles />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 1 }}
                variants={variants2}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="flex m-auto lg:inline-flex rounded-lg 9 sm:order-1 order-1"
              >
                <div className="p-8 max-w-xl text-center lg:text-left">
                  <div>
                    <h2 className="tracking-tightin consolata subtitle">
                      Un poco mas de mi
                    </h2>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo">
                      Mis tecnologias mas fuertes son NextJs, para el desarrollo Frontend de paginas web y NestJs, un increible framework para el desarrollo de aplicaciones del lado del servidor.
                    </p>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo">
                      Tengo conocimiento en el uso de bases de datos MongoDb y PostgresQL y en la utilizacion de figma para creacion de diseños web y TailwidnCSS para el estilado de las aplicaciones.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 2 }}
                variants={variants3}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="items-center  m-auto lg:inline-flex sm-desaparecer ">
                <div>
                  <div className="mb-10">
                    <SvgCircleBig />
                  </div>
                  <SvgLineaInclinada />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="flex  bg-cover bg-center bg-no-repeat h-screen group overflow-hidden bgColor-4 items-center"
      >
        <div className="relative items-center w-full  mx-auto md:px-12 lg:px-16 max-w-7xl ">
          <div className="relative flex-col items-start m-auto align-middle ">
            <div className="grid sm:grid-flow-col grid-flow-row   lg:grid-cols-2 lg:gap-24 gap-10 ">
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 2 }}
                variants={variants1}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="flex m-auto lg:inline-flex rounded-lg sm:row-span-4 sm:order-1 order-1"
              >
                <div className=" max-w-xl text-justify lg:text-left sm:mx-0  mx-6 ">
                  <div>
                    <h2 className="tracking-tightin consolata subtitle2">
                      Ultimo proyecto
                    </h2>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo color-1">
                      El ultimo proyecto se trata de una landing page para una orgaizacion social llamada 'Aile', es por ahora mi unica experiencia laboral.
                    </p>
                    <p className="max-w-xl mt-4  tracking-tight inconsolata parrafo color-1">
                      Esta desarrollada en NextJs, utilice TailwindCSS para los estilos y recibe actualizaciones constantemente. Un proyecto es poder escalar esta web para que permita un sistema de logeo donde cada miembro de esta organizacion tenga roles y tenga acceso limitado y especializado a la informacion segun el rol que posea.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 2 }}
                variants={variants1}
                viewport={{ once: true }}
                whileInView={"visible"}
                className=" m-auto rounded-lg sm:col-span-5 sm:row-span-4 sm:order-1 order-1 cursor-pointer"

              >
                <Link href={"https://aile.com.ar/"} target="_blan">

                  <div className=" justify-center items-center px-6 ">
                    <Image
                      src={"/img/aile.png"}
                      width={850}
                      alt="aile AILE"
                      className="rounded-lg"
                      height={850}
                    />
                  </div>
                  <div className="cursor-pointer flex justify-center items-center px-6 mt-3 gap-1">
                    <p>VISITAR</p>
                    <Image
                      src={"/img/clic.svg"}
                      width={20}
                      alt="aile AILE"
                      height={20}
                    />
                  </div>

                </Link>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section id="blog" className="mt-24">
        <div className="relative items-center w-full  mx-auto md:px-12 lg:px-16 max-w-7xl ">
          <div className="relative flex-col items-start m-auto align-middle ">
            <div className="grid  grid-flow-row lg:grid-cols-2  gap-10 ">
              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 3 }}
                variants={variants3}
                viewport={{ once: true }}
                whileInView={"visible"}
                className=" m-auto  rounded-lg sm:order-1 order-1"
              >
                <div className=" justify-center items-center px-6">
                  <Image
                    src={"/img/blog.svg"}
                    width={500}
                    alt="my-blog"
                    height={500}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={"hidden"}
                transition={{ ease: "easeOut", duration: 3 }}
                variants={variants3}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="flex justify-start  items-center rounded-lg  order-1"
              >
                <div className=" max-w-xl text-justify lg:text-left sm:mx-0  mx-10 ">
                  <div>
                    <h2 className=" consolata subtitle1">A veces escribo</h2>
                    <div className="mt-4">
                      <p className="max-w-xl mt-1  tracking-tight inconsolata subtitle-3 ">
                        De diseño
                      </p>
                      <p className="max-w-xl mt-1  tracking-tight inconsolata subtitle-3 ">
                        De desarrollo
                      </p>
                      <p className="max-w-xl mt-1  tracking-tight inconsolata subtitle-3 ">
                        De aprendizaje y tambien de la vida
                      </p>
                    </div>
                    <motion.div
                      initial={"hidden"}
                      transition={{ ease: "easeOut", duration: 1 }}
                      variants={variants}
                      viewport={{ once: true }}
                      whileInView={"visible"}
                      className="mt-10">
                      <button
                        className="flex gap-16 items-center px-6 py-3 font-sans text-base inconsolata font-bold text-center border border-orange-500 text-orange-400 uppercase align-middle  before:absolute 
                      group relative
                      before:inset-0 
                      before:bg-orange-100 
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left"
                        type="button"
                      >
                        <span className="relative"> Lee mis articulos</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="w-5 h-5 relative"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H-2"
                          ></path>
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactame" className="mt-24 mb-24">
        <div className="flex-col justify-center mb-14">
          <h1 className="inconsolata subtitle1 text-center ">Contactame</h1>
          <h3 className="inconsolata subtitle3 text-center mt-8">
            Alguna pregunta o propuesta?
          </h3>
          <h6 className="inconsolata subtitle4 text-center ">Adelante</h6>
        </div>

        <form onSubmit={enviarEmail} ref={form}>
          <div className="flex justify-center mx-auto sm:gap-56 gap-6 max-w-[800px] px-4">
            <div className=" h-11 w-full sm:max-w-[250px] max-w-[200px]">
              <input
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />

            </div>

            <div className=" h-11 w-full sm:max-w-[250px] max-w-[200px]">
              <input
                name="email"
                id="email"
                placeholder="Email"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </div>
          <div className="flex justify-center mx-auto  sm:max-w-[800px] max-w-[450px] mt-10 px-4">
            <div className=" h-11 w-full max-w-[600px]">
              <input
                id="mensaje" name="mensaje"
                placeholder="Mensaje"
                type="text"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </div>

          <motion.div
            initial={"hidden"}
            transition={{ ease: "easeOut", duration: 5 }}
            variants={variants1}
            viewport={{ once: true }}
            whileInView={"visible"}
            className="flex justify-center text-center mx-auto mt-10"
          >
            <button type="submit">
              <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-500 rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Enviar</span>
              </a>
            </button>
          </motion.div>
        </form>
      </section>
    </main >
  );
};
export default Home;

