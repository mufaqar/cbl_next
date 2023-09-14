import Link from 'next/link'
import React from 'react'
import IconBox from '../provider/icon-box'
import { GrChannel, GrInstallOption } from 'react-icons/gr'
import { GoDeviceMobile } from 'react-icons/go'

function FeatureBox({ Plans }: any) {
    return (
        
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                {Plans?.map((plan: any) => (                  
                          <IconBox key={plan.id}
                            icon={<GoDeviceMobile />}
                            title={plan.title}
                            content={plan.details}
                            />    
                ))}
        </div>
    )
}

export default FeatureBox