
import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { GET_POST_SLUG } from '@/config/query'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Head from 'next/head';

const Category = ({ SinglePost }: any) => {
  console.log("🚀 ~ file: [slug].tsx:10 ~ Category ~ posts:", SinglePost)



  return (
    <>
     <Head>
                <title>  {SinglePost.title}  | Cable Movers</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Planning a Move? Cable Movers can help you find the best Internet and TV Service Provider. Find best deals on Cable and High Speed Internet." />
                <meta property="og:url" content="https://www.cablemovers.net" />
                <meta property="og:site_name" content="Cable Movers" />
                <meta property="article:publisher" content="https://www.facebook.com/cablemovers.net" />
                <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
                <meta property="og:image" content="https://www.cablemovers.net/wp-content/uploads/2020/05/hero-index.png" />
                <meta property="og:image:width" content="700" />
                <meta property="og:image:height" content="467" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@cablemovers" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="26 minutes" />
            </Head>
      <PageBanner title={SinglePost.title} />
      <main className="py-16 max-w-screen-lg mx-auto">
        <div className="p-4">
          <Image src={SinglePost?.featuredImage?.node?.mediaItemUrl} alt="technology" className="rounded-lg" width={1280} height={853} />
          <div className="p-5">
            <div className="text-gray-700 mt-2 text-justify text-sm" dangerouslySetInnerHTML={{ __html: SinglePost?.content }} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Category


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const response = await apolloClient.query({
    query: GET_POST_SLUG,
    variables: {
      slug
    },
  });
  const SinglePost = response.data.postBy;

  return {
    props: {
      SinglePost,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
