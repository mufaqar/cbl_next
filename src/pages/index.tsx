import Brands from '@/components/brands';
import CityBox from '@/components/city-box';
import Main from '@/components/main';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Why_ChooseUs from '@/components/why-choose-us';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { gql, useQuery } from '@apollo/client';
import { HiOutlineSearchCircle, HiOutlineShoppingCart } from 'react-icons/hi'
import { BiGitCompare } from 'react-icons/bi'
import Image from 'next/image';

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
         {/* <Main /> */}

         <section className={`min-h-screen h-full py-10 bg-[url('/images/slide3.jpg')] bg-center bg-no-repeat bg-cover bg-blend-overlay bg-black/40 flex items-center`}>
            <div className="container mx-auto px-4 grid md:grid-cols-2 items-center">
               <div className="py-10">
                  <h1 className="sm:text-5xl text-2xl leading-normal font-extrabold text-white">
                     Find <span className="text-[#ef9831]">Internet and TV Service Providers</span> in your area by Cable Movers
                  </h1>
                  <p className='text-xl font-normal text-white my-4'>
                     Moving or looking to change your service provider, Cable Movers can help. Compare Internet and TV service providers, plans and prices by ZIP code.
                  </p>
                  <div className="w-full py-5 mt-6 bg-white border md:h-52 h-40 rounded-3xl flex">
                     <SearchForm />
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-[#F3FAFF]">
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
         </section>

         <section className="py-16">
            <div className='container mx-auto px-4'>
               <div className="mx-auto max-w-3xl mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Find The Best Internet And Tv Service Providers!
                  </h2>
                  <p className='text-xl font-normal text-center my-4'>
                     Here at Cable Movers, we research and review leading providers and have found the most popular plans and deals on every major Internet and TV service provider to help you shop smartly.
                  </p>
               </div>
               <div className='mb-16'>
                  <h3 className='text-3xl font-bold mb-10'>
                     TV Peoviders
                  </h3>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                        <Link href="/providers/directv">
                           <Image src='/images/logo/DIRECTV.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              DIRECTV
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              SPECTRUM
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/dish">
                           <Image src='/images/logo/dish.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              Dish
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/xfinity">
                           <Image src='/images/logo/xfinity.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              XFINITY
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/optimum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              OPTIMUM
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/cox">
                           <Image src='/images/logo/cox.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              COX
                           </h2>
                        </Link>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className='text-3xl font-bold mb-10'>
                     Internet Providers
                  </h3>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                        <Link href="/providers/att">
                           <Image src='/images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              AT&T

                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              SPECTRUM
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/earthlink">
                           <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              EARTHLINK
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/hughesnet">
                           <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              HUGHESNET
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/frontier">
                           <Image src='/images/logo/froniter.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              FRONTIER
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/optimum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              OPTIMUM
                           </h2>
                        </Link>
                     </div>
                     <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <Link href="/providers/viasat">
                           <Image src='/images/logo/viasat.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                           <h2 className="mt-4 text-lg  text-center">
                              VIASAT
                           </h2>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-24 bg-[url('/images/home-cta.jpg')] bg-center bg-no-repeat bg-cover bg-fixed bg-blend-overlay bg-black/40">
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center'>
               <div className="md:w-3/4 w-full">
                  <h2 className='md:text-3xl text-2xl font-extrabold text-white'>
                     Need Help Finding The Best Provider For You?
                  </h2>
                  <p className='md:text-xl text-lg font-normal text-white mt-5'>
                     Whether you have some questions about the plan or need a little advice, Cable Movers can help you find the best Internet and TV service provider in your area. Give us a call and we’ll take care of you.
                  </p>
               </div>
               <div className="md:w-1/4 w-full flex md:justify-end justify-center">
                  <Link href="tel:000-000-000" className='bg-[#ef9831] hover:bg-white hover:text-[#215690] text-white md:text-xl text-base text-center inline-block w-fit font-medium font-[Roboto] md:px-10 px-5 py-2 rounded-3xl'>
                     000-000-000
                  </Link>
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

         <section className="py-16 bg-[#F3FAFF]">
            <div className='container mx-auto px-4 my-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
               <div className="">
                  <h3 className='md:text-3xl text-2xl font-extrabold leading-normal'>
                     Enter your zip code to find providers and plans in your area.
                  </h3>
               </div>
               <div className='flex md:justify-end justify-center'>
                  <SearchForm />
               </div>
            </div>
         </section>

         {/* <section className="flex md:flex-row flex-col bg-gradient-to-r from-white via-white to-[#F3FAFF]">
            <div className='flex md:flex-row flex-col container mx-auto px-4 gap-7 items-center'>
               <div className="md:w-5/12 w-full">
                  <h2 className="text-2xl font-bold">
                     Review Top Providers
                  </h2>
                  <p className="text-base font-[Roboto] my-3">
                     Let us help you sift through the noise by comparing the top providers near you. Find high-speed options for internet, TV, or bundles that meet your needs.
                  </p>
                  <Link href="/providers" className="text-[#215690] font-[Roboto] ">
                     View All Providers
                  </Link>
               </div>
               <div className="md:w-7/12 w-full">
                  <div className='rounded-l-[90px] bg-[#F3FAFF] py-20 px-5'>
                     <Brands />
                  </div>
               </div>
            </div>
         </section> */}

         <Why_ChooseUs />

         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Featured Posts
                  </h2>
               </div>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                  <Link href="/blog">
                     <div className="rounded-lg p-4 lg:p-0 shadow-md">
                        <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                        <div className="p-4 pl-0">
                           <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                           <p className="text-gray-700 mt-2 text-center text-sm">
                              Ari Howard —  6 min read
                           </p>
                        </div>
                     </div>
                  </Link>
                  <Link href="/blog">
                     <div className="rounded-lg p-4 lg:p-0 shadow-md">
                        <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                        <div className="p-4 pl-0">
                           <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                           <p className="text-gray-700 mt-2 text-center text-sm">
                              Ari Howard —  5 min read
                           </p>
                        </div>
                     </div>
                  </Link>
                  <Link href="/blog">
                     <div className="rounded-lg p-4 lg:p-0 shadow-md">
                        <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                        <div className="p-4 pl-0">
                           <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                           <p className="text-gray-700 mt-2 text-center text-sm">
                              Ari Howard —  7 min read
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
}
