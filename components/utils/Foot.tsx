import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "../../styles/home.css"
import Redes from "./Redes.tsx"

export default function Foot() {
  return (
    <footer className='bgColor-2 '>
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div className='md:flex md:justify-between '>
        <div className='mb-6 md:mb-0 '>
          <Link
            href='/'
            className='flex cursor-pointer mt-9 justify-between gap-2'
          >
            <Image
              width={85}
              height={85}
              src={"/img/logo.png"}
              alt='Nicolas Pereyra'
            />
          </Link>
        </div>
        <div className='flex-row justify-center mt-5 '>
          <h2 className='mb-2 poppinsSubTitle text-xl text-white'>Enlaces</h2>
          <div className='flex gap-10'>
            <div className='flex-col '>
              <div className='mt-3'>
                <Link href='/' className='hover:underline color0'>
                  <p>Inicio</p>
                </Link>
              </div>
              <div className='mt-3'>
                <Link href='/#sobreMi' className='hover:underline color0'>
                  <p>Sobre mi</p>
                </Link>
              </div>
            </div>

            <div className='flex-col '>
              <div className='mt-3'>
                <Link href='/#proyectos' className='hover:underline color0'>
                  <p>Proyectos</p>
                </Link>
              </div>

              <div className='mt-3'>
                <Link href='/#blog' className='hover:underline color0'>
                  <p>Blog</p>
                </Link>
              </div>
            </div>

            <div className='flex-col '>
              <div className='mt-3'>
                <Link href='/#contactame' className='hover:underline color0'>
                  <p>Contactame</p>
                </Link>
              </div>
              {/* 
              <div className="mt-3">
                <Link href="/" className="hover:underline color3">
                  <p>Noticias</p>
                </Link>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

      <div className='md:flex flex-col items-center justify-center gap-3'>
      <Redes/>
        <div className='flex justify-center'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024{" "}
            <a href='https://flowbite.com/' className='hover:underline'>
              Nicolas Pereyra
            </a>
            . Todos los derechos reservados
          </span>
        </div>
      </div>
    </div>
  </footer>
  )
}
