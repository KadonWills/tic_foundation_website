import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentProps } from 'react';
import Features from '../components/features';
import Header from '../components/header';
import Partners from '../components/partners';
import Programs from '../components/programs';
import Testimonials from '../components/testimonials';

const Home: NextPage = (props) => {
    return ( 
    <>
        <Head>
            <title>TiC Foundation | Tech Innovation Center Foundation</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="dark" >
            
            <Header />
            <Programs />
            <Features />
            <Partners />
            <Testimonials />
            
        </div>
    </>
    );
}

export default Home;