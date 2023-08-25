import Faqs_Sec from '@/components/faqs';
import Pricing_Plan from '@/components/provider/pricing-plan';
import SearchForm from '@/components/searchform'
import { Faqs_Data } from '@/const/exports';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query';





export default function Cities_com({my_city , city_data}:any) {  

  const [provider_data,set_provider_data] = useState<any>();
  console.log("🚀 ~ file: index.tsx:18 ~ Cities_com ~ provider_data:", provider_data)

  



  const city_array = city_data?.map((item:any) =>  item.title);
  const resultString =  city_array?.join(',') ;
  console.log("CityData", resultString);
  const query = `
  query {
    postsByCategory(categoryId: 1) {
      title
      content
    }
  }
  `;
  //console.log(query);
  
  // Now you can use the 'graphqlQuery' string in your GraphQL request
  // Make sure to pass the 'compareValue' as a variable when making the request
  


  useEffect( () => {   
       async function fetchData() {       

        try {
          const response = await fetch(`http://cblproject.aspactglobal.com/wp-json/custom/v1/providers?internet_services=${resultString}`);          
          const respons = await response.json();
          console.log("data:", respons);
          set_provider_data(respons.providers);
          
        } catch (error) {
            console.error("Error:", error);
        }


  
      }
      fetchData();
} , [])

 
 
 
  return (
    <>
     List of All Cities
     <ul> {provider_data?.map( (item:any) => (
        <>
          <li>{item.title}  Price {item.pro_price} speed {item.pro_speed} pro_phone {item.pro_phone}  </li>
          </>
      ) 
      
          
      
     )}</ul>

     
    </>
  )
}


