import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faqs_Sec({ zipcode, city, state, type, allProviders }: any) {
    console.log("🚀 ~ file: faqs.tsx:5 ~ Faqs_Sec ~ allProviders:", allProviders)



    const [open, setOpen] = useState<any>(1);

    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null)
        }
        setOpen(id)
        //setDropdown(!dropdown)
        // console.log(id,open)
    }

    return (
        <>

            {type === "internet" &&
                <>
                    <h2 className="text-2xl font-bold">
                        FAQ’S. {city}, {state}   Internet FAQ’s
                    </h2>



                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    How do I check the availability of Internet and TV service providers in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check Internet and TV service providers bundles availability, enter your zip code {zipcode}to find the best bundle options available to you.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    How do I setup internet and TV service in my new home in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To setup internet and TV service in your new home, contact the above listed service providers, inquire about their plans and select the plan that works for you.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    Can I get internet and TV bundle without any contract in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. A few service providers in {city},{state} offer no contract or month to month services. Check with the providers to know more.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    Who is the Best bundle Service Provider in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                20 bundle service providers are available in {city}. Based on the availability HughesNet is the best bundle service provider in {city}, {zipcode}.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    Can I bundle Internet and TV service in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. Many providers in {city} offer bundle options to combine internet and TV services for potential cost savings.  </p>
                        </div>
                    </div>
                </>

            }

            {type === "tv" &&
                <>
                    <h2 className="text-2xl font-bold">
                        FAQ’S. {city}, {state}   TV FAQ’s               </h2>

                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    How do I check the availability of TV service providers in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check TV service providers availability, enter your zip code {zipcode} to find the best TV options available to you.  </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    2.	How do I setup TV service in my new home in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To setup TV service in your new home, contact the above listed service providers, inquire about their plans and select the plan that works for you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    3.	Can I get TV service without any contract in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. A few TV service providers in {city}, {state} offer no contract or month to month services. Call the providers to know more. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    4.	Who is the Best TV Service Provider in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {
                                    allProviders[0].title
                                } TV service providers are available in {city}. Based on the availability and pricing DIRECTV is the best TV service provider in {city} , {state}. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    5.	Who is the cheapest TV service provider in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                DIRECTV is the cheapest internet service provider in {city}, {state} with price starting from $64.99/m.  </p>
                        </div>
                    </div>
                </>

            }

            {type === "internet-tv" &&
                <>
                    <h2 className="text-2xl font-bold">
                        FAQ’S. {city}, {state}  Internet and TV Bundles FAQ’s;              </h2>

                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    1.	How do I check the availability of Internet and TV service providers in   {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check Internet and TV service providers bundles availability, enter your zip code {zipcode}to find the best bundle options available to you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    2.	How do I setup internet and TV service in my new home in {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To setup internet and TV service in your new home, contact the above listed service providers, inquire about their plans and select the plan that works for you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    3.	Can I get internet and TV bundle without any contract in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. A few service providers in {city}, {state} offer no contract or month to month services. Check with the providers to know more. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    4.	Who is the Best bundle Service Provider in  {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                (Insert provider’s number) bundle service providers are available in {city}. Based on the availability (insert provider’s name) is the best bundle service provider in (insert city name, zip code).
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    5.	Can I bundle Internet and TV service in   {city}, {state}?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. Many providers in {city} offer bundle options to combine internet and TV services for potential cost savings. </p>
                        </div>
                    </div>
                </>

            }

        </>
    );
}

