import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>EE Draws Notifier</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex">
                <div className="grid grid-cols-2 m-auto h-5/6 w-11/12 bg-white bg-opacity-20 shadow-2xl backdrop-blur">
                    <div className="ml-10 flex flex-col justify-center">
                        <h1 className="font-sans text-5xl font-bold text-red-700">
                            Never miss a new <br />
                            Express Entry<br />
                            draw again
                        </h1>
                        <h2 className="mt-10 text-neutral-700 font-bold">
                            Subscribe ang get instant notifications <br />
                            on every new draw. 
                            <span className='text-red-700 font-bold'> It's free!</span>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <input 
                            placeholder='E-mail'
                            className='w-1/2 leading-10' 
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
