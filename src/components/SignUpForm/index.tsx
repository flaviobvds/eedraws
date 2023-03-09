import { FormEvent, useState } from "react"

export function SignUpForm() {

    const [email, setEmail] = useState('')
    const [agreeTC, setAgreeTC] = useState(false)

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        console.log(email)
        console.log(agreeTC)
    }

    return (
        <form
            className="flex flex-col mt-5 lg:justify-center lg:mt-0 sm:items-center"
            onSubmit={handleSubmitForm}
        >
            <input
                placeholder='E-mail'
                type={'email'}
                onChange={e => setEmail(e.target.value)}
                className='p-3 focus:outline-none border-l-2 border-red-700 placeholder:text-black rounded 
                    ml-5 w-10/12 max-w-sm
                    sm:w-6/12
                    md:w-5/12 md:ml-0
                    lg:w-3/4 lg:max-w-none
                    xl:w-7/12
                '
            />

            <div className='flex h-14 items-center mt-4 ml-5 w-11/12 
                sm:w-6/12
                md:w-5/12 md:ml-0
                lg:w-3/4 lg:mt-0 lg:ml-0 lg:justify-center
                xl:w-7/12'
            >
                <input
                    type={'checkbox'}
                    className='accent-red-700 cursor-pointer h-4 w-4'
                    onChange={e => setAgreeTC(e.target.checked)}
                />
                <span className='inline-block my-auto ml-3'>
                    I agree with the
                    <a
                        className='ml-1 underline text-red-700 cursor-pointer'
                    >
                        Terms and Conditions
                    </a>
                </span>
            </div>

            <button
                type='submit'
                className='bg-red-700 text-white text-lg w-1/2 mt-12 h-9 rounded mx-auto
                    sm:w-6/12
                    md:w-5/12
                    lg:w-3/4
                    xl:w-7/12
                    lg:mt-7'
            >
                Sign up
            </button>
        </form>
    )
}