import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
//import { useQuery } from '@apollo/client';
//import { ProviderByCITES } from '@/config/query';


const query = `
query allZone($zipcode: String = "") {
   allZone(where: {title: $zipcode}) {
     nodes {
       title
       cities {
         nodes {
           name
           slug
         }
       }
       states {
         nodes {
           name
           slug
         }
       }
     }
   }
 }
`;




const SearchForm = () => {
    const [zipcode, setzipcode] = useState<string>();
    const [pro_type, setpro_type] = useState<string>();
    const router = useRouter();
    // const [get_city, set_city] = useState<string>();
    // const [get_state,set_state] = useState<string>();  
    // const [get_res , set_res] = useState<any>();
 
    function handleState() {     
 
      console.log(zipcode);
       const variables = {
        zipcode: zipcode // Replace with the actual user ID
      };
     
 
       async function fetchData() {

          const response = await fetch('http://localhost/clients/cbl/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query , variables: variables }),
          });
          const respons = await response.json();
         

          //set_city(respons.data.allZone.nodes[0].cities.nodes[0].slug);
          //set_state(respons.data.allZone.nodes[0].states.nodes[0].slug);

        //  r_city = respons.data.allZone.nodes[0];
       //   console.log("Res", respons.data.allZone.nodes[0]);
          // var r_city ; respons.data.allZone.nodes[0].cities.nodes[0].slug;
        //   var r_state ; respons.data.allZone.nodes[0].states.nodes[0].slug;

         //  console.log("r_city:", r_city);
          router.push(`/${respons.data.allZone.nodes[0].states.nodes[0].slug}/${respons.data.allZone.nodes[0].cities.nodes[0].slug}?zipcode=${zipcode}&type=tv`);

        }
        fetchData();

      
       // console.log("🚀  file: test.jsx:43  fetchData ~ data:", get_state);
     
 
    

       }

    return (
        <>
            <div className="relative flex items-center w-full sm:px-12 px-6 mt-6 md:mt-10">
                <FaMagnifyingGlass className="absolute ml-3" />
                <input type="text" placeholder="Enter Zip Code" name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
                <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md" onClick={handleState}>Search</button>
            </div>
        </>
    )
}

export default SearchForm