import { gql } from '@apollo/client';





export const GET_ZIPCODE= gql`
query GET_ZIPCODE {
  allZone(where: {title: "99929"}) {
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
     
  
    }
  }
}
`;

export const GET_ZONE = gql`
  query GetZone  ($ztitle:String!) {
    allZone(where: {title: $ztitle}) {
      nodes {
        title
      
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

export const CITES = gql`
query CITES {
  allZone(
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
  providers(
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
  allZone {
    nodes {
      title
    }
  }
}`;

export const CITES_by_STATE = gql`
query CITES_by_STATE{
  allZone(
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
