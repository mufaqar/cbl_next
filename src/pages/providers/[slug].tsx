'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'

import { GET_PROVIDERS, GET_ZONE, SINGLE_Provider } from '@/config/query'
import { GetStaticProps, GetServerSideProps } from 'next'

import Image from 'next/image'
import { ProviderCard } from '@/components/provider/provider-card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SearchForm from '@/components/searchform'
import Provider_Nav from '@/components/provider/provider-nav'
import Inter_Service from '@/components/provider/inter-service'
import Technology_Box from '@/components/provider/technology-box'
import Nearby_City from '@/components/provider/nearby-city'
import Faqs_Sec from '@/components/faqs'
import Link from 'next/link'
import Pricing_Plan from '@/components/pricing/internet-plan'
import parse from 'html-react-parser';
//import { Faqs_Data } from '@/const/exports'
import React, { useState } from 'react'
import TV_Plan from '@/components/pricing/tv_plan'
import InternetTvPhonePlan from '@/components/pricing/internet-tv-phone-plan'
import InternetPlans from '@/components/pricing/internet-plan'
import InternetTVPlans from '@/components/pricing/internet-tv-plans'

export default function SProviders({ Provider , city , state}: any) {
   // console.log("🚀 ~ file: index.tsx:21 ~ SProviders ~ allProviders:", Provider)
    //const params = useParams()

    const provider_name = Provider?.title;

    const [nav, setNav] = useState(false);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthNumber = currentMonthIndex + 1;

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const currentMonthName = monthNames[currentMonthIndex];

    const changeBackground = () => {
      if (window.scrollY >= 350) {
        setNav(true);
      }
      else {
        setNav(false);
      }
    }
    if (typeof window !== "undefined") {
  
      window.addEventListener('scroll', changeBackground);
  
    }
  
 
  return (
    <>
      <section className="pt-16 pb-16 bg-[url('/images/deals_desktop.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7 items-center">
          <div className='col-span-2'>
          <img src={Provider.featuredImage?.node.mediaItemUrl} alt="Logo" className="mb-5" />
            <h1 className="sm:text-3xl text-2xl font-bold">
              {provider_name} Internet plans and pricing for ({currentYear}, {currentMonthName})
            </h1>
            <h2 className="text-xl font-bold my-3">
              Prices starting at {Provider?.providersInfo?.proPrice} mo.
            </h2>
              {parse(`
                ${Provider?.providersInfo?.features}
              `)}
          </div>
          <div>
            <img src="/images/internet.jpg" alt="logo" className='w-3/4 rounded-lg' />
          </div>
        </div>
      </section>

      <section className='md:my-32 my-10'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
          <div className="">
            <h2 className='text-3xl font-bold'>
              Enter your zip code below to find out if {provider_name} is available in your area.
            </h2>
          </div>
          <div>
            <SearchForm />
          </div>
        </div>
      </section>

      <section className={`bg-white py-3 shadow-sm border-y border-zinc-400/20  ${nav ? 'fixed top-0 left-0 right-0' : 'sticky'
        }`}>
        <div className="container mx-auto px-4 grid grid-cols-2 items-center">
          <div>
            <h3 className="md:text-2xl text-lg font-bold">
              Call NOW to order {provider_name}
            </h3>
          </div>
          <div className='text-end'>
            <Link href="tel:000-000-000" className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-fit font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
              000-000-000
            </Link>
          </div>

        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Internet Plans</h2>
          </div>
          <div>
            <InternetPlans internetPlans={Provider?.providersInfo?.internetPlans}  />             
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Offer not valid on 15 GB plan. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Tv Bundles 123
            </h2>
          </div>
          <div>
          
            <TV_Plan Plans={Provider?.providersInfo?.tvPlans}  />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>


      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name}  Internet TV Phone Plan
            </h2>
          </div>
          <div>
            <InternetTvPhonePlan Plans={Provider?.providersInfo?.internetTvPhoneBundles}  />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name}  Internet And Tv Bundles
            </h2>
          </div>
          <div>
            <InternetTVPlans Plans={Provider?.providersInfo?.internetAndTvBundles}  />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name}  Internet TV and Phone Bundles
            </h2>
          </div>
          <div>
            <InternetTvPhonePlan internetPlans={Provider?.providersInfo?.internetAndTvBundles}  />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name}  Internet And TV Bundles
            </h2>
          </div>
          <div>
            <InternetTvPhonePlan internetPlans={Provider?.providersInfo?.internetAndTvBundles}  />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>


     
      <section className='md:py-32 py-10 bg-[#F3FAFF]'>
        <div className='container mx-auto px-4 grid gap-5 items-center'>
          <div className="">
            <h2 className='text-3xl font-bold text-center'>
              Find out if {provider_name} is available in your area
            </h2>
          </div>
          <div className="w-fit mx-auto py-5 mt-6 bg-white shadow-xl border md:h-52 rounded-3xl">
            <SearchForm />

          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
          {Provider?.providersInfo?.block.map((item:any , index:number) => (
                                <div key={index}>
                                  <h2 className='block_heading'>{parse(`${item.heading} `)} </h2>
                                  
                                  <div className='block_content'>{parse(`${item.content} `)}</div> </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Internet Pros and Cons
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>
              {provider_name} is a valuable choice for individuals and businesses seeking high speed internet connectivity especially in the rural and remote area. Here are some of the pros and cons of {provider_name}.
            </p>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
            <div>
              <h2 className="text-2xl font-bold">
                Pros
              </h2>
              {parse(`
                ${Provider?.providersInfo?.pros}
              `)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Cons
              </h2>
              {parse(`
                ${Provider?.providersInfo?.cons}
              `)}
            </div>
          </div>
        </div>
      </section >
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} FAQ’s
            </h2>
          </div>
          <div className='grid gap-10'>           
              <Faqs_Sec city={provider_name} state={state}  />        
          </div>
        </div>
      </section>
    </>
  )
}
     

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { slug } = query;
    const [providers] = await Promise.all([
        apolloClient.query({ query: SINGLE_Provider, variables: { slug } }),     
    ]);
    const Provider = providers.data.singleProvider; 
    return {
        props: {
          Provider
        },
    };
}
 

