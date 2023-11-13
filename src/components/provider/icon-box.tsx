import React from 'react'

import { FaTv, FaWifi, FaMobileAlt, FaFileAlt } from 'react-icons/fa'
import { HiArrowsUpDown } from 'react-icons/hi2'
import { GiAerialSignal } from 'react-icons/gi'

function IconBox({ title, content, icon }: any) {
    console.log("🚀 ~ file: icon-box.tsx:5 ~ IconBox ~ icon:", icon)

    return (
        <div className="block rounded-xl border border-gray-100 px-8 py-10 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
            <span className="text-4xl !text-[#215690] text-center block w-fit mx-auto">

                {icon === "TV" && <FaTv />}
                {icon === "Wifi" && <FaWifi />}
                {icon === "Mobile" && <FaMobileAlt />}
                {icon === "File" && <FaFileAlt />}
                {icon === "ArrowsUp" && <HiArrowsUpDown />}
                {icon === "Signal" && <GiAerialSignal />}



            </span>
            <h2 className="mt-5 text-xl font-bold text-center">
                {title}
            </h2>
            <p className="mt-5 text-base text-center">
                {content}
            </p>
        </div>
    )
}

export default IconBox