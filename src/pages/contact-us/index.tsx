import PageBanner from '@/components/pageBanner'
import React, { useState } from 'react'

function Contact_Us() {
    return (
        <div>
            <PageBanner title="Contact Us" />
            <section className="pb-16 -mt-12">
                <div className='container mx-auto px-4'>
                    <div className="w-full flex items-center justify-center">
                        <form className="bg-white shadow-xl rounded py-10 lg:px-28 px-8">
                            <h3 className="md:text-3xl text-xl font-bold leading-7 text-center">
                                Let’s chat and get a quote!
                            </h3>
                            <div className="md:flex w-full gap-5 items-center mt-12">
                                <div className="md:w-1/2 flex flex-col">
                                    <label className="text-base font-semibold leading-none">Name</label>
                                    <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                                </div>
                                <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                    <label className="text-base font-semibold leading-none">Email Address</label>
                                    <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                                </div>
                            </div>
                            <div className="md:flex w-full gap-5 items-center mt-8">
                            <div className="md:w-1/2 flex flex-col">
                                    <label className="text-base font-semibold leading-none">Company name</label>
                                    <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                                </div>
                                <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                    <label className="text-base font-semibold leading-none">Country</label>
                                    <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="text-base font-semibold leading-none">Message</label>
                                    <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                                </div>
                            </div>
                            <p className="text-xs leading-3 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#ef9831] hover:bg-[#215690]">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact_Us