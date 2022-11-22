import React from 'react'
import featuresList from '../utils/features'
import FeatureCard from './widgets/featureCard'

const Features = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-20 capitalize">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-slate-800">
                        What we provide to 
                        <span className='font-bold text-blue-600'> Startups</span>.
                    </h2>
                    <p className="text-xs  tracking-widest font-thin title-font mb-1">Our StartUp Accelerator Program</p>
                </div>
                <div className="flex flex-row md:mx-auto w-4/5 flex-wrap -m-4 justify-evenly">

                <>
                    {
                        featuresList.map((feature, index) => 
                                <FeatureCard 
                                    key={'feature-'+index}
                                    title={feature.title} 
                                    description={feature.description}
                                    image={feature.image} />
                        )
                    }
                </>


                    <div className="p-4 md:w-1/3 hidden">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features