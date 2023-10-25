import Blogpost from '@/components/blogpost'
import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { AllPosts } from '@/config/query'
import { GetServerSideProps, GetStaticProps } from 'next'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'

function Blog({ BlogPosts }: any) {

    return (
        <>

            <PageHead title="Blog | Cable Movers" description="Planning a Move? Cable Movers can help you find the best Internet and TV Service Provider. Find best deals on Cable and High Speed Internet." url="https://www.cablemovers.net/blog" />

            <PageBanner title="Blog" />
            <main className="py-16 max-w-screen-lg mx-auto">

                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                    {
                        BlogPosts.map((item: any, idx: number) => {
                            return (
                                <>

                                    <Blogpost key={idx} data={item} />

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