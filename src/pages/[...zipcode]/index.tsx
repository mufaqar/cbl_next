import apolloClient from '@/config/client'
import { CITES_by_STATE, GET_PROVIDERS, GET_PROVIDERS_CITY } from '@/config/query'
import { GetServerSideProps } from 'next'
import { Get_State_by_Multi_Zipcode } from '../../utils/get_states_by_multizipcode'
import ZipCodeModule from '@/components/zipcode'
import CitiesModule from '@/components/cities'
import StateModule from '@/components/state'

export default function Providers({ ZipData, StateData, CityData, zipcode, allcities, state, type }: any) {

  // state pages
  if (CityData?.providers?.length > 0) {
    return (
      <CitiesModule city={allcities} my_city="" allProviders={CityData.providers} type="internet" />
    )
  }
  // city pages 
  if (StateData?.providers?.length > 0) {
    return (
      <StateModule state={state} allcities={allcities} allProviders={StateData.providers} type="internet" />
    )
  }
  // zipcode pages 
  return (
    <ZipCodeModule zipcode={zipcode} city="" state="" allProviders={ZipData} zones="" type={type} />
  );
}



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  var query_state = query?.zipcode?.[0]?.replace("local-", '')?.replace("-by-zip", '') || ''
  var query_zipcode = query?.zipcode?.[1]?.replace("zip-", '')

  if (query_state?.length <= 3 && query_state !== "tv") {
    // For City Module
    if (query_zipcode && !query?.zipcode?.[1]?.includes('zip-')) {
      const [cityproviders] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS_CITY, variables: { city: query_zipcode } })
      ]);
      const providers_city_data = cityproviders.data.zones.nodes;
      if (providers_city_data?.length <= 0) {
        return {
          notFound: true,
        };
      }
      const providers_data = await Get_State_by_Multi_Zipcode(providers_city_data);
      return {
        props: {
          CityData: providers_data
        },
      };
    }
    // For State Module
    try {
      const response_city = await fetch(`https://cblproject.cablemovers.net/wp-json/custom/v1/area-zones?state=${query_state}`);
      const providers_state_data = await response_city.json();
      if (providers_state_data?.data?.status === 404) {
        return {
          notFound: true,
        };
      }
      const providers_data = await Get_State_by_Multi_Zipcode(providers_state_data);
      const [cities]: any = await Promise.all([
        apolloClient.query({ query: CITES_by_STATE, variables: { state: query_state } }),
      ]);
      var allcities = cities.data.states.nodes;
      if (providers_data?.providers?.length > 0) {
        return {
          props: {
            StateData: providers_data,
            allcities,
            state: query_state,
          },
        };
      }
    } catch (error) {
      throw new Error('Failed!');
    }
  }


  // Provider By Zipcode
  const [providers] = await Promise.all([
    apolloClient.query({ query: GET_PROVIDERS, variables: { terms: query_state, value: query_zipcode } })
  ]);
  const allProviders = providers.data.allProviders.nodes;
  console.log('Zip Module', allProviders)
  // Redirect To Page Not Found 
  if (allProviders?.length <= 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ZipData: allProviders,
      zipcode: query_zipcode,
      type: query_state
    },
  };

}


