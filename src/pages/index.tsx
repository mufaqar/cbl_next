import Brands from '@/components/brands';
import CityBox from '@/components/city-box';
import Main from '@/components/main';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Link from 'next/link';

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

         <section className="mt-20 flex md:flex-row flex-col">
            <div className='flex md:flex-row flex-col container mx-auto px-4 gap-7 items-center'>
               <div className="md:w-5/12 w-full">
                  <h2 className="text-2xl font-medium">
                     Review Top Providers
                  </h2>
                  <p className="font-[Roboto] my-3">
                     Let us help you sift through the noise by comparing the top providers near you. Find high-speed options for internet, TV, or bundles that meet your needs.
                  </p>
                  <Link href="https://www.highspeedoptions.com/disclosure" className="text-blue-600 font-[Roboto] ">
                     View All Providers
                  </Link>
               </div>
               <div className="md:w-7/12 w-full">
                  <div className='rounded-[20px] pb-4 bg-[#F3FAFF]'>
                     <Brands />
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className='container mx-auto px-4 mt-10'>
               <div className="mt-20 mb-7">
                  <h2 className='text-center text-2xl font-medium'>
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

         <section className="">
            <div className='grid md:grid-cols-4 grid-cols-1 mt-20 gap-10 container mx-auto px-4 '>
               <div className="mx-auto ">
                  <img src="/images/girl.jpg" alt="" className="h-full mt-4 shadow-md rounded-3xl shadow-gray-500" />
               </div>
               <div className="mt-5 md:col-span-3">
                  <h2 className='md:text-3xl text-2xl font-bold'>
                     WHY CHOOSE CABLEMOVERS.NET?
                  </h2>
                  <p className="font-[Roboto] my-3">
                     Finding Internet & TV providers is tough, but we've made it easy.
                  </p>
                  <div className="grid gap-5 mt-5 md:grid-cols-3 grid-cols-1">
                     <div className="">
                        <h2 className="text-lg font-medium mb-3">
                           NATIONWIDE COVERAGE
                        </h2>
                        <p className="font-[Roboto]">
                           Find all Internet and TV providers available to you in your Area.
                        </p>
                     </div>
                     <div className="">
                        <h2 className="text-lg font-medium mb-3">
                           ONE STOP SHOP
                        </h2>
                        <p className="font-[Roboto]">
                           Compare all Internet and TV plans, order service for no extra charge.
                        </p>
                     </div>
                     <div className="">
                        <h2 className="text-lg font-medium mb-3">
                           TOP BRANDS
                        </h2>
                        <p className="font-[Roboto]">
                           We partnered with Top Brands to help you shop smartly.
                        </p>
                     </div>
                  </div>
                  <div className="bg-[#F3FAFF] py-5 md:px-10 px-5 mt-10 rounded-2xl">
                     <div className='flex md:flex-row flex-col justify-between items-center gap-5'>
                        <h2 className="font-[Roboto] text-2xl ">
                           CALL TO SETUP
                        </h2>
                        <Link href="tel:1-833-592-0098" className="px-8 py-2 bg-blue-700 rounded-xl text-white font-[Roboto]">
                           1-833-592-0098
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

    
      </>

   );
}
