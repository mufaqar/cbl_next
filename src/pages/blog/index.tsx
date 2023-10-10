import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { AllPosts } from '@/config/query'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog({ BlogPosts }: any) {
    console.log("🚀 ~ file: index.tsx:10 ~ Blog ~ BlogPosts:", BlogPosts)
    return (
        <>
            <PageBanner title="Blog" />
            <main className="py-16 max-w-screen-lg mx-auto">
                <div className="flex mb-4 px-4 lg:px-0 items-center justify-between">
                    <h2 className="font-bold text-3xl">Latest news</h2>
                </div>
                <div className="block space-x-0 lg:flex flex-wrap lg:space-x-6">
                    {
                        BlogPosts.map((item: any, idx: number) => {
                            return (
                                <>
                                    <div className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                                        <Image src={item?.featuredImage?.node?.mediaItemUrl} alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                                        <div className="p-4 pl-0">
                                            <h2 className="font-bold text-2xl text-gray-800">{item.title}</h2>
                                            <p className="text-gray-700 mt-2">
                                                {item.excerpt}
                                            </p>
                                            <Link href="{item.slug}" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }


                </div>
            </main>
        </>
    )
}

export default Blog


export const getStaticProps: GetStaticProps = async () => {
    const [allposts] = await Promise.all([
        apolloClient.query({ query: AllPosts }),
    ]);
    const BlogPosts = allposts.data.posts.edges;
    return {
        props: {
            BlogPosts
        },
    };
}