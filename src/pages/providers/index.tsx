import Main from '@/components/main'
import { ProviderCard } from '@/components/provider/provider-card'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetServerSideProps, GetStaticProps } from 'next'
import React from 'react'

function Providers({allProviders}:any) {
  console.log("🚀 ~ file: index.tsx:9 ~ Providers ~ allProviders:", allProviders)
  return (
    <>
    {/* <Main /> */}

    <section className="my-16">
        <div className="container mx-auto px-4">
            <div className='mb-10'>
                <h2 className="text-2xl font-bold">
                    Providers
                </h2>
            </div>
            <div>
                {
                    allProviders.map((item: any, idx: number) => {
                        return (
                            <>
                                <ProviderCard key={idx} item={item} zone=""  />

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
    </>
  )
}

export default Providers



export const GetServerSideProps: GetServerSideProps = async () => {  

    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),     
    ]) ;
    const allProviders = providers.data.allProviders.nodes;
    return {
        props: {
            allProviders
        },
    };
}


