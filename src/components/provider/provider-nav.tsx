import Link from 'next/link'
import React, { useState } from 'react'

const Provider_Nav = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 350) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    if (typeof window !== "undefined") {

        window.addEventListener('scroll', changeBackground);

    }

    return (
        <section className={`bg-white py-3 shadow-sm border-y border-zinc-400/20  ${nav ? 'fixed top-0 left-0 right-0' : 'sticky'
            }`}>
            <div className="container mx-auto px-4">
                <div>
                    <ul className='flex md:gap-3 gap-1.5 items-center'>
                        <li>
                            <Link href="#" className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                Internet Providers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                TV Providers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                Internet and TV Providers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Provider_Nav