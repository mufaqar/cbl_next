"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { BsTelephoneFill } from 'react-icons/bs'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [subMenu1, setSubMenu1] = useState(false)
    return (
        <header className="h-auto shadow-md py-5 font-[Roboto]">
            <nav className="container mx-auto px-4 flex items-center justify-between ">
                <div className="sm:hidden flex items-center">
                    <button onClick={() => { setOpen(!open) }}>
                        {
                            open ?
                                (<IoMdClose size={24} />)
                                :
                                (<RxHamburgerMenu size={24} />)
                        }
                    </button>
                </div>
                <div className="sm:pl-0 pl-7 sm:w-1/3 w-full">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={155} height={34} className='' />
                    </Link>
                </div>
                <div className={`sm:w-2/3 w-full sm:justify-end sm:static absolute left-0 sm:py-0 py-7 sm:px-0 px-5 flex items-center ${open ? 'top-[107px] bg-white z-40' : 'top-[-100%] '}`}>
                    <ul className="flex sm:flex-row flex-col sm:items-center md:gap-[3vw] gap-5">
                        <li onMouseEnter={() => { setSubMenu(true) }} onClick={()=>{setSubMenu(!subMenu)}} onMouseLeave={()=>setSubMenu(false)}>
                            <Link href="/tv-providers" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>TV</Link>
                            <ul className={`bg-white md:absolute static top-16 md:w-40 w-full md:py-4 pt-5 pb-0 md:px-4 px-0 grid gap-5 z-50 md:shadow  ${subMenu ? 'block' : 'hidden'}`}>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Xfinity
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        CenturyLink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Brightspeed
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Astound Broadband
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li onMouseEnter={() => { setSubMenu1(true) }} onClick={()=>{setSubMenu1(!subMenu1)}} onMouseLeave={()=>setSubMenu1(false)}>
                            <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Internet</Link>
                            <ul className={`bg-white md:absolute static top-16 md:w-40 w-full md:py-4 pt-5 pb-0 md:px-4 px-0 grid gap-5 z-50 md:shadow  ${subMenu1 ? 'block' : 'hidden'}`}>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Xfinity
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        CenturyLink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Brightspeed
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Astound Broadband
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/providers" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Providers</Link>
                        </li>
                        <li>
                            <Link href="/blog" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Blog</Link>
                        </li>
                        <Link href="tel:855-512-0491" className="items-center gap-2 text-[#ef9831] font-[Roboto] flex justify-end">
                            <BsTelephoneFill size={18} />
                            <span className="text-base font-normal">855-512-0491</span>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header