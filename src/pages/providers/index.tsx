'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'

import { GET_PROVIDERS, GET_ZONE } from '@/config/query'
import { GetStaticProps, GetServerSideProps } from 'next'

import Image from 'next/image'
import { ProviderCard } from '@/components/provider/provider-card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SearchForm from '@/components/searchform'
import Provider_Nav from '@/components/provider/provider-nav'
import Inter_Service from '@/components/provider/inter-service'
import Technology_Box from '@/components/provider/technology-box'
import Nearby_City from '@/components/provider/nearby-city'
import Faqs_Sec from '@/components/faqs'
import { Faqs_Data } from '@/const/exports'

export default function Providers({ allProviders, allZone }: any) {
    const params = useParams()

    const { cities, countys, states } = allZone[0];
    console.log();

    var city = cities.nodes[0].name;
    var county = countys.nodes[0].name;
    var state = states.nodes[0].name;


    return (
        <>
            <section className="pt-16 pb-16 relative overflow-hidden">
                <Image src='/images/hero-left.png' alt="hero-left" width={500} height={222} className='absolute top-0 left-[-175px]' />
                <Image src='/images/hero-right.png' alt="hero-left" width={500} height={222} className='absolute top-0 right-[-175px]' />
                <div className="container mx-auto px-4">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[770px] mx-auto">
                            Internet Providers in <span className="text-[#ef9831]">{city}, {state}, {county} </span>
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
                            Home Internet in 32714
                        </h2>
                    </div>
                    <div>
                        {
                            allProviders.map((item: any, idx: number) => {
                                return (
                                    <>
                                        <ProviderCard key={idx} item={item} zone={allZone} />

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
                            As of the time this page was written, (insert city name) likely have several types of internet technologies available to its residents. These technologies include, (show only listed technologies types in the area)
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
                            As of the time this page was written, (insert city name) likely have several types of internet technologies available to its residents. These technologies include, (show only listed technologies types in the area)
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
                        return <Faqs_Sec key={idx} data={item} />
                    })}
                </div>
            </section>
        </>

    );
}



export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { zipcode, type } = query;





    const [providers, zone] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS, variables: { zipcode, type } }),
        apolloClient.query({ query: GET_ZONE, variables: { ztitle: zipcode } })
    ]);
    const allProviders = providers.data.providers.nodes
    const allZone = zone.data.allZone.nodes
    return {
        props: {
            allProviders, allZone
        },
    };
}
