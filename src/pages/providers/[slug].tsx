import Faqs_Sec from '@/components/faqs';
import Pricing_Plan from '@/components/provider/pricing-plan';
import SearchForm from '@/components/searchform'
import { Faqs_Data } from '@/const/exports';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Single_Provider() {
  const [nav, setNav] = useState(false);

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
            <h1 className="sm:text-3xl text-2xl font-bold">
              HughesNet Internet plans and pricing for (insert current month, year)
            </h1>
            <h2 className="text-xl font-bold my-3">
              Prices starting at $49.99/mo.
            </h2>
            <ul>
              <li className="text-lg font-[Roboto]">
                Built-in WiFi
              </li>
              <li className="text-lg font-[Roboto]">
                No hard data limits
              </li>
              <li className="text-lg font-[Roboto]">
                2 year price lock guarantee
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/partner1.png" alt="logo" className='w-3/4' />
          </div>
        </div>
      </section>

      <section className='md:my-32 my-10'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
          <div className="">
            <h2 className='text-3xl font-bold'>
              Enter your zip code below to find out if HughesNet is available in your area.
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
              Call NOW to order HughesNet
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
              HughesNet Internet Plans,
            </h2>
          </div>
          <div>
            <Pricing_Plan />
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
              HughesNet Fusion Internet Plans
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
              HughesNet Fusion plans combines satellite and wireless technologies to give you low latency internet connection and deliver a faster, more responsive Internet experience which makes it easy to perform activities that are nearly impossible over a normal satellite internet connection e.g Online meetings, streaming and video gaming.
            </h2>
          </div>
          <div className=" w-full lg:max-w-[1200px] mx-auto py-4 h-auto rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <div className="bg-white w-full h-auto grid md:grid-cols-3 pt-4 pb-4">
              <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center p-5">
                <div>
                  <p className="text-center text-base mt-2">
                    Best HughesNet deals
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
              HughesNet Business Internet Plans
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
              HughesNet Business fusion Internet Plans
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
              HughesNet for Business provides a reliable and secure connection that gives you instant access to the critical business information and applications you need, email, point of sale system, file sharing, online videos and more. It is available wherever your business is located even if you are located beyond the reach of DSL, Cable and Fiber.
            </h2>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              HughesNet Voice Plans
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
              HughesNet Voice uses advanced Voice-over-IP (VoIP) technology to deliver home phone service over satellite internet connection. All voice plans offers unlimited local and long distance calling to US and Canada. HughesNet Voice provides a range of features like caller ID, Voicemail, Call waiting, Call forwarding and Enhanced 911 service.
            </h2>
          </div>
        </div>
      </section>

      <section className='md:py-32 py-10 bg-[#F3FAFF]'>
        <div className='container mx-auto px-4 grid gap-5 items-center'>
          <div className="">
            <h2 className='text-3xl font-bold text-center'>
              Find out if HughesNet is available in your area
            </h2>
          </div>
          <div className="w-fit mx-auto py-5 mt-6 bg-white shadow-xl border md:h-52 rounded-3xl">
            <SearchForm />

          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              HughesNet Fees
            </h2>
          </div>
          <div className="rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <ul className="bg-white w-full h-auto grid pt-4 pb-4">
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full font-bold'>Fee name</span>
                <span className='text-center w-full font-bold'>Price</span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  Professional Install
                </span>
                <span className='text-center w-full'>
                  FREE
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  Equipment Rental (per month)
                </span>
                <span className='text-center w-full'>
                  $14.99 ($19.99 for Fusion plans)
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  Equipment Purchase (one time)
                </span>
                <span className='text-center w-full'>
                  $349.99 ($449.99 for Fusion plans)
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  Early Termination Fee
                </span>
                <span className='text-center w-full'>
                  $400
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              Hughes Data Tokens
            </h2>
          </div>
          <div className="rounded-t-md rounded-b-md shadow-md border border-zinc-400/10">
            <ul className="bg-white w-full h-auto grid pt-4 pb-4">
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full font-bold'>
                  Data Token
                </span>
                <span className='text-center w-full font-bold'>Price</span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  3 GB
                </span>
                <span className='text-center w-full'>
                  $9
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  5 GB
                </span>
                <span className='text-center w-full'>
                  $15
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  10 GB
                </span>
                <span className='text-center w-full'>
                  $30
                </span>
              </li>
              <li className='w-full flex justify-between items-center divide-x'>
                <span className='text-center w-full'>
                  25 GB
                </span>
                <span className='text-center w-full'>
                  $75
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              (NOTE: HughesNet Fees and HughesNet Data tokens columns should be side by side)
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              About HughesNet
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>
              HughesNet is a satellite internet service provider invented by Hughes® more than 25 years ago and offering high speed internet service to the rural and remote areas where other internet options are limited or not available such as DSL, Cable and Fiber. It uses its satellite technology to provide internet service and it is currently available in the entire US.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              HughesNet Internet Pros and Cons
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>
              HughesNet is a valuable choice for individuals and businesses seeking high speed internet connectivity especially in the rural and remote area. Here are some of the pros and cons of HughesNet.
            </p>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
            <div>
              <h2 className="text-2xl font-bold">
                Pros
              </h2>
              <ul>
                <li>
                  Widespread Coverage
                </li>
                <li>
                  Reliable Connectivity
                </li>
                <li>
                  Flexible Plans
                </li>
                <li>
                  No Hard Data Limits
                </li>
                <li>
                  Built-in Wi-Fi
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Cons
              </h2>
              <ul>
                <li>
                  Expensive ETF
                </li>
                <li>
                  Low data caps
                </li>
                <li>
                  Two year contract
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              HughesNet Internet Discounts
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>
              HughesNet participates in the Affordable Connectivity Program (ACP) to provide $30 discount per month ($75 on tribal lands) to all eligible participants on HughesNet Internet service through the Federal Communications Commission's (FCC) ACP program. It requires participants to submit an application that demonstrates their eligibility.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              HughesNet FAQ’s
            </h2>
          </div>
          <div className='grid gap-10'>
            {Faqs_Data?.map((item: any, idx: number) => {
              return <Faqs_Sec key={idx} data={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
