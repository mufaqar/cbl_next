
import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { GET_POST_SLUG } from '@/config/query'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const Category = ({ SinglePost }: any) => {
  console.log("🚀 ~ file: [slug].tsx:10 ~ Category ~ posts:", SinglePost)



  return (
    <>
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
