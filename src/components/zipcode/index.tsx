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

function Zip_Code_Com({ zipcode, city, state, allProviders, zones }: any) {

    const { query } = useRouter();
    var type = query?.type;

    const servicesTypes = allProviders.map((item: any) => { return (item.serviceTypes.nodes) })
    const newServicesTypes = servicesTypes.map((st: any) => st.map((serviceType: any) => serviceType.name));
    const flattenedNames = [].concat(...newServicesTypes);
    const uniqueServiceType = [...new Set(flattenedNames)];

    return (
        <>
            <section className="pt-16 pb-16 relative overflow-hidden">
                <Image src='/images/hero-left.png' alt="hero-left" width={500} height={222} className='absolute top-0 left-[-175px]' />
                <Image src='/images/hero-right.png' alt="hero-left" width={500} height={222} className='absolute top-0 right-[-175px]' />
                <div className="container mx-auto px-4">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto">
                            {type} Service Providers in {zipcode} <br /><span className="text-[#ef9831]">{city}, {state}</span>
                        </h1>
                        <p className="text-xl text-center font-[Roboto] mt-3">
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
                        <h2 className="text-2xl font-bold">
                            Home {type} in {zipcode}
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
                                        <ProviderCard key={idx} item={summaryData} zone={zones} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p className="text-sm font-[Roboto] mt-10">
                            Availability and displayed speeds vary by service address and not available in all areas, pricing subject to change at any time
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className=''>
                        <h2 className="text-2xl font-bold">
                            Overview of Internet Service Providers in {city}, {state}
                        </h2>
                        <p className='text-xl font-[Roboto] mt-5'>
                            As of the time this page was written, {city} with the population of ( population) residents has (insert number of listed Internet providers) or more internet service providers offering various types of internet service plans including (list provider’s connection types). (Listed provider 1 and listed provider 2) are the largest providers in the area.
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

                            </div></div>
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
                            As of the time this page was written, {city} likely have several types of internet technologies available to its residents. These technologies include Cable Internet , Satellite TV and Streaming TV
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

                    <Faqs_Sec city={city} state={state} zipcode={zipcode} />

                </div>
            </section>
        </>
    )
}

export default Zip_Code_Com