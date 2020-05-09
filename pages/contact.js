import Head from 'next/head';

import ContactComponent from '../components/Contact';

export default function Contact(){
    return(
        <div className='page-container'>
            <Head>
                <title>Contact Surendra</title>
                <link rel='icon' href='/favs.ico' />
            </Head>
            <main>
                <ContactComponent />
            </main>
        </div>
    );
}