import PageBanner from '@/components/pageBanner'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';

function Sell_Information() {
    return (
        <>

            <Head>
                <title> Do Not Sell My Information | Cable Movers</title>
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
            <PageBanner title="Do Not Sell My Information" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <p className='text-xl mb-4 leading-relaxed'>
                            If you wish to opt out of the sale of your personal information, please send an email to <Link href="mailto:contact@cablemovers.net">contact@cablemovers.net</Link>, including your first and last name and phone number. You will receive acknowledgment of your message within seven (7) business days. After confirming your identity, we will proceed with your request within thirty (30) days.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell_Information