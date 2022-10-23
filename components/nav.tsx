import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import navigation from '../utils/navigation';
import Logo from '../public/img/logo light.png'
import Image from 'next/image';

const NavBar = () => {
    return (
        // <div className="flex justify-between align-middle w-full m-0 px-10 py-2 pb-0 bg-gradient-to-br from-[#ffffff13] via-[#89898913] to-[#ffffff13] bg-opacity-5 rounded-lg text-base">
        <div className="fixed  z-[1000] flex justify-between align-middle w-[98%] top-5 left-1/2 -translate-x-1/2 m-0 px-10  pb-0 bg-blue-700 bg-opacity-90 backdrop-blur-md rounded-lg text-base text-white">
            <span className="mr-auto my-auto">
                <Image src={Logo} alt='TiC Logo' loading='lazy' height={60} width={60}  />
            </span>
            <span className='hidden md:grid align-middle text-center min-h-full my-auto'>
                <ul className="flex justify-center text-justify text-sm align-middle space-x-5">

                    {
                        navigation.map((navLink, index) => 
                            <li className='align-middle h-full inline p-1' key={`nav-link-${index+1}`}>
                                <a href={navLink.route} className="py-1   capitalize hover:animate-pulse duration-75">{navLink.label}</a>
                            </li>
                        )
                    }

                    
                    <li>
                        <button className="px-3 py-1 m-0 align-middle box-border hover:bg-red-500 hover:text-white bg-white text-blue-600 duration-200 rounded" > Register </button>
                    </li>
                
                </ul>
            </span>
            <div className='flex md:hidden h-max min-w-max  py-5   m-0'>
                <a href="/" rel="noopener noreferrer" className='text-3xl   hover:scale-110 duration-300 my-auto' >
                    <CgMenuRightAlt />
                </a>
            </div>
        </div>
    )
}

export default NavBar