import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '@/components/Footer'
import { Subscription } from '@/components/Subscription'
import { TitleSection } from '@/components/TitleSection'
import { AboutModal } from '@/components/AboutModal'
import { TCModal } from '@/components/TCModal'

export default function Home() {
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
    const [isTCModalOpen, setIsTCModalOpen] = useState(false)

    return (
        <>
            <Head>
                <title>EE Draws Notifier</title>
            </Head>

            <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex relative">

                <div className="grid grid-rows-2
                    m-auto h-5/6 w-11/12 max-w-screen-xl bg-white bg-opacity-20 shadow-2xl backdrop-blur rounded
                    sm:grid-cols-2 sm:grid-rows-none"
                >
                    <TitleSection />
                    <Subscription setIsTCModalOpen={setIsTCModalOpen}/>
                </div>

                <Footer
                    setIsAboutModalOpen={setIsAboutModalOpen}
                    setIsTCModalOpen={setIsTCModalOpen}
                />

                <AboutModal
                    isOpen={isAboutModalOpen}
                    setIsAboutModalOpen={setIsAboutModalOpen}
                />

                <TCModal
                    isOpen={isTCModalOpen}
                    setIsTCModalOpen={setIsTCModalOpen}
                />


            </main>
        </>
    )
}
