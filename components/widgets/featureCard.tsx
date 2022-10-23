import React from 'react'
import Image from 'next/image'

type FeatureCardProps = {
    image?: string | JSX.Element ,
    title: string,
    description: string
}

const FeatureCard = ({image, title, description} : FeatureCardProps) => {


    return (

        <div className=" group shadow-lg hover:scale-105 duration-200 hover:border-2 border-blue-600 border-dashed rounded-2xl w-64 p-4 bg-white m-4  overflow-hidden relative">
            
            <div className='absolute -right-16 -bottom-16 h-40 w-40 mb-4 bg-sprinkle bg-cover'>

            
            {
                /**If given image is a path */
                ((image && (typeof image === "string")) && (
                    <Image alt={title} src={image} loading='lazy' height={"100%"} width={"100%"} className="" />        
                )) 
                
                ??
                /**If given image is a jsx element */
                ((image && !(typeof image === "string")) && image )
            }
            </div>
            <div className="w-4/6">
                <p className="text-gray-800 group-hover:text-blue-600 text-lg font-bold mb-2">
                    {title}
                </p>
                <p className="text-gray-600 text-xs">
                    {description}
                </p>
            </div>
        </div>

    )
}

export default FeatureCard