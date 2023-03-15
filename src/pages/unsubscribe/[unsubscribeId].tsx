import { useRouter } from 'next/router'
import { api } from "@/services/api";


async function unsubscribeUser(id: string) {
    await api.post('/unsubscribe', {
        id
    })
}

export default function Unsubscribe() {
    const router = useRouter();
    const { unsubscribeId } = router.query;

    function handleUnsubscribeButton() {
        unsubscribeUser(unsubscribeId as string)
    }

    return (
        <main className="bg-[url('/images/background.jpg')] h-screen bg-cover bg-no-repeat flex">
            <div className='m-auto h-5/6 w-11/12 max-w-screen-md bg-white bg-opacity-20 shadow-2xl backdrop-blur rounded flex flex-col justify-center'>
                <h1 className='text-red-700 font-bold text-3xl text-center mt-10 mb-5'>
                    We're sad to see you go
                </h1>

                <p className='text-center mb-10'>
                    We're sorry you're no longer interested in our notifications! <br />
                    If at any time you change your mind and decide to come back, we'll be waiting for you!
                </p>

                <button
                    type='button'
                    onClick={handleUnsubscribeButton}
                    className='bg-red-700 text-white text-lg w-1/2 mt-12 h-9 rounded mx-auto hover:opacity-80
                    sm:w-3/4
                    xl:w-7/12
                    lg:mt-7
                '
                >
                    Unsubscribe
                </button>
            </div>
        </main>
    )
}
