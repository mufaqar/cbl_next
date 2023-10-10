import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { AllPosts } from '@/config/query'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog({ BlogPosts }: any) {
    console.log("🚀 ~ file: index.tsx:10 ~ Blog ~ BlogPosts:", BlogPosts)
    return (
        <>
            <PageBanner title="Blog" />
            <main className="py-16 max-w-screen-lg mx-auto">
              
                <div className="block space-x-0 lg:flex flex-wrap lg:space-x-10">
                    {
                        BlogPosts.map((item: any, idx: number) => {
                            return (
                                <>
                                    <div className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                                        <Image src={item.node?.featuredImage?.node?.mediaItemUrl} alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                                        <div className="p-4 pl-0">
                                            <h2 className="font-bold text-2xl text-gray-800">{item.node.title}</h2>
                                            <div className="text-gray-700 mt-2" dangerouslySetInnerHTML={{__html:item.node.excerpt }}>
                                            </div>
                                            <Link href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
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


export const getServerSideProps: GetServerSideProps = async () => {
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