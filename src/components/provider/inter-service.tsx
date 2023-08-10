import React from 'react'

const Inter_Service = () => {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto py-4 h-auto rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <div className="bg-white w-full h-auto grid md:grid-cols-5 pt-4 pb-4">
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Provider
                        </h4>
                        <p className="text-center text-base mt-2">
                            AT&T
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Connection Type
                        </h4>
                        <p className="text-center text-base mt-2">
                            Fiber & DSL
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Max Download Speeds up to
                        </h4>
                        <p className="text-center text-base mt-2">
                            5,000 Mbps
                        </p>
                    </div>
                </div>
                <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center">
                            Features
                        </h4>
                        <p className="text-center text-base mt-2">
                            Game-changing internet
                        </p>
                    </div>
                </div>
                <div className="grid justify-center p-5">
                    <div>
                        <h4 className="font-bold text-center mb-2">
                            Pricing starts from
                        </h4>
                        <p className="text-center text-base mt-2">
                            $55.00/mo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inter_Service