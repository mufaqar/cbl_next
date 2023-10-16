import PageBanner from '@/components/pageBanner'
import React from 'react'

function Sell_Information() {
    return (
        <>
            <PageBanner title="Do Not Sell My Information" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <p className='text-xl mb-4'>
                            If you wish to opt out of the sale of your personal information, please send an email to contact@cablemovers.net, including your first and last name and phone number. You will receive acknowledgment of your message within seven (7) business days. After confirming your identity, we will proceed with your request within thirty (30) days.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell_Information