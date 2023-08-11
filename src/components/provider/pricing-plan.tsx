import Link from 'next/link'
import React from 'react'

const Pricing_Plan = () => {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto py-4 h-auto rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <div className="bg-white w-full h-auto grid md:grid-cols-5 pt-4 pb-4">
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Package
                        </h4>
                        <p className="text-center text-base mt-2">
                            Internet 15 GB
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Download Speeds
                        </h4>
                        <p className="text-center text-base mt-2">
                            15 Mbps
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Data Caps
                        </h4>
                        <p className="text-center text-base mt-2">
                            15 GB
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            15 GB
                        </h4>
                        <p className="text-center text-base mt-2">
                            $49.99/mo
                        </p>
                    </div>
                </div>
                <div className="grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center mb-2">
                            Order Now
                        </h4>
                        <Link href="tel:000-000-000" className="text-base text-[#ef9831] hover:text-[#215690] font-[Roboto] font-medium uppercase px-5 py-2.5">
                            000-000-0000
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing_Plan