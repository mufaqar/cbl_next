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

export const GET_PROVIDERS = gql`
query GET_PROVIDERS($value: String = "") {
  allProviders(
    where: {metaQuery: {metaArray: {key: "internet_services", value: $value, compare: LIKE}}}
  ) {
    nodes {
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
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

export const CITES_by_STATE = gql`
query CITES_by_STATE{
  zones(
    where: {taxQuery: {taxArray: {taxonomy: STATE, terms:"nc", operator: EXISTS}}}
  ) {
    nodes {
      cities {
        nodes {
          name
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
      }
    }
  }
}`;



