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
import TV_Plan from '@/components/pricing/tv_plan'
import InternetPhonePlanBox from '@/components/pricing/internetPhonePlanBox'
import InternetTVPlanBox from '@/components/pricing/internetTVPlanBox'
import InternetTVPhonePlanBox from '@/components/pricing/internetTVPhonePlanBox'
import { BiPhone } from 'react-icons/bi'

export default function SProviders({ Provider, city, state }: any) {
 //console.log("🚀 ~ file: index.tsx:21 ~ SProviders ~ allProviders:", Provider)
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
    if (window.scrollY >= 650) {
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
      <section className='relative bg-[#F3FAFF]'>
        <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center">
          <div className='md:w-1/2 w-full py-10'>
            <Image src={Provider.featuredImage?.node.mediaItemUrl} alt="Feature Image" width={140} height={50} />
            <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-black">
              <span className='text-[#ef9831]'>{provider_name} </span>Internet Plans and Pricing for {currentMonthName}, {currentYear}
            </h1>
            
            <div className='features text-black mb-5'>
            {parse(`${Provider?.providersInfo?.features}`)}
            </div>
            <h5 className='text-2xl font-bold text-black'>
              {provider_name} Internet
            </h5>
            <h2 className="md:text-6xl text-3xl font-extrabold text-black my-4 flex items-start">
              <span className='md:text-3xl text-base'>$</span>
              {Provider?.providersInfo?.proPrice}<span className='grid'> <span className='md:text-3xl text-base'><sub>/mo</sub></span> <span className='text-base'>for 12 mos</span></span>
            </h2>
            <Link href={`tel:${pro_phone}`} className="md:text-3xl text-base font-bold text-black flex items-center gap-3 mb-4">
              <BiPhone /> {pro_phone}
            </Link>
            <span className='text-xs font-light text-black'>
              Wireless speeds may vary.
            </span>
          </div>
          <div className='md:w-1/2 w-full'>
            <Image src="/images/slug-bg.png" alt="Feature Image" width={1200} height={1626} className='object-cover w-full h-full' />
          </div>
        </div>
      </section>

      <section className={`bg-[#215690] px-4 grid md:grid-cols-2 gap-7 items-center md:divide-x-2 divide-gray-300 py-5 shadow-sm border-y border-zinc-400/20  ${nav ? 'md:fixed bottom-0 left-0 right-0' : 'sticky'
        }`}>
        <div className='md:text-center text-center max-w-xs ml-auto'>
          <h3 className="md:text-2xl text-lg font-extrabold text-white mb-2">
            Call NOW to order {provider_name}
          </h3>
          <Link href="tel:000-000-000" className='ml-8 bg-[#ef9831] hover:bg-white hover:text-[#215690] text-white md:text-xl text-base text-center inline-block w-fit font-medium font-[Roboto] md:px-10 px-5 py-1.5 rounded-3xl'>
            {pro_phone}
          </Link>
        </div>
        <div className='[&>div:nth-child(1)]:mt-0'>
          <SearchForm />
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
              {provider_name} TV Plans
            </h2>
          </div>
          <div>
            <TV_Plan Plans={Provider?.providersInfo?.tvPlans} pro_phone={pro_phone} />
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
                {provider_name}  Internet and Phone Bundles
              </h2>
            </div>
            <div>
              <InternetPhonePlanBox Plans={Provider?.providersInfo?.internetAndPhoneBundles} pro_phone={pro_phone} />
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
              <InternetTVPlanBox Plans={Provider?.providersInfo?.internetAndTvBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                *Price shown is with $25 off for 6 or 12 months. Service plan availability varies based on geographical area. New residential subscribers only, Limited-time offer. Other terms may apply. Service plans require a 24-month commitment.
              </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetTvPhoneBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name} Internet, TV & Phone Bundles
              </h2>
            </div>
            <div>
              <InternetTVPhonePlanBox Plans={Provider?.providersInfo?.internetTvPhoneBundles} pro_phone={pro_phone} />
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
      <section className="mt-16">
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
      <section className="mt-8">
        <div className="container mx-auto px-4">

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


