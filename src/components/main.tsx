import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Main = () => {
    return (
        <section className="flex justify-center mt-10 ">
            <div className="bg-[#F3FAFF] container mx-auto px-4  shadow-xl rounded-3xl sm:px-10 grid md:grid-cols-2 items-center">
                <div className="py-10">
                    <h1 className="sm:text-5xl text-2xl font-bold">
                        Find <span className="text-[#039b8e]">Internet & TV Providers</span> in Your Area
                    </h1>
                    <div className="w-full py-5 mt-6 bg-white border md:h-52 rounded-3xl">
                        <div className="relative flex items-center w-full sm:px-12 px-6 mt-6 md:mt-10">
                            <FaMagnifyingGlass className="absolute ml-3" />
                            <input type="text" placeholder="Enter Zip Code" className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
                            <button className="px-4 py-[13px] font-semibold text-white bg-blue-500 border-zinc-400 rounded-r-md">Search</button>
                        </div>

                        <div className="flex px-4 mt-6 md:gap-3 md:mt-5 md:px-10 font-[Roboto]">
                            <input type="radio" name="" id="" className="w-10 h-7" />
                            <h5>Internet</h5>
                            <input type="radio" name="" id="" className="w-10 h-7" />
                            <h5>TV</h5>
                            <input type="radio" name="" id="" className="w-10 h-7" />
                            <h5>Bundle</h5>
                        </div>
                    </div>
                </div>
                <div className="sm:block hidden">
                    <img src="/images/hso.webp" alt="" className="ml-auto h-[485px] " />
                </div>
            </div>
        </section>
    )
}

export default Main