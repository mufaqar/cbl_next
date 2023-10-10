import Faqs_Sec from '@/components/faqs';
import SearchForm from '@/components/searchform'
import React from 'react'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Image from 'next/image'
import Provider_Nav_City from '../provider/provider-nav-city';
import { ProviderCardState } from '../provider/provider-card-state';
import { MdCable } from 'react-icons/md';
import Inter_Service_State from '../provider/inter-service-state';


export default function Cities_com({ my_city,  allProviders, type }: any) {



    const inputString = my_city;
    const parts = inputString.split('-');
    const capitalizedWords: string[] = parts.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
    const city = capitalizedWords.join(' ');

    const servicesTypes = allProviders.map((item: any) => { return (item.providers_service_types) })
    const newServicesTypes = servicesTypes.map((st: any) => st.map((serviceType: any) => serviceType));
    const flattenedNames = [].concat(...newServicesTypes);
    const uniqueServiceType = [...new Set(flattenedNames)];


    allProviders = allProviders.filter((item: any) => item?.providers_types?.some((i: any) => i.toLowerCase() === type));




    return (
        <>

            <section className="min-h-[40vh]  flex items-center bg-gray-50">
                <div className="container mx-auto px-4">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
                            {type} Service Providers in <br /><span className="text-[#ef9831]">{city}</span>
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

            <Provider_Nav_City />

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            {type} Service Providers in <span className="text-[#ef9831]">{city}</span>
                        </h2>
                    </div>
                    <div className='grid gap-7'>
                        {
                            allProviders?.map((item: any, idx: number) => {

                                var speed_channel = `<h4 class="text-center md:text-base text-xs font-bold">Speed </h4><p>${item.services_info_internet_tv_bundles_speed} mbps , <h4 class="text-center md:text-base text-xs font-bold">Channels </h4>${item.services_info_internet_tv_bundles_channels} `
                                var summaryData = {
                                    logo: item?.featured_image,
                                    provider: item?.title,
                                    type: item.providers_service_types[0],
                                    summery: type === "internet" ? item.services_info_internet_services_features :
                                        type === "tv" ? item.services_info_tv_services_features :
                                            type === "internet-tv" && item.services_info_internet_tv_bundles_features,
                                    price: item.pro_price,
                                    mobileNo: item.pro_phone,
                                    slug: item.slug,
                                    speed: type === "internet" ? `<h4 class="text-center md:text-base text-xs font-bold">Speed </h4><p>${item.services_info_internet_services_speed}</p>` :
                                        type === "tv" ? `<h4 class="text-center md:text-base text-xs font-bold">Channels </h4><p>${item.services_info_tv_services_speed}</p>` :
                                            type === "internet-tv" && speed_channel,

                                }

                                return (
                                    <>
                                        <ProviderCardState key={idx} type={type} item={summaryData} offer={item.providersInfo?.proOffer} />

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
                            Overview of Internet Service Providers in {city}
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>


                            As of the time this page was written, {city} with the residents has


                            As of the time this page was written, {city} has three or more internet service providers offering various types of internet plans to its residents. You’ll likely have options from
                            {
                                allProviders?.slice(0, 2).map((item: any, idx: number) => (
                                    item.providers_service_types.map((type: any, i: number) => {
                                        return (
                                            <>
                                                <div key={i} className='inline-block pr-1' dangerouslySetInnerHTML={{ __html: type }} />,
                                            </>
                                        )
                                    })

                                ))
                            }


                            internet service providers.
                            {
                                allProviders?.slice(0, 2).map((item: any, idx: number) => (
                                    item.providers_service_types.map((type: any, i: number) => {
                                        return (
                                            <>
                                                <div key={i} className='inline-block pr-1' dangerouslySetInnerHTML={{ __html: type }} />,
                                            </>
                                        )
                                    })

                                ))
                            }


                            are the best internet service providers in {city}.



                        </p>
                    </div>
                </div>
            </section>


            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            Cheap {type} Service Providers in <span className="text-[#ef9831]"> {city}</span>
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing an internet service provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly options that don't compromise on quality. Below are the cheap internet service providers in {city}.</p>
                    </div>
                    <div className='grid gap-7'>
                        {
                            allProviders?.map((item: any, idx: number) => {

                                var speed_channel = `<h4 class="text-center md:text-base text-xs font-bold">Speed </h4><p>${item.services_info_internet_tv_bundles_speed} mbps , <h4 class="text-center md:text-base text-xs font-bold">Channels </h4>${item.services_info_internet_tv_bundles_channels} `
                                var summaryData = {
                                    logo: item?.featured_image,
                                    provider: item?.title,
                                    type: item.providers_service_types[0],
                                    summery: type === "internet" ? item.services_info_internet_services_features :
                                        type === "tv" ? item.services_info_tv_services_features :
                                            type === "internet-tv" && item.services_info_internet_tv_bundles_features,
                                    price: item.pro_price,
                                    mobileNo: item.pro_phone,
                                    slug: item.slug,
                                    speed: type === "internet" ? `<h4 class="text-center md:text-base text-xs font-bold">Speed </h4><p>${item.services_info_internet_services_speed}</p>` :
                                        type === "tv" ? `<h4 class="text-center md:text-base text-xs font-bold">Channels </h4><p>${item.services_info_tv_services_speed}</p>` :
                                            type === "internet-tv" && speed_channel,

                                }

                                return (
                                    <>
                                        <ProviderCardState key={idx} type={type} item={summaryData} offer={item.providersInfo?.proOffer} />

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
                            Summary of Internet service providers in  {city}
                        </h2>
                    </div>
                    <div>

                        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
                            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                                <div className='md:w-full min-w-fit grid md:grid-cols-5 grid-cols-1 bg-[#215690] '>
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




                                {
                                    allProviders?.map((item: any, idx: number) => {
                                        var speed_channel = `${item.services_info_internet_tv_bundles_summary_speed} mbps , ${item.services_info_internet_tv_bundles_summary_channel} Channels`
                                        var summaryData = {
                                            provider: item?.title,
                                            type: item.providers_service_types[0],
                                            summery: type === "internet" ? item.services_info_internet_services_summary_features :
                                                type === "tv" ? item.services_info_tv_services_summary_features :
                                                    type === "internet-tv" && item.services_info_internet_tv_bundles_summary_features,
                                            price: item.pro_price,
                                            speed: type === "internet" ? item.services_info_internet_services_summary_speed :
                                                type === "tv" ? item.services_info_tv_services_summary_speed :
                                                    type === "internet-tv" && speed_channel,
                                        }

                                        return (
                                            <>
                                                <Inter_Service_State data={summaryData} key={idx} />
                                            </>
                                        )
                                    })
                                }

                            </div></div>
                    </div>
                </div>
            </section>



            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold">
                            Types of internet Technologies available in  {city}
                        </h2>
                        <p className='text-base'>
                            As of the time this page was written, likely have several types of internet technologies available to its residents. These technologies include    {
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
                    <Faqs_Sec city={city} type={type} state="" zipcode="" allProviders={allProviders}  />
                </div>
            </section>



        </>
    )
}


