'use client'
import apolloClient from '@/config/client'
import { GET_PROVIDERS, GET_ZONE, SINGLE_Provider } from '@/config/query'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { ProviderCard } from '@/components/provider/provider-card'

import SearchForm from '@/components/searchform'
import Provider_Nav from '@/components/provider/provider-nav'
import Inter_Service from '@/components/provider/inter-service'
import Technology_Box from '@/components/provider/technology-box'
import Nearby_City from '@/components/provider/nearby-city'
import Faqs_Sec from '@/components/faqs'
import { Faqs_Data } from '@/const/exports'
import { useEffect } from 'react'
import Cities_com from '@/components/cities'
import Zip_Code_Com from '@/components/zipcode'





const query = `
query ProveryByZipcode($city: [String] ) {
    allZone(
      where: {taxQuery: {taxArray: {taxonomy: CITY, field: SLUG, terms: $city}}}
      first: 1000
    ) {
      nodes {
        title
      }
    }
  }
`;

export default function Providers({ allProviders, allZone,zipcode,my_city , provider }: any) {


    console.log("params:", zipcode);
    var city = zipcode?allZone[0].cities?.nodes[0].name:[];
    var county = zipcode?allZone[0].countys.nodes[0].name:[];
    var state = zipcode?allZone[0].states.nodes[0].name:[];
 

    useEffect( () => {

        const variables = {
            city:my_city // Replace with the actual user ID
          };     

           async function fetchData() {          

            const response = await fetch('http://cblproject.aspactglobal.com/graphql', {
                method: 'POST',               
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query , variables }),
              });
              const respons = await response.json();  
              console.log("🚀 ~ file: index.tsx:77 ~ fetchData ~ respons:", respons);
  
          }
          fetchData();
    })


    return (

        zipcode? <Zip_Code_Com zipcode={zipcode} city={city}  state={state} county={county} allProviders={allProviders} allZone={allZone} Faqs_Data={Faqs_Data} />  : <Cities_com my_city={my_city} /> 

    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { zipcode, type } = query;
    //console.log("🚀 ~ file: index.tsx:206 ~ constgetServerSideProps:GetServerSideProps= ~ query:", query)

    // Check if zipcode exists before executing the queries
    if (!zipcode) { 


        return {
            props: {
                allProviders: [],
                allZone: [],
                zipcode: null,
                my_city : query.city,
                
             
               
            },
        };
    }

    const [providers, zone] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS, variables: { zipcode, type } }),
        apolloClient.query({ query: GET_ZONE, variables: { ztitle: zipcode } })
    ]) ;
    const allProviders = providers.data.providers.nodes ;
    const allZone = zone.data.allZone.nodes ;
   
    return {
        props: {
            allProviders, allZone , zipcode 
        },
    };
}


