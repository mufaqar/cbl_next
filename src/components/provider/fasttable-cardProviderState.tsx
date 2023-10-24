import React from 'react'
import Link from 'next/link'

const FastTable_CardProviderState = ({ item }: any) => {
    return (
        <div  className=" w-full lg:max-w-[1200px] mx-auto h-auto ">
            <div className="w-full h-auto  flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full w-full grid grid-cols-1 dtable md:grid-cols-2`}>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                            <Link href={`/providers/${item.slug}`}  target="_blank">   {item?.provider}</Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                        {item?.speed} Mbps
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FastTable_CardProviderState