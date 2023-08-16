import { gql } from '@apollo/client';

export const GET_PROVIDERS = gql`
query GET_PROVIDERS ($zipcode:String!) {
  providers(where: {metaQuery: {metaArray: {key: "internet_serices", value: $zipcode, compare: LIKE}}}) {
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
      }
  
    }
  }
}
`;

export const GET_ZONE = gql`
  query GetZone  ($ztitle:String!) {
    allZone(where: {title: $ztitle}) {
      nodes {
        title
        zoneId
        cities {
          nodes {
            name
          }
        }
        countys {
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
  provider(id: $slug, idType: URI) {
    title
  }
}`;
