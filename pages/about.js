import Head from 'next/head';

import AboutComponent from '../components/About';

export default function About(){
    return(
        <div className='page-container'>
            <Head>
                <title>About Surendra</title>
            </Head>
            <main>
                <AboutComponent />
            </main>
        </div>
    );
}