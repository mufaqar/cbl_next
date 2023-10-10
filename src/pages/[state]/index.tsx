"use client"
import CityBox from '@/components/city-box';
import Faqs_Sec from '@/components/faqs';
import Inter_Service from '@/components/provider/inter-service';
import { ProviderCard } from '@/components/provider/provider-card';
import Provider_Nav from '@/components/provider/provider-nav';
import Provider_Nav_State from '@/components/provider/provider-nav-state';
import Technology_Box from '@/components/provider/technology-box';
import SearchForm from '@/components/searchform';
import apolloClient from '@/config/client';
import { ALLZoneByZode, CITES, CITES_by_STATE, ZoneByCity } from '@/config/query';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { MdCable } from 'react-icons/md';
import { useRouter } from 'next/router'
export default function OurState({ allcities, state, allProviders, allzones}: any) {
  console.log("🚀 ~ providers_data", allProviders);
  const {query} = useRouter();

  const type = query.type || "internet";
 


  const servicesTypes = allProviders.map((item: any) => { return (item.providers_service_types) })
  const newServicesTypes = servicesTypes.map((st: any) => st.map((serviceType: any) => serviceType));
  const flattenedNames = [].concat(...newServicesTypes);
  const uniqueServiceType = [...new Set(flattenedNames)];
 


  return (
    <>

      <section className="min-h-[40vh]  flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <div >
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              {type} Service Providers in <br /><span className="text-[#ef9831]">{state}</span>
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
      <Provider_Nav_State />

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              {type} Service Providers in <span className="text-[#ef9831]">{state}</span>
            </h2>
          </div>
          <div className='grid gap-7'>
            {
              allProviders?.map((item: any, idx: number) => {
                var summaryData = {
                  logo: item?.featured_image,
                  provider: item?.title,
                  type: item.providers_service_types[0],
                  summery: item.providers_types === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                    type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                      type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                  price: item.pro_price,
                  mobileNo: item.pro_phone,
                  slug: item.slug,
                  features: item.features
                }

                return (
                  <>
                    <ProviderCard key={idx} type={type} item={summaryData} zone="{zones}" offer={item.providersInfo?.proOffer} />
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
              Overview of Internet Service Providers in {state}
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>


              As of the time this page was written, {state} with the residents has


              As of the time this page was written, {state} has three or more internet service providers offering various types of internet plans to its residents. You’ll likely have options from
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


              are the best internet service providers in {state}.



            </p>
          </div>
        </div>
      </section>


      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              Cheap {type} Service Providers in <span className="text-[#ef9831]"> {state}</span>
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing an internet service provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly options that don't compromise on quality. Below are the cheap internet service providers in {state}.</p>
          </div>
          <div className='grid gap-7'>
            {
              allProviders?.map((item: any, idx: number) => {
                var summaryData = {
                  logo: item?.featured_image,
                  provider: item?.title,
                  type: item.providers_service_types[0],
                  summery: item.providers_types === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                    type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                      type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                  price: item.pro_price,
                  mobileNo: item.pro_phone,
                  slug: item.slug,
                  features: item.features
                }

                return (
                  <>
                    <ProviderCard key={idx} type="internet" item={summaryData} offer={item.providersInfo?.proOffer} />
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
              Summary of Internet service providers in  {state}
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
              Types of internet Technologies available in  {state}
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





      <section>
        <div className='container mx-auto px-4 m-10'>
          <div className="mt-20 mb-7">
            <h2 className='text-center text-2xl font-bold'>
              Compare Internet Providers in Major Cities
            </h2>
          </div>
          <div>
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
              {allcities[0].zones.nodes?.map((item: any, id: number) => {
                return <li key={id} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                  <Link href={`${state}/${item.cities.nodes[0].slug}`} className="">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl group-hover:underline">{item.cities.nodes[0].name}</h3>
                      <BsArrowRight strokeWidth="1" className="items-center text-right" />
                    </div>

                  </Link>
                </li>
              })}
            </ul>
          </div>
        </div>
      </section>


    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { state } = query;

  const [cities] = await Promise.all([
    apolloClient.query({ query: CITES_by_STATE, variables: { state } }),

  ]);
  const allcities = cities.data.states.nodes;
  const allzone = cities.data.states.nodes[0].zones.nodes;

  const zoneTitles = allzone.map((zone: any) => zone.title);
  const resultString = zoneTitles.join(',');
  const All_zones_list = resultString.replace(/["\[\]]/g, '');

  const response_data = await fetch(`https://cblproject.cablemovers.net/wp-json/custom/v1/providers?internet_services=${All_zones_list}`);
  const providers_data = await response_data.json();
  const [zones] = await Promise.all([
    apolloClient.query({ query: ALLZoneByZode, variables: { providerIds: zoneTitles, } }),

  ]);
  const allzones = zones.data
  return {
    props: {
      allcities,
      state,
      allzone,
      allzones,
      allProviders: providers_data.providers

    },
  };
}



