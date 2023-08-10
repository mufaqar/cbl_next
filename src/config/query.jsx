import { gql } from '@apollo/client';

export const GET_PROVIDERS = gql`
query GET_PROVIDERS ($zipcode:String!) {
  providers(where: {metaQuery: {metaArray: {key: "internet_serices", value: $zipcode, compare: LIKE}}}) {
    nodes {
      title
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
