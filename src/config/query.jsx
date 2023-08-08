import { gql } from '@apollo/client';

export const GET_PROVIDERS = gql`
query GET_PROVIDERS {
  posts(
    where: {
      metaQuery: {
       metaArray: { key: "internet_serices", compare: LIKE, value: "15401"}
      }
    }
  ) {
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
