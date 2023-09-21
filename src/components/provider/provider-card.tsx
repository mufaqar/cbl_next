import Image from "next/image";
import Link from "next/link";
export const ProviderCard = ({ item, zone }: any) => {
    var features = item?.summery?.features?.split(', ');
    return (
        <>
            <div className="w-full h-auto  rounded-t-md rounded-b-md flex flex-col">

                <div className="md:w-full w-full grid md:grid-cols-5 grid-cols-1 dtable">
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <Image src={item.logo} alt="Feature Image" width={140} height={50} />
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div>
                            <h4 className="text-center md:text-base text-xs font-bold">{item?.summery.speed}</h4>
                            <p className="text-center md:text-xs text-xs"> Mbps </p>
                            <p className="text-center md:text-xs text-xs">{item?.summery?.summaryChannel && <>{item?.summery?.summaryChannel} Channels</>}</p>
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
                            <h5 className="text-center md:text-base text-xs font-bold"> ${item?.price} /mo. </h5>
                        </div>
                    </div>
                    <div className="grid gap-3 items-center justify-center p-5">

                        <Link href={`/providers/${item.slug}`} className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#ef9831] hover:bg-[#215690]">View Plans</Link>
                    </div>
                </div>
            </div>

        </>
    )
}