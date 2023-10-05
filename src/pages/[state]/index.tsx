"use client"
import CityBox from '@/components/city-box';
import apolloClient from '@/config/client';
import { CITES, CITES_by_STATE, ZoneByCity } from '@/config/query';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';



export default function OurState({ allcities, state }: any) {
console.log("🚀 ~ cities", allcities[0].zones.nodes)

  return (
    <>

      <section>
        <div className='container mx-auto px-4 m-10'>
          <div className="mt-20 mb-7">
            <h2 className='text-center text-2xl font-bold'>
              Compare Internet Providers in Major Cities
            </h2>
          </div>
          <div>
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
              {allcities[0].zones.nodes?.map((item: any, id: number) => {
                return <li key={id} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                  <Link href={`${state}/${item.cities.nodes[0].slug}`} className="">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl group-hover:underline">{item.cities.nodes[0].name}</h3>
                      <BsArrowRight strokeWidth="1" className="items-center text-right" />
                    </div>
                   
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </div>
      </section>



    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { state } = query;

  const [cities] = await Promise.all([
    apolloClient.query({ query: CITES_by_STATE ,variables: { state } }),
  ]);
  const allcities = cities.data.states.nodes
  return {
    props: {
      allcities,
      state
    },
  };
}



