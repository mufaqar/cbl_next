import React from 'react'
const Inter_Service_State = ({ data }: any) => {
       return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto ">
            <div className="w-full h-auto  flex md:flex-col flex-row items-stretch">
                <div className='md:w-full w-full grid md:grid-cols-7 grid-cols-1 dtable' >
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {data?.provider}
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div dangerouslySetInnerHTML={{ __html: data?.type }} ></div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {data?.speed}
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center col-span-3">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {data?.summery?.summaryFeatures || data?.summery}
                            </p>
                        </div>
                    </div>
                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {data?.price}/mo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inter_Service_State