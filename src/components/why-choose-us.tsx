import React from 'react'
import { FaBroadcastTower, FaShopware, FaHandshake } from 'react-icons/fa'

const Why_ChooseUs = () => {
    return (
        <section className="">
            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className='text-center text-2xl font-bold'>
                        WHY CHOOSE CABLEMOVERS.NET?
                    </h2>
                    <p className="mt-4 text-base font-[Roboto]">
                        Finding Internet & TV providers is tough, but we've made it easy.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaBroadcastTower className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            NATIONWIDE COVERAGE
                        </h2>
                        <p className="mt-1 text-base">
                            Find all Internet and TV providers available to you in your Area.
                        </p>
                    </div>
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaShopware className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            ONE STOP SHOP
                        </h2>
                        <p className="mt-1 text-base">
                            Compare all Internet and TV plans, order service for no extra charge.
                        </p>
                    </div>
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaHandshake className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            TOP BRANDS
                        </h2>
                        <p className="mt-1 text-base">
                            We partnered with Top Brands to help you shop smartly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_ChooseUs