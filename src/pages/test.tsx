"use client"
import apolloClient from '@/config/client';
import { CITES, CITES_by_STATE, ZoneByCity } from '@/config/query';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'



export default function OurStateTest() {

  return (
    <>
    <h2>State Page  List of Cites </h2>
    <ul>

        {/* {zones?.map( (item:any , id:number) => {
            return (
                <>
                <li key={id}><Link href={`ae/${item.cities.nodes[0].slug}`}>  { item.cities.nodes[0].name} </Link></li>
                </>
            )

        } )} */}

    </ul>
    </>
  )
}




export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const [zone] = await Promise.all([
      apolloClient.query({ query: CITES}),
  
  ]);

  const Data = zone.data
  return {
      props: {
        Data 
      },
  };
}



