import Link from 'next/link'
import React from 'react'

const Pricing_Plan = ({ internetPlans }: any) => {
    console.log("🚀 ~ file: pricing-plan.tsx:5 ~ internetPlans:", internetPlans)
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto  h-auto rounded-t-md rounded-b-md  border-zinc-400/10 ">
            <div className="bg-white w-full h-auto shadow-md border ">

                <div className='grid grid-cols-4'>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                        <div>
                            <h4 className="font-bold text-center">
                                Package
                            </h4>

                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                        <div>
                            <h4 className="font-bold text-center">
                                Price
                            </h4>

                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                        <div>
                            <h4 className="font-bold text-center mb-2">
                                Speed
                            </h4>

                        </div>
                    </div>
                    <div className="grid justify-center p-5">
                        <div>
                            <h4 className="font-bold text-center mb-2">
                                Order Now
                            </h4>

                        </div>
                    </div>
                </div>
                {internetPlans?.map((plan:any) => (
                    <div key={plan.id} className='grid grid-cols-4  border border-spacing-1 ' >
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                            <div>
                                <p className="text-center text-base mt-2">
                                    {plan.package}
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                            <div>
                                <p className="text-center text-base mt-2">
                                    {plan.price}
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                            <div>
                                <p className="text-center text-base mt-2">
                                    {plan.speeds}
                                </p>
                            </div>
                        </div>
                        <div className="grid justify-center p-5">
                            <div>

                                <Link href="tel:000-000-000" className="text-base text-[#ef9831] hover:text-[#215690] font-[Roboto] font-medium uppercase px-5 py-2.5">
                                    000-000-0000
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>






    )
}

export default Pricing_Plan