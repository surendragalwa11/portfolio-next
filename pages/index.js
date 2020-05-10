import Head from 'next/head'

import HomeComponent from '../components/Home';

export default function Home() {  
  return (
    <>
      <Head>
        <title>Surendra Galwa</title>
        <link rel='icon' href='/favs.ico' />
      </Head>
      <div className='page-container home-page'>
        <main>
          <HomeComponent />
        </main>
      </div>
    </>
  )
}
