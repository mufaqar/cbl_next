export const ProviderCard = ({ item,zone }: any) => {
    console.log(zone);

    return (

        <>
           <div className=" w-full lg:max-w-[1200px]  mx-auto py-4 h-auto ">
                <div className="bg-black text-white flex justify-between px-5 py-1 rounded-t-md">
                    <h2 className="font-[abc] text-[18px]">{item.title}</h2>
                    <h5 className="font-[abc] font-semibold">99% available in 01001</h5>
                </div>
                <div className="bg-white shadow-md rounded-b-md w-full h-auto grid lg:grid-cols-6 md:grid-cols-3  border py-8 ">
                    <div className="border-r ">
                        <img src="./images/images.png" alt="" className=" mt-7 px-5" />
                        <hr className="lg:invisible visible mt-5" />
                    </div>

                    <div className="border-r px-2 mt-8 pl-4">
                        <figure>
                            <img src="./images/images.jpg" alt="" className="w-[120px] h-[20px]" />
                        </figure>
                        <span className="text-[#5050b9]  hover:border-[#5050b9] text-sm  hover:text-red-600 border-b-[#5050b9] ">Customer Rating</span>
                        <hr className="lg:invisible visible mt-5" />
                    </div>


                    <div className="text-center border-r">
                        <h4 className="mt-12 font-[abc] font-bold">Speeds up to 245 Mbps</h4>
                        <hr className="lg:invisible visible mt-5" />
                    </div>
                    <div className="px-5 text-[12px] border-r  ">
                        <div className="flex gap-3 pl-2">
                            <svg className="lg:w-12 w-6 h-8  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" ></path>
                            </svg>
                            <p>15-day free trial to see how well T-Mobile 5G operates in your home.</p>
                        </div>
                        <br />
                        <div className="flex gap-3">
                            <svg className="w-6 h-4  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p>No contract required!</p>
                        </div>
                        <hr className="md:invisible visible mt-5" />
                        <div className="flex gap-3">
                            <svg className="w-6 h-4  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p className="">Your price is locked in.</p>
                        </div>
                        <hr className="md:invisible visible mt-5" />
                    </div>
                    <div className="text-center px-5 border-r">
                        <h5 className="mt-10 ">Price starting from <br /> <span className="font-extrabold text-blue-950 font-[abc] text-xl">$50.00</span> /mo.</h5>
                        <hr className="lg:invisible visible mt-5" />
                    </div>
                    <div className="justify-center items-center flex lg:border-l-2">
                        <button className="text-white whitespace-nowrap font-[abc] flex justify-between uppercase items-center px-[20px] py-[10px] bg-[#ff2128] hover:bg-[#cf2e2e]">View Plans</button>
                    </div>
                </div>
            </div>

        </>
    )
}