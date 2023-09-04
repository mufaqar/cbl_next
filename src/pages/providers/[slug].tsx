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
import Pricing_Plan from '@/components/provider/pricing-plan'
import parse from 'html-react-parser';
//import { Faqs_Data } from '@/const/exports'
import React, { useState } from 'react'

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
              {provider_name} Internet Plans  {parse(``)}  </h2>
          </div>
          <div>
            <Pricing_Plan internetPlans={Provider?.providersInfo?.internetPlans}  />
             
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
              {provider_name} Fusion Internet Plans
            </h2>
          </div>
          <div>
            <Pricing_Plan />
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
              {provider_name} Fusion plans combines satellite and wireless technologies to give you low latency internet connection and deliver a faster, more responsive Internet experience which makes it easy to perform activities that are nearly impossible over a normal satellite internet connection e.g Online meetings, streaming and video gaming.
            </h2>
          </div>
          <div className=" w-full lg:max-w-[1200px] mx-auto py-4 h-auto rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <div className="bg-white w-full h-auto grid md:grid-cols-3 pt-4 pb-4">
              <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                <div>
                  <p className="text-center text-base mt-2">
                    Best {provider_name} deals
                  </p>
                </div>
              </div>
              <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                <div>
                  <p className="text-center text-base mt-2">
                    $25 off for 12 months, Get a $100 prepaid mastercard via Rebate
                  </p>
                </div>
              </div>
              <div className="grid justify-center p-5">
                <div>
                  <Link href="tel:000-000-000" className="text-base text-[#ef9831] hover:text-[#215690] font-[Roboto] font-medium uppercase px-5 py-2.5">
                    000-000-0000
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Business Internet Plans
            </h2>
          </div>
          <div>
            <Pricing_Plan />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 12 months. Offer not valid on 50 GB plan. New business subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Business fusion Internet Plans
            </h2>
          </div>
          <div>
            <Pricing_Plan />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              {provider_name} for Business provides a reliable and secure connection that gives you instant access to the critical business information and applications you need, email, point of sale system, file sharing, online videos and more. It is available wherever your business is located even if you are located beyond the reach of DSL, Cable and Fiber.
            </h2>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} Voice Plans
            </h2>
          </div>
          <div>
            <Pricing_Plan />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Save $20 off on Voice with commitment plan. New residential subscribers only, Limited-time offer. Other terms may apply.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              {provider_name} Voice uses advanced Voice-over-IP (VoIP) technology to deliver home phone service over satellite internet connection. All voice plans offers unlimited local and long distance calling to US and Canada. {provider_name} Voice provides a range of features like caller ID, Voicemail, Call waiting, Call forwarding and Enhanced 911 service.
            </h2>
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
 

