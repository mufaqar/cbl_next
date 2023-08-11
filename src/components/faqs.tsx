import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faqs_Sec({ data }: any) {
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
                    <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(data.id)}>
                        <p className="text-lg font-semibold " >
                            {data.question}
                        </p>
                        <span className="text-lightBlue">

                            <AiOutlinePlus size={24}
                                className={`${open === data.id ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                        </span>
                    </div>
                </div>
                <div className={`${open === data.id ? 'flex' : 'hidden'} `}>
                    <p className="text-base font-medium mt-5" >
                        {data.answer}
                    </p>
                </div>
            </div>
        </>
    );
}

