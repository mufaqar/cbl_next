import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const CityBox
    = () => {
        return (
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
                {[0,1,2,3,4,5,6,7,8,9,10,11].map((item: any, idx: number) => {
                  return <li key={idx} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                    <Link href="#" className="">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl group-hover:underline">Denver</h3>
                            <BsArrowRight strokeWidth="1" className="items-center text-right" />
                        </div>
                        <div>
                            <p className="text-blue-400 group-hover:underline">Internet Providers</p>
                        </div>
                    </Link>
                </li>
                 })}
            </ul>
        )
    }

export default CityBox
