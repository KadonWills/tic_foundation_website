import Image from 'next/image'
import React from 'react'
import partners from '../utils/partners'

const Partners = () => {
  return (
    <section className='py-10'>
        <h2 className='text-center text-slate-800 text-3xl capitalize font-bold '>
            They Trust <span className='text-blue-600'>Us</span>.
            <p className='text-sm font-thin'>sponsors &amp; partners</p>
        </h2>

        <div className='flex flex-row justify-around  bg-slate-100 my-5 py-10 xl:px-20' >
            {
                partners.map((partner, index) => 
                    <div    
                        key={"partner-logo-" +(index+1)} 
                        className={`bg-transparent align-middle flex w-[100px]  h-[70px] relative p-0 `}>
                        <Image  src={partner.logo} alt={partner.name} layout={'fill'}
                            className={'object-center object-contain h-full m-0'}
                        />
                    </div>
                )
            }
            
            
        </div>


    </section>
  )
}

export default Partners