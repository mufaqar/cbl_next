import Image from "next/image";
import Link from "next/link";
export const ProviderCard = ({ item, type, offer }: any) => {
    console.log("🚀 ~ file: provider-card.tsx:4 ~ ProviderCard ~ type:", type)
    console.log("🚀 ~ file: provider-card.tsx:4 ~ ProviderCard ~ item:", item)
    var features = item?.summery?.features?.split(', ');

    return (
        <>
            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex flex-col">
                <div className="md:w-full min-w-fit  bg-[#215690] flex justify-between items-center ">
                    <h2 className="text-base font-bold text-center text-white p-5">{item.provider}</h2>
                    <h2 className="text-base font-bold text-center text-white p-5">{offer}</h2>
                </div>
                <div className="md:w-full w-full grid md:grid-cols-5 grid-cols-1 dtable">
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <Image src={item.logo} alt="Feature Image" width={140} height={50} />
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div className="text-center">
                            <h4 className="text-center md:text-base text-xs font-bold">
                                {type === "tv" ? (
                                    "Channels"
                                ) : type === "internet-tv" ? (
                                    "Speeds from "
                                ) : (
                                    "Speeds from "
                                )}
                            </h4>
                            {type === "tv" ? (
                                <> {item?.summery.speed} </>
                            ) : type === "internet-tv" ? (
                                <> {item?.summery.speed} Mbps
                                    <h4 className="text-center md:text-base text-xs font-bold"> Channels</h4>
                                    {item?.summery?.summaryChannel} </>
                            ) : (
                                <> {item?.summery?.speed} Mbps</>
                            )}
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5 px-3">
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
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div>
                            <h5 className="text-center md:text-base text-xs font-bold">Pricing starts from</h5>
                            <p className="text-center md:text-xs text-xs">
                                <span className="font-extrabold text-[#215690] font-[Roboto] text-xl"> ${item?.price} </span> /mo.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-3 items-center justify-center p-5">
                        <Link href="tel:000-000-000" className="text-base text-center font-medium text-white bg-[#ef9831] hover:bg-[#215690] px-3 py-1.5 rounded-3xl">
                            {item?.mobileNo}
                        </Link>
                        <Link href={`/providers/${item.slug}`} className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#ef9831] hover:bg-[#215690]">View Plans</Link>
                    </div>
                </div>
            </div>

        </>
    )
}