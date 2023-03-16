import { FaCheck } from "react-icons/fa";

interface UnsubscribedProps {
    email: string
}

export function Unsubscribed({email}: UnsubscribedProps) {
    return(
        <div className='flex flex-col items-center justify-center'>
            <FaCheck 
                size='80'
                color='#B91C1C'
            />

            <h2 className='mt-4 text-center'>
                <span className='text-red-700 font-bold'>
                    You have unsubscribed
                </span> <br/>

                We removed the email <span className='text-red-700'>{email}</span> from our database. <br/>
                You will no longer receive any emails from us.
            </h2>
        </div>
    )
}