import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Providers_Data, Services_data } from '@/const/exports'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-[#111827] pt-16 pb-4 '>
      <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5'>
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo.svg" height={56} width={254} />
          </Link>
          <p className='text-sm font-normal text-white/75 mt-5'>
            Making the world a better place through constructing elegant hierarchies.
          </p>
          <ul className='flex gap-5 mt-5'>
            <li>
              <Link href="#" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoFacebookCircle />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoLinkedinSquare />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-normal text-white mb-5'>
            SERVICES
          </h6>
          <ul className='grid gap-3'>
            {Services_data?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white/75 hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-normal text-white mb-5'>
            PROVIDERS
          </h6>
          <ul className='grid md:grid-cols-2 grid-cols-1 gap-3'>
            {Providers_Data?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white/75 hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-normal text-white mb-5'>
            COMPANY
          </h6>
          <ul className='grid gap-3'>
            {Services_data?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white/75 hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4 mt-12 pt-4 border-t border-white/20'>
        <p className='text-sm font-normal text-white/75'>
          Copyright © 2023 Cablemovers.net. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer