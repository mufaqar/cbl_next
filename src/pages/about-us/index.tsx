import PageBanner from '@/components/pageBanner'
import SearchForm from '@/components/searchform'
import React from 'react'

function About_Us() {
    return (
        <>
            <PageBanner title="About Us" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <h2 className='text-2xl font-bold py-5'>
                            What We Do
                        </h2>
                        <p className='text-lg font-normal '>
                            Are you looking to switch or upgrade your internet and TV services? Cable Movers is here to make your search hassle-free. Finding the best internet and TV service providers in your area has never been easier. In this guide, we'll show you how Cable Movers can help you discover the perfect services for your needs.
                        </p>
                        <h2 className='text-2xl font-bold py-5'>
                            How We Make Money
                        </h2>


                        <p className='text-xl font-normal '>
                            To uphold an ad-free experience for you, we sustain our platform by forming affiliate partnerships with Internet and TV providers, as well as other links showcased on our website. While this might occasionally impact the providers we highlight and their positioning on our site, please be assured that it has no bearing on the impartial information we provide for user comparison. </p>
                        <h2 className='text-2xl font-bold py-5'>How We Rank Our Providers</h2>
                        <p className='text-lg font-normal '>We aim to provide you with comprehensive choices, which is why we feature all major TV providers on our website. Our reviews consider aspects like availability, reliability, customer support, user feedback, and overall value for your money. We believe that these insights will empower you to make the best decision for your needs.</p>


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
        </>
    )
}

export default About_Us