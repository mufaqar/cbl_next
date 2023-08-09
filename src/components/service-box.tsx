import Link from 'next/link'
import React from 'react'

const ServiceBox = ({ img, title, content, link }: any) => {
    return (
        <div className="w-full py-5 mt-10 bg-white rounded-3xl md:mt-20">
            <div className="mt-5">
                <img src={img} alt="" className="h-20 mx-auto" />
                <h2 className="mt-5 text-center text-xl font-medium">
                    {title}
                </h2>
                <div>
                    <p className="px-5 mt-5 text-base text-center">
                        {content}
                    </p>
                    <Link href={link} className='px-5 py-2 mt-5 text-base text-center block bg-blue-500 text-white w-fit mx-auto'>
                        Check Availability
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox