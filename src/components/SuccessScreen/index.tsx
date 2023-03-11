import { FaCheck, FaCheckCircle } from 'react-icons/fa'

interface SuccessScreenProps {
    email: string
}

export function SuccessScreen({email}: SuccessScreenProps) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <FaCheck 
                size='80'
                color='#B91C1C'
            />

            <h2 className='mt-4 text-center'>
                <span className='text-red-700 font-bold'>
                    Success!
                </span> <br/>

                We sent a confirmation email to <span className='text-red-700'>{email}</span> <br/>
                If you can't find it, check your spam folder.

            </h2>
        </div>
    )
}