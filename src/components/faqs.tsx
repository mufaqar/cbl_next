import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faqs_Sec({ data , city , state }: any) {
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
            <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                <div className="">
                    <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                        <p className="text-lg font-semibold " >
                        Who is the Best Internet Service Provider in {city}, {state}?
                        </p>
                        <span className="text-lightBlue">

                            <AiOutlinePlus size={24}
                                className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                        </span>
                    </div>
                </div>
                <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                    <p className="text-base font-medium mt-5" >
                    ({city}) internet service providers are available in {city}. Based on the availability ({city}) is the best internet service provider in {city}, {state}
                    </p>
                </div>
            </div>



            <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                <div className="">
                    <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                        <p className="text-lg font-semibold " >
                        Who is the Best Internet Service Provider in {city}, {state}?
                        </p>
                        <span className="text-lightBlue">

                            <AiOutlinePlus size={24}
                                className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                        </span>
                    </div>
                </div>
                <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                    <p className="text-base font-medium mt-5" >
                    ({city}) internet service providers are available in {city}. Based on the availability ({city}) is the best internet service provider in {city}, {state}
                    </p>
                </div>
            </div>

            <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                <div className="">
                    <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                        <p className="text-lg font-semibold " >
                        Who is the Best Internet Service Provider in {city}, {state}?
                        </p>
                        <span className="text-lightBlue">

                            <AiOutlinePlus size={24}
                                className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                        </span>
                    </div>
                </div>
                <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                    <p className="text-base font-medium mt-5" >
                    ({city}) internet service providers are available in {city}. Based on the availability ({city}) is the best internet service provider in {city}, {state}
                    </p>
                </div>
            </div>
            
        </>
    );
}



// const getFaqsData = ({props) => {
//     console.log("🚀 ~ file: exports.jsx:162 ~ getFaqsData ~ city:", city)
    
//   return (
//     [
//         {
//             id: 1,
//             question: `Who is the Best Internet Service Provider in ${city}, ${state}?`,
//             answer: `.`
//         },
//         {
//             id: 2,
//             question: `Who is the fastest Internet service provider in ${city}, ${state}?`,
//             answer: `(${city}  name}) is the faster internet service provider in ${city}, ${state} and offers max download speeds up to (${provider}) in select areas.`
//         },
//         {
//             id: 3,
//             question: `Who is the fastest Internet service provider in ${city}, ${state}?`,
//             answer: `(${city}) is the faster internet service provider in ${city}, ${state} and offers max download speeds up to (${provider}) in select areas.`
//         },
//     ]
//   )
// }

