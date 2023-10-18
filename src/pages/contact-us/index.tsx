import PageBanner from '@/components/pageBanner'
import React from 'react'
import Head from 'next/head';

function Contact_Us() {
    return (
        <>
            <Head>
                <title>Contact Us - Cable Movers</title>
                <meta name="description" content="Find Internet & TV Service Providers In Your Area" />
            </Head>
            <div>
                <PageBanner title="Contact Us" />
                <section className="pb-16 -mt-12">
                    <div className='container mx-auto px-4'>
                        <div className="w-full flex items-center justify-center">
                            <form className="bg-white shadow-xl rounded py-10 lg:px-28 px-8">
                                <h3 className="md:text-3xl text-xl font-bold leading-7 text-center">
                                    Have question?
                                </h3>
                                <p className='text-xl font-normal mt-3'>
                                    We’re here to help! Send us an email to contact@cablemovers.net
                                </p>
                                <div className="md:flex w-full gap-5 items-center mt-12">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none">Name</label>
                                        <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input name" />
                                    </div>
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                        <label className="text-base font-semibold leading-none">Email</label>
                                        <input tabIndex={0} arial-label="Please input email address" type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                                    </div>
                                </div>
                                <div className="md:flex w-full gap-5 items-center mt-8">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none">Phone number</label>
                                        <input tabIndex={0} role="input" arial-label="Please input Phone number" type="tel" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Phone number" />
                                    </div>
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                        <label className="text-base font-semibold leading-none">Reason</label>
                                        <select id="reason" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                                            <option selected>Select a Reason</option>
                                            <option value="Customer Service">Customer Service</option>
                                            <option value="New Service for my Home">New Service for my Home</option>
                                            <option value="ISP: New/Update Listing">ISP: New/Update Listing</option>
                                            <option value="Advertising Opportunities">Advertising Opportunities</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="text-base font-semibold leading-none">Comments</label>
                                        <textarea tabIndex={0} aria-label="leave a Comments" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#ef9831] hover:bg-[#215690]">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact_Us