import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const CityBox
    = () => {
        return (
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
                {Cities?.map((item: any, idx: number) => {
                    return <li key={idx} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                        <Link href="#" className="">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl group-hover:underline">
                                    {item?.name}
                                </h3>
                                <BsArrowRight strokeWidth="1" className="items-center text-right" />
                            </div>
                            <div>
                                <p className="text-[#215690] group-hover:underline">
                                    Internet Providers
                                </p>
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
        )
    }

export default CityBox

export const Cities = [
    {
        name: "Los Angeles"
    },
    {
        name: "New York"
    },
    {
        name: "Boston"
    },
    {
        name: "Las Vegas"
    },
    {
        name: "Phoenix"
    },
    {
        name: "Atlanta"
    },
    {
        name: "Houston"
    },
    {
        name: "Denver"
    },
    {
        name: "Orlando"
    },
    {
        name: "Chicago"
    },
    {
        name: "Detroit"
    },
    {
        name: "Philadelphia"
    },
]