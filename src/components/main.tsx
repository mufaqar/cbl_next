import React from 'react'
import SearchForm from './searchform'

const Main = () => {
    return (
        <section className="flex justify-center mt-10 ">
            <div className="bg-[#F3FAFF] container mx-auto px-4 shadow-xl rounded-3xl sm:px-10 grid md:grid-cols-2 items-center">
                <div className="py-10">
                    <h1 className="sm:text-5xl text-2xl font-bold">
                        Find <span className="text-[#ef9831]">Internet & TV Providers</span> in Your Area
                    </h1>
                    <div className="w-full py-5 mt-6 bg-white border md:h-52 rounded-3xl">
                        <SearchForm />
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