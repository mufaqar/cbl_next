import Faqs_Sec from '@/components/faqs';
import SearchForm from '@/components/searchform'
import React from 'react'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Image from 'next/image'


export default function Cities_com({ my_city, providers_data , type }: any) {
    const inputString = my_city;
    const parts = inputString.split('-');
    const capitalizedWords: string[] = parts.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
    const city = capitalizedWords.join(' ');

    //console.log("🚀 ~ file: index.tsx:16 ~ Cities_com ~ providers_data:", providers_data)
    return (
        <>
            <section className="pt-16 pb-16 relative overflow-hidden">
                <Image src='/images/hero-left.png' alt="hero-left" width={500} height={222} className='absolute top-0 left-[-175px]' />
                <Image src='/images/hero-right.png' alt="hero-left" width={500} height={222} className='absolute top-0 right-[-175px]' />
                <div className="container mx-auto px-4">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto">
                            Internet Service Providers in <span className="text-[#ef9831]">{city}</span>
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
                            Home Internet in {city}
                        </h2>
                    </div>
                    <div>
                        {
                            providers_data.providers.map((item: any, idx: number) => {
                                return (
                                    <>
                                        <ProviderCard key={idx} item={item} />

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
                            Overview of Internet Service Providers in {city}
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
                            Summary of Internet service providers in  {city}
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
                            Types of internet Technologies available in {city}
                        </h2>
                        <p className='text-base'>
                            As of the time this page was written, {city} likely have several types of internet technologies available to its residents. These technologies include Cable Internet , Satellite TV and Streaming TV
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                        <Technology_Box
                            title="Cable Internet"
                            content="Cable TV uses coaxial cables to deliver television signals to your home. It provides a wide range of channels and is widely available.."
                        />
                        <Technology_Box
                            title="Satellite TV"
                            content=" Satellite TV uses satellite dishes to receive TV signals from satellites in the orbit. Providers like DIRECTV and DISH Network offer satellite TV services, providing access to numerous channels and nationwide coverage."
                        />
                        <Technology_Box
                            title="Streaming TV"
                            content="Streaming TV is delivered over the internet and allows you to watch Live TV, movies, TV shows and other on-demand content or through live streaming. Providers like AT&T TV and various streaming platforms offer streaming TV services."
                        />
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4 grid gap-10">
                    <Faqs_Sec city={city} state="" zipcode="" />
                </div>
            </section>



        </>
    )
}


