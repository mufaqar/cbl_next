import Main from '@/components/main'
import { ProviderBox } from '@/components/provider/provider-box'
import { ProviderCard } from '@/components/provider/provider-card'
import SearchForm from '@/components/searchform'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Providers({ allProviders }: any) {
    //console.log("🚀 ~ file: index.tsx:9 ~ Providers ~ allProviders:", allProviders)
    return (
        <>
            <Main />
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Feature Provider
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    AT&T

                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    SPECTRUM
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    EARTHLINK
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
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
                    <div className='flex md:flex-row flex-col gap-5 items-center'>
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
                            <Image src="/images/shopping-cart.svg" alt={'hopping-cart'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Order on our one-stop online shop
                            </h5>
                        </div>
                        <div>
                            <span className='text-sm block w-fit border-2 border-gray-400 rounded-full py-2 px-3 text-gray-500'>
                                or
                            </span>
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

            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="flex md:flex-row flex-col gap-7 md:justify-between justify-center items-center">
                        <h2 className='text-3xl font-bold'>
                            What to read next
                        </h2>
                        <Link href="#" className='px-5 py-2 text-base text-center block bg-[#ef9831] hover:bg-[#215690] text-white w-fit'>
                            Read more
                        </Link>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10 pt-10 border-t '>
                        <Link href="#">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="technology" className="rounded-tr-lg rounded-tl-lg" />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard                      —  6 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="technology" className="rounded-tr-lg rounded-tl-lg" />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard                      —  6 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="technology" className="rounded-tr-lg rounded-tl-lg" />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard                      —  6 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Providers


export const getServerSideProps: GetServerSideProps = async () => {

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