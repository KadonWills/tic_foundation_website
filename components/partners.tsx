import Image from 'next/image'
import React from 'react'
import partners from '../utils/partners'

const Partners = () => {
    return (
        <section className='container py-16 '>
            <h2 className='text-center text-slate-800 text-3xl capitalize  '>
                They Trust <span className='text-blue-600 font-bold'>Us</span>.
                <p className='text-sm font-thin'>sponsors &amp; partners</p>
            </h2>

            <div className='flex flex-row justify-around  bg-slate-100 my-20 py-10 xl:px-20' >
                {
                    partners.map((partner, index) =>
                        <a
                            key={"partner-logo-" + (index + 1)}
                            title={partner.name}
                            href={partner.website}
                            target="_blank"
                            className={`bg-transparent drop-shadow-sm hover:drop-shadow-lg filter grayscale hover:grayscale-0 duration-150 hover:scale-110 align-middle flex w-[150px]  h-[100px] relative p-0 `}>
                            <Image src={partner.logo} alt={partner.name} layout={'fill'}
                                className={'object-center object-contain h-full m-0'}
                            />
                        </a>
                    )
                }

            </div>
        </section>
    )
}

export default Partners