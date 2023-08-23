import React from 'react'
import SearchForm from '../searchform'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Nearby_City from '../provider/nearby-city'
import Faqs_Sec from '../faqs'
import Image from 'next/image'

function Zip_Code_Com({zipcode,city, state ,county, allProviders,allZone,Faqs_Data}:any) {
  return (
    <>
    <section className="pt-16 pb-16 relative overflow-hidden">
        <Image src='/images/hero-left.png' alt="hero-left" width={500} height={222} className='absolute top-0 left-[-175px]' />
        <Image src='/images/hero-right.png' alt="hero-left" width={500} height={222} className='absolute top-0 right-[-175px]' />
        <div className="container mx-auto px-4">
            <div >
                <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto">
                    Internet Service Providers in {zipcode} <br/><span className="text-[#ef9831]">{city}, {state}</span>
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
    <Provider_Nav/>
    <section className="my-16">
        <div className="container mx-auto px-4">
            <div className='mb-10'>
                <h2 className="text-2xl font-bold">
                    Home Internet in {zipcode}
                </h2>
            </div>
            <div>
                {
                    allProviders.map((item: any, idx: number) => {
                        return (
                            <>
                                <ProviderCard key={idx} item={item} zone={allZone}  />

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
                    Overview of Internet Service Providers in {city}, {state}, {county}
                </h2>
                <p className='text-xl font-[Roboto] mt-5'>
                    As of the time this page was written, (insert city name) with the population of (insert population) residents has (insert number of listed Internet providers) or more internet service providers offering various types of internet service plans including (list provider’s connection types). (Listed provider 1 and listed provider 2) are the largest providers in the area.
                </p>
            </div>
        </div>
    </section>

    <section className="my-16">
        <div className="container mx-auto px-4">
            <div className='mb-10'>
                <h2 className="text-2xl font-bold">
                    Summary of Internet service providers in  {city}, {state}, {county}
                </h2>
            </div>
            <div>
                <Inter_Service />
            </div>
        </div>
    </section>

    <section className="my-16">
        <div className="container mx-auto px-4">
            <div className='mb-10'>
                <h2 className="text-2xl font-bold">
                    Types of internet Technologies available in {city}, {state}, {county}
                </h2>
                <p className='text-base'>
                    As of the time this page was written, {city} likely have several types of internet technologies available to its residents. These technologies include, (show only listed technologies types in the area)
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                <Technology_Box
                    title="Cable Internet"
                    content="Cable internet uses the coaxial cable infrastructure to provide high-speed internet access. It offers relatively fast and stable internet connections."
                />
            </div>
        </div>
    </section>

    <section className="my-16">
        <div className="container mx-auto px-4">
            <div className='mb-10'>
                <h2 className="text-2xl font-bold">
                    Internet service providers in nearby cities
                </h2>
                <p>
                    As of the time this page was written, {city} likely have several types of internet technologies available to its residents. These technologies include, (show only listed technologies types in the area)
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-5 ">
                <Nearby_City />

            </div>
        </div>
    </section>

    <section className="my-16">
        <div className="container mx-auto px-4 grid gap-10">
            {Faqs_Data?.map((item: any, idx: number) => {
                return <Faqs_Sec key={idx} data={item} city={city} state={state}  />
            })}
        </div>
    </section>
</>
  )
}

export default Zip_Code_Com