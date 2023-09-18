import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
//import { useQuery } from '@apollo/client';
//import { ProviderByCITES } from '@/config/query';

import Loader from '../../public/images/loader.gif';


const query = `
query zones($zipcode: String = "") {
   zones(where: {title: $zipcode}) {
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
  const [loader, setloader] = useState<boolean>(false);


  function handleState() {
    const variables = {
      zipcode: zipcode
    };

    async function fetchData() {
      setloader(true);
      const response = await fetch('https://cblproject.cablemovers.net/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables: variables }),
      });
      const respons = await response.json();

      if (respons) {
        setloader(false);
        router.push(`/${respons.data.zones.nodes[0].states.nodes[0].slug}/${respons.data.zones.nodes[0].cities.nodes[0].slug}?zipcode=${zipcode}&type=internet`);
      }
      else {
        setloader(false);
      }


    }
    fetchData();
    // console.log("🚀  file: test.jsx:43  fetchData ~ data:", get_state); 

  }

  return (
    <>
      {loader ? <div className='fixed z-50 inset-0 bg-black/60 flex items-center flex-col justify-center'><div className="custom-loader"></div></div> :

        <div className="relative flex items-center w-full sm:px-12 px-6 m-auto">
          <FaMagnifyingGlass className="absolute ml-3" />
          <input type="text" placeholder="Enter Zip Code" name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
          <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md" onClick={handleState}>Search</button>
        </div>
      }
    </>
  )
}

export default SearchForm