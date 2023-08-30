import Faqs_Sec from '@/components/faqs';
import Pricing_Plan from '@/components/provider/pricing-plan';
import SearchForm from '@/components/searchform'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query';
export default function Cities_com({my_city , city_data , providers_data}:any) {  
console.log("🚀 ~ file: index.tsx:16 ~ Cities_com ~ providers_data:", providers_data) 
  return (
    <>
     List of All Cities
     <ul> 
      
      {providers_data?.providers?.map( (item:any) => (
        <>
          <li>{item.title}  Price {item.pro_price} speed {item.pro_speed} pro_phone {item.pro_phone}  </li>
          </>
      ) 
      
          
      
     )}
     
     </ul>

     
    </>
  )
}


