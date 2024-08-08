'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/utils/Loader';
import Swal from "sweetalert2";
import { postInterface } from '@/components/interfaces/posts-interfaces';
import '../../styles/home.css'
import { SvgDelete } from '../../components/utils/decos/SvgEliminar';

export default function page() {
  const [loader, setLoader] = useState<Boolean>(false)
  const [posts, setPosts] = useState<postInterface[]>([])
  const router = useRouter();

  const getData = async (): Promise<postInterface[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/posts`, {
      cache: "no-store",
    });
    const data: postInterface[] = await res.json();
    return data;
  }



  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const token = localStorage.getItem('authToken');
      if (!token) {
        Swal.fire({
          icon: "warning",
          title: "¡Oops!",
          text: "Por favor inicia sesión",
          confirmButtonText: "Ok",
        }).then(() => {
          router.push('/login');
        });
      } else {
        const data = await getData();
        setPosts(data);
        setLoader(false);
      }
    };
    fetchData();

  }, []);


  const alertaBorrar = async (id: string) => {
    Swal.fire({
      icon: "warning",
      title: "Seguro que quiere borrar este post?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        borrar(id);
      } else if (result.isDenied) {
      }
    });
  };

  const borrar = async (id: string) => {
    const token = localStorage.getItem('authToken');
    setLoader(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      Swal.fire({
        icon: "success",
        title: "Bien!",
        text: "Post Borrado correctamente",
        confirmButtonText: "Ok",
      }).then((resultado) => {
        window.location.reload()
      });

    } catch (error) {
      console.log("error: " + error)
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


  const alertaSingOut = async () => {
    Swal.fire({
      icon: "warning",
      title: "Seguro que quieres cerrar sesion",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        sesion();
      } else if (result.isDenied) {
      }
    });
  };




  const sesion = () => {
    setLoader(true)
    localStorage.removeItem('authToken');
    router.push("/")
  }

  return (
    <>
      {loader ? (
        <div className="flex justify-center backdrop-blur-md mt-64 mb-64">
          <Loader />
        </div>
      ) : (
        <>
          <section className="mt-24 mb-24 mx-auto flex-col justify-center">
            <div className='flex-col justify-center p-4 g'>
              {

                posts?.map((item) => (
                  <div key={item.title} className="w-full border border-gray-200 rounded-lg shadow dark:border-gray-700 mt-5">

                    <div >
                      <div className=" rounded-lg p-5 sm:max-w-[1000px] max-w-[350px]" >
                        <h2 className="mb-3 inconsolata subtitle ">{item.title}</h2>
                        <p className="mb-3 inconsolata parrafo tracking-wide card-admin">{item.subtitle}</p>
                      </div>

                      <div className=' p-3'>
                        <button onClick={() => (alertaBorrar(item._id))} className=' p-2 text-sm border rounded-lg hover:bg-gray-100 '>
                          <SvgDelete />
                        </button>
                      </div>

                    </div>
                  </div>

                ))

              }
            </div>

            <div className='flex justify-center'>
              <button onClick={() => (alertaSingOut())} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">cerrar sesion</button>
            </div>
          </section>
        </>
      )}
    </>
  );
};



