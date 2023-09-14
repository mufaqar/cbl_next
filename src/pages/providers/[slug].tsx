'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query'
import { GetStaticProps, GetServerSideProps } from 'next'
import Image from 'next/image'
import SearchForm from '@/components/searchform'
import Link from 'next/link'
import parse from 'html-react-parser';
import React, { useState } from 'react'
import Faqs_Provider from '@/components/faqs_provider'
import PlanBox from '@/components/pricing/planBox'
import IconBox from '@/components/provider/icon-box'
import { GrChannel, GrInstallOption } from 'react-icons/gr'
import { GoDeviceMobile } from 'react-icons/go'
import FeatureBox from '@/components/pricing/featureBox'

export default function SProviders({ Provider, city, state }: any) {
  // console.log("🚀 ~ file: index.tsx:21 ~ SProviders ~ allProviders:", Provider)
  //const params = useParams()

  const provider_name = Provider?.title;
  const pro_phone = Provider?.providersInfo?.proPhone;
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
      <section className='h-full relative bg-white/30'>
        <div className='shape-left'></div>
        <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center pt-24">
          <div className='md:w-1/2 w-full'>
            <Image src={Provider.featuredImage?.node.mediaItemUrl} alt="Feature Image" width={140} height={50} />
            <h1 className="text-3xl md:text-4xl md:leading-normal font-bold text-black mt-4 max-w-lg">
              <span className='text-[#ef9831]'>{provider_name} </span>Internet Plans and Pricing for {currentMonthName}, {currentYear}
            </h1>
            <h2 className="text-xl font-bold text-black my-4">
              Prices starting at <span className='text-[#ef9831]'>{Provider?.providersInfo?.proPrice} </span> mo.
            </h2>
            <div className='features text-black mb-5'>
              {parse(`
                ${Provider?.providersInfo?.features}
              `)}
            </div>
            <Link href={`tel:${pro_phone}`} className="text-base font-medium text-white bg-[#ef9831] hover:bg-[#215690] px-3 py-1.5 rounded-3xl">
              {pro_phone}
            </Link>
          </div>
          <div className='md:w-1/2 w-full h-full'>
            <Image src="/images/banner-bg.jpg" alt="Feature Image" width={1440} height={600} className='object-cover h-full w-full md:hidden block' />
          </div>
        </div>
        <div className={`bg-white px-4 grid md:grid-cols-2 gap-7 items-center md:divide-x-2 divide-gray-300 py-3 shadow-sm border-y border-zinc-400/20  ${nav ? 'md:fixed top-0 left-0 right-0 mt-0' : 'sticky mt-20'
          }`}>
          <div className='md:text-end text-center'>
            <h3 className="md:text-lg text-lg font-bold">
              Call NOW to order {provider_name}            
            <Link href="tel:000-000-000" className='ml-8 bg-[#ef9831] hover:bg-[#215690] text-white md:text-sm text-xs text-center inline-block w-fit font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
              {pro_phone}
            </Link>
            </h3>
          </div>
          <div className='[&>div:nth-child(1)]:mt-0'>
            <SearchForm />
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
            <PlanBox Plans={Provider?.providersInfo?.internetPlans} pro_phone={pro_phone} />
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
              {provider_name} Tv Bundles
            </h2>
          </div>
          <div>
            <PlanBox Plans={Provider?.providersInfo?.tvPlans} pro_phone={pro_phone} />
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
            </p>
          </div>
        </div>
      </section>

      {Provider?.providersInfo?.internetTvPhoneBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet TV Phone Plan
              </h2>
            </div>
            <div>
              <PlanBox Plans={Provider?.providersInfo?.internetTvPhoneBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
              </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetAndTvBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet And Tv Bundles
              </h2>
            </div>
            <div>
              <PlanBox Plans={Provider?.providersInfo?.internetAndTvBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
              </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetAndTvBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet TV and Phone Bundles
              </h2>
            </div>
            <div>
              <PlanBox Plans={Provider?.providersInfo?.internetAndTvBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
              </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetAndTvBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet And TV Bundles
              </h2>
            </div>
            <div>
              <PlanBox Plans={Provider?.providersInfo?.internetAndTvBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
              </p>
            </div>
          </div>
        </section>
      }

   
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              Switch to {provider_name} And Get Benefits You’ll Love
            </h2>
          </div>
          <FeatureBox Plans={Provider?.providersInfo?.featuresBlock} />
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            {Provider?.providersInfo?.block.map((item: any, index: number) => (
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
          <div className='grid md:grid-cols-2 grid-cols-1 props'>
            <div className='bg-gray-200  p-8'>
              <h2 className="text-2xl font-bold mb-4">
                Pros
              </h2>
              {parse(`
                ${Provider?.providersInfo?.pros}
              `)}
            </div>
            <div className='bg-gray-100 p-8'>
              <h2 className="text-2xl font-bold mb-4">
                Cons
              </h2>
              {parse(`
                ${Provider?.providersInfo?.cons}
              `)}
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} FAQ’s
            </h2>
          </div>
          <div className='grid gap-10'>
            <Faqs_Provider faqS={Provider?.providersInfo?.faqS} />
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


