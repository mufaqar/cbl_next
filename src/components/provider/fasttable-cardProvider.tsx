import React from 'react'

const Fast_Table_CardProvider = ({ item, type, offer }: any) => {

    var features = item?.summery?.features?.split(', ');



    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto ">
            <div className="w-full h-auto  flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full w-full grid grid-cols-1 dtable ${type === 'internet-tv' ? ' md:grid-cols-5' : ' md:grid-cols-2'} flex flex-col`}>
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



                   
                </div>
            </div>
        </div>
    )
}

export default Fast_Table_CardProvider