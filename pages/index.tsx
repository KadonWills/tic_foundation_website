import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentProps } from 'react';
import Features from '../components/features';
import Footer from '../components/footer';
import Header from '../components/header';
import Partners from '../components/partners';
import Programs from '../components/programs';
import Testimonials from '../components/testimonials';
import SAP from './sap';

const Home: NextPage = (props) => {

    return <SAP />;

    // return ( 
    // <>
    //     <Head>
    //         <title>TiC Foundation | Tech Innovation Center Foundation</title>
    //         <link rel="icon" href="/favicon.ico" />
    //     </Head>

    //     <div className="dark" >
            
    //         <Header />
    //         <Programs />
    //         <Features />
    //         <Partners />
    //         <Testimonials />
    //         <Footer />
    //     </div>
    // </>
    // );
}

export default Home;