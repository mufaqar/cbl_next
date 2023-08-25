'use client'
import apolloClient from '@/config/client'
import { GET_PROVIDERS, GET_ZONE} from '@/config/query'
import { GetServerSideProps } from 'next'
import { Faqs_Data } from '@/const/exports'
import { useEffect, useState } from 'react'
import Cities_com from '@/components/cities'
import Zip_Code_Com from '@/components/zipcode'




const query = `
query ProveryByZipcode($city: [String] ) {
    zones(
      where: {taxQuery: {taxArray: {taxonomy: CITY, field: SLUG, terms: $city}}}
      first: 1000
    ) {
      nodes {
        title
      }
    }
  }
`;

export default function Providers({ allProviders, zones,zipcode,my_city  }: any) {


    console.log("params:", zipcode);
    var city = zipcode?zones[0].cities?.nodes[0].name:[];
    var county = zipcode?zones[0].countys.nodes[0].name:[];
    var state = zipcode?zones[0].states.nodes[0].name:[];

    const [city_data , set_city_data] = useState();
 

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

              set_city_data(respons.data.zones.nodes);

              console.log("🚀 ~ file: index.tsx:77 ~ fetchData ~ respons:", respons);
  
          }
          fetchData();
    } , []);


    return (

        zipcode? <Zip_Code_Com zipcode={zipcode} city={city}  state={state} county={county} allProviders={allProviders} zones={zones} Faqs_Data={Faqs_Data} />  : <Cities_com my_city={my_city} city_data={city_data} /> 

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
                zones: [],
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
    const zones = zone.data.zones.nodes ;
   
    return {
        props: {
            allProviders, zones , zipcode 
        },
    };
}


