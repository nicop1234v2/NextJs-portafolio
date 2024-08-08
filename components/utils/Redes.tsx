import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Redes() {
  return (

    <div className="flex justify-center items-center px-6 gap-4 mt-4">
      <Link href="mailto:nicopereyra286@gmail.com">
        <div className="cursor-pointer mt-1 transition duration-300 hover:scale-125">
          <Image
            src={"/img/svg/emailSvg.svg"}
            width={25}
            alt="my-blog"
            height={25}
          />
        </div>
      </Link>
      <Link target='_blank' href={"https://www.linkedin.com/in/nicolas-pereyra-550491310/"}>
        <div className="cursor-pointer transition duration-500 hover:scale-125">
          <Image
            src={"/img/svg/linkedin.svg"}
            width={26}
            alt="my-blog"
            height={25}
          />
        </div>
      </Link>
      <Link href={"https://github.com/nicop1234v2"} target='_blank'>
        <div className="cursor-pointer transition duration-500 hover:scale-125">
          <Image
            src={"/img/svg/git.svg"}
            width={25}
            alt="my-blog"
            height={25}
          />
        </div>
      </Link>
    </div>

  )
}
