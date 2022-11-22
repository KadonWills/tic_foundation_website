import type { NextPage } from 'next';
import Head from 'next/head';
import Benefits from '../components/SAP/benefits';
import Blog from '../components/SAP/blog';
import Branches from '../components/SAP/branches';
import CTA from '../components/SAP/cta';
import CTAAlt from '../components/SAP/cta_alt';
import Features from '../components/SAP/features';
import Footer from '../components/footer';
import Hero from '../components/SAP/hero';
import Remote from '../components/SAP/remote';
import SapCountdown from '../components/widgets/sapCountdown';

const SAP: NextPage = () => {
    return (
        <>
            <Head>
                <title>TiC Foundation | Tic Startup Accelerator Program | TiC SAP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
            <Benefits />
            <Features /> 

            <SapCountdown />
            <Blog />
            {/*<CTA />
            <Remote />
            <Branches />*/}
            <CTAAlt /> 
            <Footer />
        </>
    );
};

export default SAP;
