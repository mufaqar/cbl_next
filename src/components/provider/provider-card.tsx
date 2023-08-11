import Link from "next/link";

export const ProviderCard = ({ item, zone }: any) => {
    console.log(item);

    return (

        <>
            <div className=" w-full lg:max-w-[1200px]  mx-auto py-4 h-auto rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
                <div className="flex justify-between px-4 py-1 md:border-b-0 border-b ">
                    <h2 className="font-[Roboto] text-lg font-normal">{item.title}</h2>
                </div>
                <div className="bg-white w-full h-auto grid md:grid-cols-5 pt-4 pb-12">
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <img src={item.featuredImage.node.mediaItemUrl} alt="" className="" />
                    </div>

                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <h4 className="font-bold text-center">Speeds from: 25-5000 Mbps </h4>
                    </div>

                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <ul className="grid items-center justify-center ">
                            <li className="flex gap-2 items-center">
                                <svg className="min-w-[1rem] h-4  text-[#ef9831] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                                </svg>
                                <span>
                                    No annual contract
                                </span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg className="min-w-[1rem] h-4  text-[#ef9831] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                                </svg>
                                <span>
                                    Equipment fee included
                                </span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg className="min-w-[1rem] h-4  text-[#ef9831] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                                </svg>
                                <span>
                                    No price increases after 12 months
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div>
                            <h5 className="font-bold text-center">Pricing starts from</h5>
                            <p className="text-center">
                                <span className="font-extrabold text-[#215690] font-[Roboto] text-xl">$55.00</span> /mo.
                            </p>
                        </div>
                    </div>
                    <div className="grid items-center justify-center p-5">
                        <Link href="tel:000-000-000" className="text-base text-[#ef9831] hover:text-[#215690] font-[Roboto] font-medium uppercase px-5 py-2.5">
                           {item.providersInfo.proPhone}
                        </Link>
                        <Link href="/providers/" className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#ef9831] hover:bg-[#215690]">View Plans</Link>
                    </div>
                </div>
            </div>

        </>
    )
}