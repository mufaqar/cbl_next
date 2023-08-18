import React from 'react'
import { gql } from '@apollo/client';

import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { CITES } from '@/config/query';
import Link from 'next/link';

export default function OurCities({allZone}:any) {
    //console.log(allZone2);
  return (
    <>
    <h2>City</h2>
    <ul>

        {allZone?.map( (item:any , id:number) => {
            return (
                <>
                <li key={id}> <Link href="#"> { item.node.title}</Link></li>
                </>
            )

        } )}

    </ul>
    </>
  )
}



export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug
    const response = await apolloClient.query({
      query: CITES,
      variables: {
        slug
      },
    });
    const allZone = response.data.allZone.edges;
    console.log(allZone);

    //var like = LIKE;

    

  //   const mappedTitles = allZone?.map((item:any) => {
  //       return {  key: "internet_serices",value: item.node.title, compare: `${like}` }; 
  //     });
      
  //  //console.log(mappedTitles); // Display the array of extracted titles



      
    //         const ProviderByCITES = `
    //         query ProveryByZipcode {
    //         providers(
    //             where: {metaQuery: {
    //             relation: OR,
    //             metaArray: ${JSON.stringify(mappedTitles)}
                
    //             }}
    //         ) {
    //             edges {
    //             node {
    //                 title
    //             }
    //             }
    //         }
    //         }`;

    // const ProviderByCITES_Query = gql`query ProveryByZipcode {
    //     providers(
    //       where: {metaQuery: {
    //         relation: OR,
    //         metaArray: ${JSON.stringify(mappedTitles)}
            
    //       }}
    //     ) {
    //       edges {
    //         node {
    //           title
    //         }
    //       }
    //     }
    //   }`;


//     const response_city = await apolloClient.query({
//         query: ProviderByCITES_Query
//       });
//       const All_Providers_City = response_city.data;


//  console.log("-------------",All_Providers_City);



     

      
 
  
    return {
      props: {
        allZone
      },
    };
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths: any = [];
    return {
      paths,
      fallback: 'blocking',
    };
  }

  