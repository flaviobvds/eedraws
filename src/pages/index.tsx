import { Footer } from '@/components/Footer'
import { Subscription } from '@/components/Subscription'
import { TitleSection } from '@/components/TitleSection'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>EE Draws Notifier</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex">
                <div className="grid grid-rows-2
                    m-auto h-5/6 w-11/12 max-w-screen-xl bg-white bg-opacity-20 shadow-2xl backdrop-blur rounded
                    sm:grid-cols-2 sm:grid-rows-none"
                >
                    <TitleSection/>
                    <Subscription />
                </div>

                <Footer/>
            </main>
        </>
    )
}
