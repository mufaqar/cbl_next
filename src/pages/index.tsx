

import CityBox from '@/components/city-box';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Why_ChooseUs from '@/components/why-choose-us';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { HiOutlineSearchCircle, HiOutlineShoppingCart } from 'react-icons/hi'
import { BiGitCompare } from 'react-icons/bi'
import Image from 'next/image';
import { LuPhoneCall } from 'react-icons/lu'
import { AllPosts } from '@/config/query';
import { GetServerSideProps } from 'next';
import apolloClient from '@/config/client';
import Blogpost from '@/components/blogpost';
import Head from 'next/head';


export default function Home({ BlogPosts }: any) {


   return (
      <>
      <Head>
        <title>Cable Movers - Find Top Internet and TV Service providers</title>
        <meta name="description" content="Find Internet & TV Service Providers In Your Area" />
        <link rel="canonical" href="https://www.cablemovers.net" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Find Top Internet and TV Service providers" />
        <meta property="og:url" content="https://www.cablemovers.net" />
        <meta property="og:site_name" content="Find Top Internet and TV Service providers" />
        <meta property="article:publisher" content="https://www.facebook.com/cablemovers" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://www.cablemovers.net/wp-content/uploads/2020/05/hero-index.png" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cablemovers" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
         <section className={`min-h-screen h-full flex items-center bg-[url("/images/slide3.jpg")] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50`}>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-7 items-center">
               <div className="py-10">
                  <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-white">
                     Find <span className="text-[#ef9831]">Internet and TV Service Providers</span> in your area by Cable Movers
                  </h1>
                  <p className='text-[22px] font-normal text-white my-5'>
                     Moving or looking to change your service provider, Cable Movers can help. Compare Internet and TV service providers, plans and prices by ZIP code.
                  </p>
                  <div className="">
                     <SearchForm />
                  </div>
               </div>
               <div className=''>
                  {/* <Image src="/images/slug-bg.png" alt="Feature Image" width={1200} height={1626} className='object-cover w-full h-full' /> */}
               </div>
            </div>
         </section>

         <section className="py-16 ">
            <div className="container mx-auto px-4">
               <div className="mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     How it Works?
                  </h2>
               </div>
               <div className='relative grid gap-7 md:grid-cols-3'>
                  <ServiceBox
                     img={<HiOutlineSearchCircle className="text-6xl text-[#215690] mx-auto" />}
                     title="Search "
                     content="(Find Internet and TV service providers in your area with a simple zip code search)"
                  />
                  <ServiceBox
                     img={<BiGitCompare className="text-6xl text-[#215690] mx-auto" />}
                     title="Compare"
                     content="(Compare prices and plans from available Internet and TV service providers in your area)"
                  />
                  <ServiceBox
                     img={<HiOutlineShoppingCart className="text-6xl text-[#215690] mx-auto" />}
                     title="Order"
                     content="(Give us a call, we’ll help you find the right plan and setup your service over the phone)"
                  />
               </div>
            </div>
            <div className='container mx-auto h-[1px] bg-black/20 my-16'></div>
            <div className='container mx-auto px-4'>
               <div className="mx-auto max-w-3xl">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Find The Best Internet And Tv Service Providers!
                  </h2>
                  <p className='text-xl font-normal text-center mt-4'>
                     Here at Cable Movers, we research and review leading providers and have found the most popular plans and deals on every major Internet and TV service provider to help you shop smartly.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className='container mx-auto px-4'>
               <div className=''>
                  <h3 className='text-3xl font-bold mb-10'>
                     TV Providers
                  </h3>
                  <div className='grid md:grid-cols-6 grid-cols-1 gap-7'>
                     <div className="">
                        <Link href="/providers/directv">
                           <Image src='/images/logo/DIRECTV.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/dish">
                           <Image src='/images/logo/dish.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/xfinity">
                           <Image src='/images/logo/xfinity.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/Optimum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/cox">
                           <Image src='/images/logo/Cox.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className='container mx-auto h-[1px] bg-black/20 my-16'></div>
               <div>
                  <h3 className='text-3xl font-bold mb-10'>
                     Internet Providers
                  </h3>
                  <div className='grid md:grid-cols-6 grid-cols-1 gap-7'>
                     <div className="">
                        <Link href="/providers/att">
                           <Image src='/images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/earthlink">
                           <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/hughesnet">
                           <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/frontier">
                           <Image src='/images/logo/froniter.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/Optimum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className='container mx-auto px-4'>
               <div className="mx-auto max-w-3xl mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Compare Internet And Tv Service Providers In Major Cities.
                  </h2>
               </div>
               <div>
                  <CityBox />
               </div>
            </div>
         </section>

         <section className="py-24">
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
               <div className="">
                  <Image src="/images/help.png" alt="/images/help.png" width={921} height={811} />
               </div>
               <div className="">
                  <h2 className='md:text-5xl text-3xl leading- font-extrabold text-black'>
                     Need Help Finding The Best Provider For You?
                  </h2>
                  <p className='md:text-xl text-lg font-medium text-black my-5'>
                     Whether you have some questions about the plan or need a little advice, Cable Movers can help you find the best Internet and TV service provider in your area. Give us a call and we’ll take care of you.
                  </p>
                  <Link href="tel:855-512-0491" className='text-[#ef9831] hover:text-[#215690] md:text-3xl text-xl font-extrabold hover:underline flex items-center gap-4 w-fit'>
                     <LuPhoneCall /> 855-512-0491
                  </Link>
               </div>
            </div>
         </section>

         <section className="py-16 bg-[#F3FAFF]">
            <div className='container mx-auto px-4 my-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
               <div className="">
                  <h3 className='md:text-3xl text-2xl font-extrabold leading-normal'>
                     Enter your zip code to find providers and plans in your area.
                  </h3>
               </div>
               <div className='flex md:justify-end justify-center [&>div:nth-child(1)]:mr-0 [&>div:nth-child(1)]:w-fit'>
                  <SearchForm />
               </div>
            </div>
         </section>


         <Why_ChooseUs />

         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Featured Posts
                  </h2>
               </div>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                  {BlogPosts?.slice(0,3).map((item: any, idx: number) => {
                     return (
                        <Blogpost key={idx} data={item} />
                     );
                  })}


               </div>
            </div>
         </section>
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async () => {
   const [allposts] = await Promise.all([
      apolloClient.query({ query: AllPosts }),
   ]);
   const BlogPosts = allposts.data.posts.edges;
   return {
      props: {
         BlogPosts
      },
   };
}
