import Link from 'next/link'
import React from 'react'

function PlanBox({ Plans, pro_phone }: any) {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto  h-auto ">
            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md ">
                <div className='grid grid-cols-4 bg-[#f2f2f2]'>
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
                {Plans?.map((plan: any) => (
                    <div key={plan.id} className='grid grid-cols-4 dtable' >
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
                                    {pro_phone}
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default PlanBox