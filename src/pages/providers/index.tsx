'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'

import { GET_PROVIDERS , GET_ZONE } from '@/config/query'
import { GetStaticProps } from 'next'

import Image from 'next/image'
import { ProviderCard } from '@/components/provider/provider-card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Providers({ allProviders , allZone }: any) {
    const params = useParams()
    console.log(params);
    return (
        <>

        <Header />
            <section className="whole container mx-auto   max-w-full">
                <div className=" bg-[#e6e6e6] w-full max-wfull">
                    <div>
                        <h1 className=" font-extrabold lg:text-[30px] text- text-center mx-auto text-[#151515] lg:leading-[2.5rem]">Internet providers in Agawam Town, Massachusetts</h1>
                    </div>

                    {
                        allProviders.map((item: any, idx: number) => {
                            return (

                                <>
                                    <ProviderCard item={item} zone={allZone} />

                                </>
                            )


                        }
                        )
                    }

                </div>









            </section >

            <Footer />

        </>

    );
}



export const getStaticProps: GetStaticProps = async ({ params } ) => {
   

   

  
    const [providers , zone] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS, variables:{zipcode:"15401"} }),
        apolloClient.query({ query: GET_ZONE })
    ]);
    const allProviders = providers.data.providers.nodes
    const allZone = zone.data.allZone.nodes
    return {
        props: {
            allProviders , allZone
        },
    };
}
