import Main from '@/components/main'
import { ProviderBox } from '@/components/provider/provider-box'
import SearchForm from '@/components/searchform'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Providers({ allProviders }: any) {

    return (
        <>
             <section className="min-h-[40vh]  flex items-center bg-[#215690]">
        <div className="container mx-auto px-4">
          <div >
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10 text-white">
             Find Internet & TV Service Providers in 
             <br /><span className="text-[#ef9831]">your area.</span>
            </h1>
            <p className="text-xl text-center font-[Roboto] my-5 text-white">
              Enter your zip so we can find the best providers in your area:
            </p>
            <div className='grid justify-center'>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Featured Providers
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                            <Link href="/providers/att">  <Image src='/images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    AT&T

                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/spectrum">  <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    SPECTRUM
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/earthlink">  <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    EARTHLINK
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/hughesnet">  <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    HUGHESNET
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Top Internet and TV Service providers
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        {
                            allProviders.map((item: any, idx: number) => {
                                return (
                                    <>
                                        <ProviderBox key={idx} item={item} />

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="text-center">
                        <h2 className='text-3xl font-bold'>
                            Why shop for internet & TV on Allconnect?
                        </h2>
                        <p className='text-base my-5'>
                            Explore popular internet and TV providers we partner with to shop, compare and set up services at home.
                        </p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-8 items-center justify-center'>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/search.svg" alt={'search'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Search plans with ease
                            </h5>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/product-rec.svg" alt={'product-rec'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Compare all your options
                            </h5>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>
                        
                        
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/expert.png" alt={'expert'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Speak to an expert to order by phone
                            </h5>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Providers


export const getStaticProps: GetStaticProps = async () => {
    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),
    ]);
    const allProviders = providers.data.allProviders.nodes;
    return {
        props: {
            allProviders
        },
    };
}