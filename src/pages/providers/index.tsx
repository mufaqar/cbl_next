'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'

import { GET_PROVIDERS , GET_ZONE } from '@/config/query'
import { GetStaticProps ,GetServerSideProps} from 'next'

import Image from 'next/image'
import { ProviderCard } from '@/components/provider/provider-card'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Providers({ allProviders , allZone }: any) {
    const params = useParams()

    const {cities, countys, states} = allZone[0];
    console.log();

     var city = cities.nodes[0].name;
     var county = countys.nodes[0].name;
     var state = states.nodes[0].name;


    return (
        <>

            <section className="whole container mx-auto   max-w-full mt-16">
                <div className=" bg-[#e6e6e6] w-full max-wfull">
                    <div>
                        <h1 className=" font-extrabold lg:text-[30px] text- text-center mx-auto text-[#151515] lg:leading-[2.5rem]">Internet providers in {city} : {county} : { state}, Massachusetts</h1>
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



export const getServerSideProps: GetServerSideProps = async ( {query} ) => {

    const {zipcode,type} = query;
   

   

  
    const [providers , zone] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS, variables:{zipcode,type} }),
        apolloClient.query({ query: GET_ZONE , variables:{ztitle:zipcode} })
    ]);
    const allProviders = providers.data.providers.nodes
    const allZone = zone.data.allZone.nodes
    return {
        props: {
            allProviders , allZone
        },
    };
}
