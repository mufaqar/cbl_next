import { gql } from '@apollo/client';

export const GET_ZIPCODE= gql`
query GET_ZIPCODE {
  zones(where: {title: "99929"}) {
    nodes {
      title
      cities {
        nodes {
          name
          slug
        }
      }
      states {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`;

export const GET_ALL_PROVIDERS = gql`
query GET_ALL_PROVIDERS{
  allProviders ( first: 100) {
    nodes {
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      providersInfo {
        proPhone
        proPrice
        proSpeed
        features
        
      }
      
    }
  }
}
`;

export const GET_PROVIDERS = gql`
query GET_PROVIDERS($zipcode: String = "") {
  allProviders(
    where: {metaQuery: {metaArray: {key: "internet_services", value: $zipcode, compare: LIKE}}}
    first:50
  ) {
    nodes {
      title
      slug
      serviceTypes {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      providersInfo {
        proPhone
        proPrice
        proSpeed
        features
        servicesInfo {
          internetServices {
            features
            speed
            summaryFeatures
            summarySpeed
          }
          internetTvBundles {
            channels
            features
            speed
            summaryChannel
            summaryFeatures
            summarySpeed
          }
          tvServices {
            features
            speed
            summaryFeatures
            summarySpeed
          }
        }
      }
      terms {
        edges {
          node {          
            name
            slug
          }
        }
      }
    }
  }
}
`;

export const GET_ZONE = gql`
  query GetZone  ($ztitle:String!) {
    zones(where: {title: $ztitle}) {
      nodes {
        title
      
        cities {
          nodes {
            name
          }
        }
        states {
          nodes {
            name
          }
        }
      }
    }
  }
`;


export const SINGLE_Provider = gql`
query SINGLE_Provider($slug: ID!) {
  singleProvider(id: $slug, idType: URI) {
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    providersInfo {
      proPhone
      proPrice
      proSpeed
      features
      bannerImage {
        mediaItemUrl
      }

      internetAndPhoneBundlesShort
      internetAndTvBundlesShort
      internetPlansShort
      internetTvPhoneBundlesShort
      tvPlansShort
      block {
        
        content
        heading
      }
      cons
      pros
      internetPlans {       
          package
          price
          priceInfo
          speedInfo
          speeds
      }    
      internetTvPhoneBundles {
        channels
        channelsInfo
        package
        price
        priceInfo
        speedInfo
        speeds
        voice
        voiceInfo
      }
      internetAndTvBundles {
          speeds
          speedInfo
          priceInfo
          price
          package
          channelsInfo
          channels
      }
      internetAndPhoneBundles {
        voiceInfo
        voice
        speeds
        speedInfo
        priceInfo
        price
        package
      }
      tvPlans {
        speeds
        speedInfo
        priceInfo
        price
        package
      }
      faqS {
        answer
        question
      }
      featuresBlock {        
        title
        details
        icon
      }

    }
    
  }
}`;

export const CITES = gql`
query CITES {
  zones(
    where: {taxQuery: {taxArray: {taxonomy: CITY, terms: "ketchikan", operator: EXISTS}}}
  ) {
    edges {
      node {
       title
      }
    }
  }
}`;



export const ProviderByCITES = gql`
query ProveryByZipcode {
  allProviders(
    where: {metaQuery: {
      relation: OR,
      metaArray: [
          {
            key: "internet_serices",
            value: "01005"
            compare: LIKE
        
          },
          {
             key: "internet_serices",
            value: "20001"
            compare: LIKE
          }
        ]
      
    }}
  ) {
    edges {
      node {
        title
      }
    }
  }
}`;

export const ZoneByCity = gql`
query ZoneByCity {
  zones {
    nodes {
      title
    }
  }
}`;

export const ALLZoneByCity = gql`
query ALLZoneByCity($city: [String] = "") {
  zones(
    where: {taxQuery: {taxArray: {terms: $city, taxonomy: CITY, operator: EXISTS}}}
    first: 100
  ) {
    nodes {
      title
    }
  }
}`;







export const CITES_by_STATE = gql`
query CITES_by_STATE{
  zones(
    where: {taxQuery: {taxArray: {taxonomy: STATE, terms:"nc", operator: EXISTS}}}
  ) {
    nodes {
      cities {
        nodes {
          name
          slug
        }
      }
    }
  }
}`;

export const GET_ZONE_BY_CITY = gql`
query GET_ZONE_BY_CITY{
  zones(
    where: {taxQuery: {taxArray: {taxonomy: CITY, terms: "ketchikan", operator: EXISTS}}}
  ) {
    edges {
      node {
      title
      slug
      }
    }
  }
}`;



