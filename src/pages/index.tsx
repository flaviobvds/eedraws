import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>EE Draws Notifier</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex">
                <div className="flex m-auto h-5/6 w-11/12 bg-white bg-opacity-20 shadow-2xl">
                    <h1 className="font-sans text-5xl font-bold text-red-700">
                        Get notified in every <br/>
                        Express Entry <br/>
                        draw
                    </h1>
                </div>
            </main>
        </>
    )
}
