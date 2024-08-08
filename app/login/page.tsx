'use client'

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from 'react'
import Loader from "@/components/utils/Loader";

export default function page() {

  const router = useRouter()
  const form = useRef<HTMLFormElement>(null);
  const [loader, setLoader] = useState<Boolean>(false)
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;


  const peticion = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/auth/check-auth-status`, {
        cache: "no-store",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      localStorage.setItem('authToken', data.token);
      Swal.fire({
        icon: "warning",
        title: "de nuevo?",
        text: `Ya hay una sesion abierta`,
        confirmButtonText: "Ok",
      }).then((resultado) => {
        router.push('/admin-page')
      });
      return data.token;
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Las credenciales han expirado`,
        confirmButtonText: "Ok",
      }).then((resultado) => {
        localStorage.removeItem('authToken');
        router.push('/login')
      });
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (token) {
      peticion();
    }
}, [])




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.current?.email.value,
          pass: form.current?.password.value
        }),
      });
      const data = await res.json();
      localStorage.removeItem('authToken');
      localStorage.setItem('authToken', data.token);
      Swal.fire({
        icon: "success",
        title: "¡ Bien !",
        text: `hola ${data.user.fullName}`,
        confirmButtonText: "Ok",
      }).then((resultado) => {
        router.push("/")
      })

    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "¡ oops !",
        text: `Credenciales invalidas`,
        confirmButtonText: "Ok",
      })
    }
    if (form.current) {
      form.current.email.value = "";
      form.current.password.value = "";
    }
    setLoader(false)
  }


  return (
    <>
      {loader ? (
        <div className="flex justify-center backdrop-blur-md mt-64 mb-64">
          <Loader />
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-24 mb-24">

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" onSubmit={handleSubmit} ref={form}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>


          </div>
        </div>
      )
      }
    </>
  )
}
