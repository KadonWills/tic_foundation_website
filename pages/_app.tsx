import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import ScrollToTop from '../components/widgets/scrollToTop';

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            <Component {...pageProps} />
            <ScrollToTop />
        </>
    )
}

export default MyApp