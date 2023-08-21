import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
//import { useQuery } from '@apollo/client';
//import { ProviderByCITES } from '@/config/query';




const SearchForm = () => {
    const [zipcode, setzipcode] = useState<string>();
    const [pro_type, setpro_type] = useState<string>();
    const router = useRouter();
    // const { data, loading, error } = useQuery(ProviderByCITES);


    //console.log(data);

    function handleState() {


        () => router.push(`/providers/city/state?zipcode=${zipcode}&type=${pro_type}`)
    }

    return (
        <>
            <div className="relative flex items-center w-full sm:px-12 px-6 mt-6 md:mt-10">
                <FaMagnifyingGlass className="absolute ml-3" />
                <input type="text" placeholder="Enter Zip Code" name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
                <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md" onClick={handleState}>Search</button>
            </div>
        </>
    )
}

export default SearchForm