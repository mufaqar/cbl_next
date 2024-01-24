import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LuPhoneCall } from 'react-icons/lu';

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
        <section className={`bg-[#215690] py-5 shadow-sm border-y border-zinc-400/20  ${nav ? 'fixed top-0 left-0 right-0' : 'sticky'
            }`}>
            <Link href="tel:833-592-0098" className="items-center container mx-auto gap-2 text-[#ef9831] font-[Roboto] flex justify-center text-center">
                            <LuPhoneCall size={28} />
                            <span className="text-2xl font-bold">Call for Setup 833-592-0098</span>
                        </Link>
        </section>
    )
}

export default Provider_Nav