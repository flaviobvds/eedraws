import { SignUpForm } from '@/components/SignUpForm'
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
                <div className="grid grid-cols-2 m-auto h-5/6 w-11/12 bg-white 
                    bg-opacity-20 shadow-2xl backdrop-blur rounded"
                >
                    
                    <TitleSection/>
                    <SignUpForm />

                </div>
            </main>
        </>
    )
}
