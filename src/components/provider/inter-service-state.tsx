import React from 'react'
import Link from 'next/link'
const Inter_Service_State = ({ data, type }: any) => {
    return (
        <div className={` min-w-[120px] md:w-full grid  ${type === 'tv-internet' ? 'md:grid-cols-8' : 'md:grid-cols-7'} dtable`}>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">
                        <Link href={`/providers/${data.slug}`} >  {data?.provider} </Link>
                    </p>
                </div>
            </div>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div dangerouslySetInnerHTML={{ __html: data?.type.name }} ></div>
            </div>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">
                        {data?.speed}  {type !== 'tv' && (<>Mbps</>)}

                    </p>
                </div>
            </div>
            {type === "internet-tv" &&
                <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                        <p className="text-center md:text-base text-xs">
                            {data?.channel}
                        </p>
                    </div>
                </div>
            }

            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center md:col-span-3">
                <div>
                    <p className="text-center md:text-base text-xs">
                        {data?.summery?.summaryFeatures || data?.summery}
                    </p>
                </div>
            </div>
            <div className="w-full grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">
                        ${data?.price}/mo
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Inter_Service_State