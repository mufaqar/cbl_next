import React from 'react'

const Table_CardProvider = ({ item, type, offer }: any) => {

    var features = item?.summery?.features?.split(', ');



    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto ">
            <div className="w-full h-auto  flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full w-full grid grid-cols-1 dtable ${type === 'internet-tv' ? ' md:grid-cols-5' : ' md:grid-cols-4'} flex flex-col`}>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                {item?.provider}
                            </p>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            {type === "tv" ? (
                                <> {item?.summery?.speed} </>
                            ) : type === "internet-tv" ? (
                                <> <p className="tcd">{item?.summery?.speed} Mbps </p>
                                </>
                            ) : (
                                <>   <p className="tcd">{item?.summery?.speed} Mbps</p></>
                            )}

                        </div>
                    </div>


                    {type === "internet-tv" &&
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                            <div className="text-center">

                                <p className="tcd"> {item?.summery?.summaryChannel}  </p>
                            </div>
                        </div>

                    }
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <ul className="grid items-center justify-center ">
                                {
                                    features?.map((feature: any, idx: number) => (
                                        <li className="flex gap-2 items-center" key={idx}>
                                            <svg className="min-w-[1rem] h-4  text-[#ef9831] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                                            </svg>
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))
                                }



                            </ul>
                        </div>
                    </div>

                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                                ${item?.price}  /mo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table_CardProvider