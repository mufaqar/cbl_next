import Brands from '@/components/brands';
import CityBox from '@/components/city-box';
import Main from '@/components/main';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Why_ChooseUs from '@/components/why-choose-us';
import Link from 'next/link';
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { gql, useQuery } from '@apollo/client';

const query = `
query zones($zipcode: String = "") {
   zones(where: {title: $zipcode}) {
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



export default function Home() {


   return (

      <>
         <Main />
         <section className="pb-10 md:-mt-11 bg-[#F3FAFF]">
            <div className="container mx-auto px-4 relative grid gap-5 md:grid-cols-3">
               <ServiceBox
                  img="/images/laptopIcon.svg"
                  title="Compare Top Providers"
                  content="Don’t pay for more than you need! Use our Internet Speed Calculator to determine the best internet speed for your lifestyle."
                  link="#"
               />
               <ServiceBox
                  img="/images/compareIcon.svg"
                  title="Compare Top Providers"
                  content="Don’t pay for more than you need! Use our Internet Speed Calculator to determine the best internet speed for your lifestyle."
                  link="#"
               />
               <ServiceBox
                  img="/images/meterIcon.svg"
                  title="Compare Top Providers"
                  content="Don’t pay for more than you need! Use our Internet Speed Calculator to determine the best internet speed for your lifestyle."
                  link="#"
               />
            </div>
         </section>

         <section>
            <div className='container mx-auto px-4 mt-10'>
               <div className="mt-20 mb-7">
                  <h2 className='text-center text-2xl font-bold'>
                     Compare Internet Providers in Major Cities
                  </h2>
               </div>
               <div>
                  <CityBox />
               </div>
            </div>
         </section>

         <section className='md:my-40 my-10'>
            <div className='container mx-auto px-4 mt-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
               <div className="">
                  <h2 className='text-3xl font-bold'>
                     Enter your zip code to find providers and plans in your area.
                  </h2>
               </div>
               <div>
               <SearchForm />
               </div>
            </div>
         </section>

         <section className="flex md:flex-row flex-col bg-gradient-to-r from-white via-white to-[#F3FAFF]">
            <div className='flex md:flex-row flex-col container mx-auto px-4 gap-7 items-center'>
               <div className="md:w-5/12 w-full">
                  <h2 className="text-2xl font-bold">
                     Review Top Providers
                  </h2>
                  <p className="text-base font-[Roboto] my-3">
                     Let us help you sift through the noise by comparing the top providers near you. Find high-speed options for internet, TV, or bundles that meet your needs.
                  </p>
                  <Link href="https://www.highspeedoptions.com/disclosure" className="text-[#215690] font-[Roboto] ">
                     View All Providers
                  </Link>
               </div>
               <div className="md:w-7/12 w-full">
                  <div className='rounded-l-[90px] bg-[#F3FAFF] py-20 px-5'>
                     <Brands />
                  </div>
               </div>
            </div>
         </section>
         <Why_ChooseUs />
      </>

   );
}
