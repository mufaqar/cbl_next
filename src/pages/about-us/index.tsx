import PageBanner from '@/components/pageBanner'
import React from 'react'

function About_Us() {
    return (
        <>
            <PageBanner title="About Us" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            Find Internet and TV Service Providers in your area by Cable Movers
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            Are you looking to switch or upgrade your internet and TV services? Cable Movers is here to make your search hassle-free. Finding the best internet and TV service providers in your area has never been easier. In this guide, we'll show you how Cable Movers can help you discover the perfect services for your needs.
                        </p>
                        <p className='text-xl font-normal '>
                            Say goodbye to the frustration of searching for internet and TV service providers in your area. Cable Movers simplifies the process, making it easy to discover and compare options, read real reviews, and connect with providers. Start your journey towards better, more reliable internet and TV services today with Cable Movers.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_Us