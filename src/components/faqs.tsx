import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faqs_Sec() {
    const [open, setOpen] = useState(1);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(id)
        }
        setOpen(id)
        //setDropdown(!dropdown)

    }

    return (
        <>
            {Faqs_Data.map((item: any, idx: number) => {
                return <div key={idx} className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                    <div className="">
                        <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(item.id)}>
                            <p className="text-lg font-semibold " >
                                {item.question}
                            </p>
                            <span className="text-lightBlue">

                                <AiOutlinePlus size={24}
                                    className={`${open === item.id ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                            </span>
                        </div>
                    </div>
                    <div className={`${open === item.id ? 'flex' : 'hidden'} `}>
                        <p className="text-base font-medium mt-5" >
                            {item.answer}
                        </p>
                    </div>
                </div>

            })}
        </>
    );
}

export const Faqs_Data = [
    {
        id: 1,
        question: 'Who is the Best Internet Service Provider in (insert city name, State Name)?',
        answer: '(Insert provider’s number) internet service providers are available in (insert city name). Based on the availability (insert provider’s name) is the best internet service provider in (insert city name, zip code).'
    },
    {
        id: 2,
        question: 'Who is the fastest Internet service provider in (insert city name, state name)?',
        answer: '(Insert provider’s name) is the faster internet service provider in (insert city name, zip code) and offers max download speeds up to (insert provider speed) in select areas.'
    },
]