import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog() {
    return (
        <>
        
            <div className="max-w-screen-lg mx-auto">
                <main className="mt-12">
                    <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                        <h2 className="font-bold text-3xl">Latest news</h2>
                    </div>
                    <div className="block space-x-0 lg:flex lg:space-x-6">
                        <div className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                            <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                            <div className="p-4 pl-0">
                                <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
                                <p className="text-gray-700 mt-2">
                                    Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
                                    So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
                                </p>
                                <Link href="/" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                            </div>
                        </div>

                        <div className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                            <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                            <div className="p-4 pl-0">
                                <h2 className="font-bold text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
                                <p className="text-gray-700 mt-2">
                                    Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in.
                                    Procured shutters mr it feelings. To or three offer house begin taken am at.
                                </p>

                                <Link href="/" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                            </div>
                        </div>

                        <div className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                            <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                            <div className="p-4 pl-0">
                                <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
                                <p className="text-gray-700 mt-2">
                                    Alteration connection to so as collecting me.
                                    Difficult in delivered extensive at direction allowance.
                                    Alteration put use diminution can considered sentiments interested discretion.
                                </p>
                                <Link href="/" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Blog