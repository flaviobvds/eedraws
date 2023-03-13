import { FaTimes } from 'react-icons/fa'

interface ErrorScreenProps {
    email: string
    setStatus: (status: string) => void
}

export function ErrorScreen({email, setStatus}: ErrorScreenProps) {

    function handleTryAgain() {
        setStatus('')
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <FaTimes 
                size='80'
                color='#B91C1C'
            />

            <h2 className='mt-4 text-center'>
                <span className='text-red-700 font-bold'>
                    Oops! Something went wrong.
                </span> <br/>

                We couldn't subscribe <span className='text-red-700'>{email}</span> <br/>
                Check your email and try again.

            </h2>

            <button
                type='button'
                onClick={handleTryAgain}
                className='bg-red-700 text-white text-lg w-1/2 mt-12 h-9 rounded mx-auto hover:opacity-80
                    sm:w-3/4
                    xl:w-7/12
                    lg:mt-7
                '
            >
                Try again
            </button>
        </div>
    )
}