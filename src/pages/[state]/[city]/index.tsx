'use client'
import apolloClient from '@/config/client'
import { ALLZoneByCity, GET_PROVIDERS, GET_ZONE } from '@/config/query'
import { GetServerSideProps } from 'next'

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

export default function Providers({ allProviders, zones, zipcode, my_city, providers_data }: any) {
   var city = zipcode ? zones[0].cities?.nodes[0].name : [];
  var state = zipcode ? zones[0].states.nodes[0].name : [];
  const [city_data, set_city_data] = useState();
  useEffect(() => {
    const variables = {
      city: my_city 
    };

    async function fetchData() {
      const response = await fetch('https://cblproject.cablemovers.net/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });
      const respons = await response.json();
      set_city_data(respons.data.zones.nodes);

    }
    fetchData();
  }, []);


  return (
    zipcode ? <Zip_Code_Com zipcode={zipcode} city={city} state={state} allProviders={allProviders} zones={zones} type='internet' /> : <Cities_com city={city}  my_city={my_city} city_data={city_data} allProviders={allProviders} type="internet" />

  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { zipcode, type, city , state } = query;
  const [city_zone] = await Promise.all([
    apolloClient.query({ query: ALLZoneByCity, variables: { city } }),

  ]);
  const allCityZone = city_zone.data.zones.nodes;
  const zones_list_arr = allCityZone.map((item: any) => { return (item.title) });
  const resultString = zones_list_arr.join(',');
  const All_zones_list = resultString.replace(/["\[\]]/g, '');

  const response_data = await fetch(`https://cblproject.cablemovers.net/wp-json/custom/v1/providers?internet_services=${All_zones_list}`);
  const providers_data = await response_data.json();
  

  // Check if zipcode exists before executing the queries
  if (!zipcode) {
    return {
      props: {
       
        zones: [],
        zipcode: null,
        my_city: query.city,
       allProviders: providers_data.providers
      },
    };
  }

  const [providers, zone] = await Promise.all([
    apolloClient.query({ query: GET_PROVIDERS, variables: { zipcode, type } }),
    apolloClient.query({ query: GET_ZONE, variables: { ztitle: zipcode } })
  ]);
  const allProviders = providers.data.allProviders.nodes;
  const filterProvider = allProviders.filter((item:any) => item.terms.edges.some((i:any) => i.node.slug === type))
  const zones = zone.data.zones.nodes;
  return {
    props: {
      allProviders:filterProvider, zones, zipcode
    },
  };
}


