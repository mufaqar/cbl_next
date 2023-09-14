"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { BsTelephoneFill } from 'react-icons/bs'

const Header = () => {
    const [open, setOpen] = useState(false)
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
                        <li>
                            <Link href="/tv-providers" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>TV</Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Internet</Link>
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