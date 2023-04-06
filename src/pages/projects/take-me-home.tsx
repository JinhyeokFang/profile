import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'

export default function TakeMeHome() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - take-me-home</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="take-me-home project" />
        <meta name="description" content="take-me-home project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/take-me-home" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="take-me-home project" />
        <meta property="og:description" content="take-me-home project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
      </Head>
      <main className={styles.main}>
        <FAB />
        <Title />
        <Footer />
      </main>
    </>
  )
}
