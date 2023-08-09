import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchForm = () => {
    return (
        <div className="relative flex items-center w-full sm:px-12 px-6 mt-6 md:mt-10">
            <FaMagnifyingGlass className="absolute ml-3" />
            <input type="text" placeholder="Enter Zip Code" className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
            <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md">Search</button>
        </div>
    )
}

export default SearchForm