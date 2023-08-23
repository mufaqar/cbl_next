import React from 'react'


export default function OurState({allZone,allZone2}:any) {
    console.log(allZone2);
  return (
    <>
    <h2>State Page  List of Cites </h2>
    {/* <ul>

        {allZone?.map( (item:any , id:number) => {
            return (
                <>
                <li key={id}><Link href={`ae/${item.cities.nodes[0].slug}`}>  { item.cities.nodes[0].name} </Link></li>
                </>
            )

        } )}

    </ul> */}
    </>
  )
}



// export const getStaticProps: GetStaticProps = async (context) => {
//     const slug = context.params?.slug
//     const response = await apolloClient.query({
//       query: CITES_by_STATE,
//       variables: {
//         slug
//       },
//     });
//     const allZone = response.data.allZone.nodes;
//     const allZone2 = response.data.allZone;
  
//     return {
//       props: {
//         allZone,allZone2
//       },
//     };
//   }
  
//   export const getStaticPaths: GetStaticPaths = async () => {
//     const paths: any = [];
//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   }
  