import React, { useState } from 'react'
import { CgArrowUp } from 'react-icons/cg'
import { useScrollPosition } from '../hooks/useScrollPosition';

const ScrollToTop = () => {

    const [showOnScroll, setShowOnScroll] = useState(false)

    const handleScrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    useScrollPosition(({ currPos }) => {
        const isShow = (currPos.y < -300.00) ; //prevPos.y
        if (isShow !== showOnScroll) setShowOnScroll(isShow);
    }, [showOnScroll])


    return (
        (showOnScroll) &&
        <div title='scroll to top'  onClick={handleScrollToTop} className='fixed ease-in-out cursor-pointer bottom-10 grid place-items-center rounded-br-lg rounded-tl-lg  rounded-bl-xl rounded-tr-xl right-5 h-[30px] w-[30px] bg-white hover:animate-bounce hover:bg-blue-600 text-blue-600 hover:text-white  shadow-xl hover:shadow-blue-800 duration-150 group'>
            <CgArrowUp className='text-2xl  ' />
        </div>
    )
}

export default ScrollToTop