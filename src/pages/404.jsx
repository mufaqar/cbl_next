import Link from 'next/link'
import React, { useEffect } from 'react'

const NotFound = () => {
     const allBlogs = `
     query allBlogs {
       posts(first: 100000) {
         nodes {
           date
           slug
         }
       }    
     }
   `;
     useEffect(()=>{
          async function fetchBlogs() {
               const responseForBlogs = await fetch('https://cblproject.cablemovers.net/graphql', {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({ allBlogs }),
               });
               const { data } = await responseForBlogs.json();
               return data;
             }
             const blogslist = await fetchBlogs()
             console.log('blogslist', blogslist)
     },[])

     return (
          <section>
               <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                         <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                         <p className="mb-4 text-3xl tracking-tight font-bold ">Something's missing.</p>
                         <p className="mb-4 text-lg font-light">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                         <Link href="/" className="inline-flex focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 bg-black text-white">Back to Homepage</Link>
                    </div>
               </div>
          </section>
     )
}

export default NotFound