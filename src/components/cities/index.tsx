import Faqs_Sec from '@/components/faqs';
import Pricing_Plan from '@/components/provider/pricing-plan';
import SearchForm from '@/components/searchform'
import { Faqs_Data } from '@/const/exports';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query';





export default function Cities_com({my_city}:any) {  

 
  const query = `
  query {
    postsByCategory(categoryId: 1) {
      title
      content
    }
  }
  `;
  console.log(query);
  
  // Now you can use the 'graphqlQuery' string in your GraphQL request
  // Make sure to pass the 'compareValue' as a variable when making the request
  


  useEffect( () => {

    const variables = {
        city:my_city // Replace with the actual user ID
      };     

       async function fetchData() {          

        const response = await fetch('http://cblproject.aspactglobal.com/graphql', {
            method: 'POST',               
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query , variables }),
          });
          const respons = await response.json();  
          console.log("data:", respons);

      }
      fetchData();
})

 
 
 
  return (
    <>
     List of All Cities
    </>
  )
}


