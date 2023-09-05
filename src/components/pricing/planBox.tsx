import Link from 'next/link'
import React from 'react'

function PlanBox({ Plans, pro_phone }: any) {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto">
            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                <div className='md:w-full min-w-fit grid md:grid-cols-4 grid-cols-1 bg-[#f2f2f2]'>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center">
                                Package
                            </h4>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center">
                                Price
                            </h4>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center mb-2">
                                Speed
                            </h4>
                        </div>
                    </div>
                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center mb-2">
                                Order Now
                            </h4>
                        </div>
                    </div>
                </div>
                {Plans?.map((plan: any) => (
                    <div key={plan.id} className='md:w-full w-full grid md:grid-cols-4 grid-cols-1 dtable' >
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    {plan.package}
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    {plan.price}
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    {plan.speeds}
                                </p>
                            </div>
                        </div>
                        <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <Link href="tel:000-000-000" className="md:text-base text-xs text-[#ef9831] hover:text-[#215690] font-medium uppercase md:px-5 md:py-2.5">
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