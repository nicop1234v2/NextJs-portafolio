import Image from "next/image";
import Link from "next/link";
import "../styles/styles.css"

export default function Home() {
  return (
    <main>
      <div className='relative overflow-hidden'>
        <div>
          <section
            id='home'
            className='relative bg-[url("../public/img/heroPrincipal.png")] bg-cover bg-center bg-no-repeat h-screen group overflow-hidden'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-0'></div>

            <div className='flex justify-center z-10 relative items-center item py-32  mt-24'>
              <div className='justify-center sm:max-w-[1100px] max-w-[320px] z-index-10 '>
                <Image
                  width={600}
                  height={600}
                  src={"/img/nombre.png"}
                  alt='Nicolas Pereyra | Desarrollador Web'
                />
                <div className='flex justify-center z-index-50'>
                    <h1 className="gradient-text text-2xl">DESARROLLADOR WEB</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className='mt-20 ml-5 '>
        <h1>ajsgdf</h1>
      </section>
    </main>
  );
}
