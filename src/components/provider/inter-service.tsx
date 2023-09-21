import React from 'react'

const Inter_Service = ({ data }: any) => {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
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
                                {data.provider}
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            {
                                data.type.map((t: any, i: number) => (
                                    <p className="text-center md:text-base text-xs" key={i}>
                                        {t.name}
                                    </p>
                                ))
                            }

                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {data?.summery?.summarySpeed} mbps
                                { data?.summery?.summaryChannel && <>, {data?.summery?.summaryChannel} Channels</> }
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                            {data?.summery?.summaryFeatures} 
                            </p>
                        </div>
                    </div>
                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                ${data?.price}/mo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inter_Service