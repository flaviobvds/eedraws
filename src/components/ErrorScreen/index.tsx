import { FaTimes } from 'react-icons/fa'

interface ErrorScreenProps {
    email: string
}

export function ErrorScreen({email}: ErrorScreenProps) {
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
        </div>
    )
}