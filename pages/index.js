import Head from 'next/head'

import HomeComponent from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Surendra Galwa</title>
        <meta
          name="description"
          content="Surendra Galwa's Portfolio"
        />
        <meta name="google-site-verification" content="EmlYz-08tExjZMoRwNUu72m1ltuZeJx4Io7-iexB7kU" />
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
