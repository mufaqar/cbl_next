import { gql } from '@apollo/client';

export const GET_PROVIDERS = gql`
query GET_PROVIDERS ($zipcode:String!) {
  providers(where: {metaQuery: {metaArray: {key: "internet_serices", value: $zipcode, compare: LIKE}}}) {
    nodes {
      title
  
    }
  }
}
`;

export const GET_ZONE = gql`
  query GetZone {
    allZone {
      nodes {
        title
      }
    }
  }
`;
