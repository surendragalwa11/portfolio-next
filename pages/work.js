import Head from 'next/head';

import WorkComponent from '../components/Work';

export default function Contact(){
    return(
        <div className='page-container'>
            <Head>
                <title>Surendra's Work</title>
            </Head>
            <main>
                <WorkComponent />
            </main>
        </div>
    );
}