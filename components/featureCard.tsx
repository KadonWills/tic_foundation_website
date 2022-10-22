import React from 'react'
import Image from 'next/image'

type FeatureCardProps = {
    image?: string | JSX.Element ,
    title: string,
    description: string
}

const FeatureCard = ({image, title, description} : FeatureCardProps) => {


    return (

        <div className="shadow-lg rounded-2xl w-64 p-4 bg-white  overflow-hidden relative">
            
            {
                /**If given image is a path */
                ((image && (typeof image === "string")) && (
                    <Image alt="moto" src={image} loading='lazy' height={"100%"} width={"100%"} className="absolute -right-16 -bottom-16 h-40 w-40 mb-4" />        
                )) 
                
                ??
                /**If given image is a jsx element */
                ((image && !(typeof image === "string")) && image )
            }
            <div className="w-4/6">
                <p className="text-gray-800 text-lg font-medium mb-2">
                    {title}
                </p>
                <p className="text-gray-400 text-xs">
                    {description}
                </p>
            </div>
        </div>

    )
}

export default FeatureCard