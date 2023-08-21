import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { CITES_by_STATE } from '@/config/query';
import Link from 'next/link';

export default function OurState({allZone,allZone2}:any) {
    console.log(allZone2);
  return (
    <>
    <h2>List of Cites </h2>
    <ul>

        {allZone?.map( (item:any , id:number) => {
            return (
                <>
                <li key={id}><Link href={`ae/${item.cities.nodes[0].slug}`}>  { item.cities.nodes[0].name} </Link></li>
                </>
            )

        } )}

    </ul>
    </>
  )
}



// export const getStaticProps: GetStaticProps = async (context) => {
//     const slug = context.params?.slug
//     const response = await apolloClient.query({
//       query: CITES_by_STATE,
//       variables: {
//         slug
//       },
//     });
//     const allZone = response.data.allZone.nodes;
//     const allZone2 = response.data.allZone;
  
//     return {
//       props: {
//         allZone,allZone2
//       },
//     };
//   }
  
//   export const getStaticPaths: GetStaticPaths = async () => {
//     const paths: any = [];
//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   }
  