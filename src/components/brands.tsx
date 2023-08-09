import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brands = () => {
  return (
    <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item: any, idx: number) => {
        return <li key={idx} className='bg-white rounded-2xl px-4 py-4'>
          <Link href="#" className="">
            <Image src='/images/logo1.webp' alt='logo1.webp' width={120} height={50} className='object-contain' />
          </Link>
        </li>
      })}
    </ul>
  )
}

export default Brands