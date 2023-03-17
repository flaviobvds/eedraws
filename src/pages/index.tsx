import { Footer } from '@/components/Footer'
import { Subscription } from '@/components/Subscription'
import { TitleSection } from '@/components/TitleSection'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>EE Draws Notifier</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex relative">

                <Link 
                    href='/'
                    className='absolute h-44 w-44 left-1/2 -top-11 hover:brightness-90 hover:outline-none
                    lg:left-4
                    max-lg:-translate-x-1/2'
                >
                    <img
                        src={'/images/white-horizontal-logo.svg'}
                        alt="logo"
                    />
                </Link>

                <div className="grid grid-rows-2
                    m-auto h-3/4 w-11/12 max-w-screen-xl bg-white bg-opacity-20 shadow-2xl backdrop-blur rounded
                    sm:grid-cols-2 sm:grid-rows-none"
                >
                    <TitleSection />
                    <Subscription />
                </div>

                <Footer />
            </main>
        </>
    )
}
