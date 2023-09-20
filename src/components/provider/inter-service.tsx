import React from 'react'

const Inter_Service = () => {
    return (
            <div className=" w-full lg:max-w-[1200px] mx-auto h-auto">
                <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                    <div className='md:w-full min-w-fit grid md:grid-cols-5 grid-cols-1 bg-[#215690] '>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                            <div>
                                <h4 className="md:text-base text-xs text-center text-white">
                                    Provider
                                </h4>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                            <div>
                                <h4 className="md:text-base text-xs text-center text-white">
                                    Connection Type
                                </h4>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                            <div>
                                <h4 className="md:text-base text-xs text-center text-white mb-2">
                                    Download Speeds up to
                                </h4>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                            <div>
                                <h4 className="md:text-base text-xs text-center text-white mb-2">
                                    Features
                                </h4>
                            </div>
                        </div>
                        <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                            <div>
                                <h4 className="md:text-base text-xs text-center text-white mb-2">
                                    Pricing starts from
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-full w-full grid md:grid-cols-5 grid-cols-1 dtable' >
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    AT&T
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    Fiber & DSL
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    5,000 Mbps
                                </p>
                            </div>
                        </div>
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    Game-changing internet
                                </p>
                            </div>
                        </div>
                        <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                            <div>
                                <p className="text-center md:text-base text-xs">
                                    $55.00/mo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Inter_Service