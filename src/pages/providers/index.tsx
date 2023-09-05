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

function Providers({ allProviders }: any) {
    //console.log("🚀 ~ file: index.tsx:9 ~ Providers ~ allProviders:", allProviders)
    return (
        <>
            <Main />
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className='text-2xl font-bold'>
                            Feature Provider
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-xl font-bold text-center">
                                    AT&T

                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-xl font-bold text-center">
                                    SPECTRUM
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-xl font-bold text-center">
                                    EARTHLINK
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/centurylink">  <Image src='/../images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-xl font-bold text-center">
                                    HUGHESNET
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className='text-2xl font-bold'>
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