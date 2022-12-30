import React, { useState } from 'react'


const SapCountdown = () => {

    const [deadline, setDeadline] = useState(timeDiffCalc(new Date("15 Jan 2023 12:00:00")))
    const {days, hours, minutes, seconds} = deadline

    setInterval(
        () => {
            setDeadline(timeDiffCalc(new Date("15 Jan 2023 12:00:00")))
        }
        , 1000
    )

    return (
        <div>

            <section className="bg-gradient bg-blue-500 dark:bg-gray-800 py-8 md:py-16">
                <div className="max-w-5xl mx-auto px-5 box-content">
                    <div className="flex items-center flex-col md:flex-row -mx-5">
                        <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
                            <h6 className="uppercase font-semibold text-xs md:text-base text-blue-800 dark:text-gray-100">
                                Start Up's Registration Deadline
                            </h6>
                            <h3 className="font-bold font-heading text-2xl md:text-3xl text-white">
                                15 <sup >th</sup> January 2023
                            </h3>
                            <h3 className="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                                @ 12:00 AM
                            </h3>
                            <div className="mt-4 w-full md:w-44">
                                <a href='https://docs.google.com/forms/d/1m3S9AKbFxEXd2VIdyampszRbF_UNP-7IK8n3JeDipi4' target={'_blank'} className="py-2 px-4  bg-white hover:bg-yellow-400 hover:text-slate-800 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 hover:bg-blue-500 hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                                    Register Now
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-auto px-5">
                            <div className="flex justify-center text-white text-center">
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            {days}
                                        </span>
                                    </div>
                                    <div className="opacity-75 text-xs mt-3 uppercase">
                                        Day
                                    </div>
                                </div>
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            {hours}
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Hour
                                    </div>
                                </div>
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            {minutes}
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Min
                                    </div>
                                </div>
                                <div className=" w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            {seconds}
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Second
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


const timeDiffCalc = (dateFuture = new Date() ) => {
    let dateNow = new Date();
    let dateDiff = dateFuture.getTime() - dateNow.getTime();

    let diffInMilliSeconds = Math.abs(dateDiff) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    
    // calculate seconds
    const seconds = Math.floor((diffInMilliSeconds )) % 60;
    diffInMilliSeconds -= seconds * 60;

    let _difference = '';
    if (days > 0) {
        _difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    _difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    _difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    let difference = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        toString: () => difference
    }
    return difference;
}


export default SapCountdown