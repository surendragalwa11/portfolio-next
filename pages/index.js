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
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Introducing Ready Made Portfolio for Software Engineers",
        "description": "This spring, Surendra is introducing the ready made portfolio template for all the developers.",
        "thumbnailUrl": [
          "https://i.picsum.photos/id/941/200/300.jpg",
          "https://i.picsum.photos/id/941/200/300.jpg",
          "https://i.picsum.photos/id/941/200/300.jpg"
        ],
        "uploadDate": "2016-03-31T08:00:00+08:00",
        "duration": "PT1M54S",
        "contentUrl": "https://www.youtube.com/watch?v=_mLTDwVQv1Y",
        "embedUrl": "https://www.example.com/embed/123",
            "interactionStatistic": {
            "@type": "InteractionCounter",
              "interactionType": {
            "@type": "http://schema.org/WatchAction"
      },
    "userInteractionCount": 5647018
  },
  "regionsAllowed": "NL"
}
        </script>
      </Head>
      <div className='page-container home-page'>
        <main>
          <HomeComponent />
        </main>
      </div>
    </>
  )
}
