import PageBanner from '@/components/pageBanner'
import SearchForm from '@/components/searchform'
import React from 'react'
import Head from 'next/head';

function About_Us() {
    return (
        <>
            <Head>
                <title> About Us | Cable Movers</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Planning a Move? Cable Movers can help you find the best Internet and TV Service Provider. Find best deals on Cable and High Speed Internet." />
                <meta property="og:url" content="https://www.cablemovers.net" />
                <meta property="og:site_name" content="Cable Movers" />
                <meta property="article:publisher" content="https://www.facebook.com/cablemovers.net" />
                <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
                <meta property="og:image" content="https://www.cablemovers.net/wp-content/uploads/2020/05/hero-index.png" />
                <meta property="og:image:width" content="700" />
                <meta property="og:image:height" content="467" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@cablemovers" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="26 minutes" />
            </Head>
            <PageBanner title="About Us" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            What We Do
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            The abundance of internet, TV, and bundle options can be overwhelming. Our aim is to simplify your decision-making process. At cablemovers.net, we provide a one stop solution for internet and TV providers, whether you're seeking bundle comparisons or determining the ideal speeds for your daily online activities.
                            We are here to assist you in comparing internet and TV providers within your locality, ensuring that you're well-informed before making a financial commitment
                        </p>
                    </div>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            How We Make Money
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            To uphold an ad-free experience for you, we sustain our platform by forming affiliate partnerships with Internet and TV providers, as well as other links showcased on our website. While this might occasionally impact the providers we highlight and their positioning on our site, please be assured that it has no bearing on the impartial information we provide for user comparison.
                        </p>
                    </div>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            How We Rank Our Providers
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            We aim to provide you with comprehensive choices, which is why we feature all major TV providers on our website. Our reviews consider aspects like availability, reliability, customer support, user feedback, and overall value for your money. We believe that these insights will empower you to make the best decision for your needs.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-[#F3FAFF]">
                <div className='container mx-auto px-4 my-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-extrabold leading-normal md:text-start text-center'>
                            Find Internet and TV Service Providers
                        </h2>
                    </div>
                    <div className='flex items-center md:justify-end justify-center [&>div:nth-child(1)]:md:mr-0 [&>div:nth-child(1)]:w-fit'>
                        <SearchForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_Us