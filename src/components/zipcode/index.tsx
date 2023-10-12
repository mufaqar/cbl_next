import React from 'react'
import SearchForm from '../searchform'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Nearby_City from '../provider/nearby-city'
import Faqs_Sec from '../faqs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CiStreamOn } from 'react-icons/ci'
import { MdCable, MdSatelliteAlt } from 'react-icons/md'
import Table_CardProvider from '../provider/table-cardProvider'

function Zip_Code_Com({ zipcode, city, state, allProviders, zones }: any) {

    const { query } = useRouter();
    var type = query?.type;
    var types = query?.type;

    const servicesTypes = allProviders.map((item: any) => { return (item.serviceTypes.nodes) })
    const newServicesTypes = servicesTypes.map((st: any) => st.map((serviceType: any) => serviceType.name));
    const flattenedNames = [].concat(...newServicesTypes);
    const uniqueServiceType = [...new Set(flattenedNames)];

    const totalProviderCount = allProviders?.length || 0;

    return (
        <>
            <section className="min-h-[40vh]  flex items-center bg-gray-50">
                <div className="container mx-auto px-4">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
                            {type} Service Providers in {zipcode} <br /><span className="text-[#ef9831]">{city}, {state}</span>
                        </h1>
                        <p className="text-xl text-center font-[Roboto] my-5">
                            Enter your zip so we can find the best providers in your area:
                        </p>
                        <div className='grid justify-center'>
                            <SearchForm />
                        </div>
                    </div>
                </div>
            </section>
            <Provider_Nav />
            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            {type} Service Providers in <span className="text-[#ef9831]">{city}, {state}</span>
                        </h2>
                    </div>
                    <div className='grid gap-7'>
                        {
                            allProviders?.map((item: any, idx: number) => {
                                var summaryData = {
                                    logo: item?.featuredImage?.node?.mediaItemUrl,
                                    provider: item?.title,
                                    type: item.serviceTypes.nodes,
                                    summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                        type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                            type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                    price: item.providersInfo.proPrice,
                                    mobileNo: item.providersInfo?.proPhone,
                                    slug: item.slug
                                }

                                return (
                                    <>
                                        <ProviderCard key={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p className="text-sm font-[Roboto] mt-10">
                            *DISCLAIMER: Availability and displayed speeds vary by service address and not available in all areas, pricing subject to change at any time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className=''>
                        <h2 className="text-2xl font-bold">
                            Overview of Internet Service Providers in <span className="text-[#ef9831]">{city}, {state}</span>
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>
                            As of the time this page was written, {city}  residents has {totalProviderCount}  or more internet service providers offering various types of internet service plans including  {
                                allProviders?.slice(0, 2).map((item: any, idx: number) => (
                                    item.serviceTypes.nodes.map((type: any, i: number) => {
                                        return (
                                            <>
                                                <span key={i}> {type.name}, </span>
                                            </>
                                        )
                                    })

                                ))
                            } are the largest providers in the area.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            Cheap {type} Service Providers in <span className="text-[#ef9831]">{city}, {state}</span>
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing an internet service provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly options that don't compromise on quality. Below are the cheap internet service providers in {city}, {state}.</p>
                    </div>


                    <div className={`md:w-full min-w-fit grid  grid-cols-1 bg-[#215690] ${type === 'internet-tv' ? ' md:grid-cols-5' : ' md:grid-cols-4'} flex flex-col`}>
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
                                    {type === "tv" ? (
                                        "Channels"
                                    ) : type === "internet-tv" ? (
                                        "Speeds from "
                                    ) : (
                                        "Speeds from "
                                    )}
                                </h4>
                            </div>
                        </div>


                        {type === "internet-tv" &&
                            <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white mb-2">
                                        Channels
                                    </h4>
                                </div>
                            </div>

                        }



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
                    <div className='grid'>
                        {
                            allProviders?.map((item: any, idx: number) => {
                                var summaryData = {
                                    logo: item?.featuredImage?.node?.mediaItemUrl,
                                    provider: item?.title,
                                    type: item.serviceTypes.nodes,
                                    summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                        type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                            type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                    price: item.providersInfo.proPrice,
                                    mobileNo: item.providersInfo?.proPhone,
                                    slug: item.slug
                                }

                                return (
                                    <>
                                        <Table_CardProvider key={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p className="text-sm font-[Roboto] mt-10">
                            *DISCLAIMER: Availability and displayed speeds vary by service address and not available in all areas, pricing subject to change at any time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            Fastest  {type} Service Providers in <span className="text-[#ef9831]">{city}, {state}</span>
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>If speed is your top priority consider the following internet service providers in  {city}, {state}.</p>
                    </div>

                    <div className={`md:w-full min-w-fit grid  grid-cols-1 bg-[#215690] ${type === 'internet-tv' ? ' md:grid-cols-5' : ' md:grid-cols-4'} flex flex-col`}>
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
                                    {type === "tv" ? (
                                        "Channels"
                                    ) : type === "internet-tv" ? (
                                        "Speeds from "
                                    ) : (
                                        "Speeds from "
                                    )}
                                </h4>
                            </div>
                        </div>


                        {type === "internet-tv" &&
                            <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white mb-2">
                                        Channels
                                    </h4>
                                </div>
                            </div>

                        }



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
                    <div className='grid'>
                        {
                            allProviders?.map((item: any, idx: number) => {
                                var summaryData = {
                                    logo: item?.featuredImage?.node?.mediaItemUrl,
                                    provider: item?.title,
                                    type: item.serviceTypes.nodes,
                                    summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                        type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                            type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                    price: item.providersInfo.proPrice,
                                    mobileNo: item.providersInfo?.proPhone,
                                    slug: item.slug
                                }

                                return (
                                    <>
                                        <Table_CardProvider key={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p className="text-sm font-[Roboto] mt-10">
                            *DISCLAIMER: Availability and displayed speeds vary by service address and not available in all areas, pricing subject to change at any time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold">
                            Summary of Internet service providers in  {city}, {state}
                        </h2>
                    </div>
                    <div>

                        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
                            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                                <div className='md:w-full min-w-fit grid md:grid-cols-7 grid-cols-1 bg-[#215690] '>
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
                                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto col-span-3 h-[120px] items-center">
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
                                {
                                    allProviders?.map((item: any, idx: number) => {
                                        var summaryData = {
                                            provider: item?.title,
                                            type: item.serviceTypes.nodes,
                                            summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                                type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                                    type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                            price: item.providersInfo.proPrice
                                        }
                                        return (
                                            <>
                                                <Inter_Service data={summaryData} key={idx} />
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold">
                            Types of internet Technologies available in {city}, {state}
                        </h2>
                        <p className='text-base'>
                            As of the time this page was written, {city} likely have several types of internet technologies available to its residents. These technologies include {
                                uniqueServiceType.map((t: any, i: number) => (
                                    <span key={i}>{t} , </span>

                                ))
                            }
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                        {
                            uniqueServiceType.map((t: any, i: number) => (
                                <Technology_Box
                                    icon={<MdCable />}
                                    title={t}
                                    key={i}
                                    content="Cable TV uses coaxial cables to deliver television signals to your home. It provides a wide range of channels and is widely available.."
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container mx-auto px-4 grid gap-10">
                    <Faqs_Sec city={city} state={state} zipcode={zipcode} type={type} allProviders={allProviders} />
                </div>
            </section>
        </>
    )
}

export default Zip_Code_Com