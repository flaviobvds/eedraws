import { FormEvent } from "react"

interface SigunUpFormProps {
    handleSubmitForm: (e: FormEvent) => void,
    setEmail: (email: string) => void,
    setAgreeTC: (value: boolean) => void
    setIsTCModalOpen: (state: boolean) => void;
}

export function SignUpForm({handleSubmitForm, setEmail, setAgreeTC, setIsTCModalOpen}: SigunUpFormProps) {
    return (
        <form
            className="flex flex-col mt-5 sm:justify-center lg:mt-0 sm:items-center relative"
            onSubmit={handleSubmitForm}
        >
            <input
                placeholder='Email'
                type={'email'}
                onChange={e => setEmail(e.target.value)}
                className='p-3 focus:outline-none border-l-2 border-red-700 placeholder:text-black rounded
                    w-10/12 max-w-sm ml-5
                    sm:w-3/4 sm:max-w-none sm:ml-0
                    xl:w-7/12
                '
            />

            <div className='flex h-14 items-center w-11/12 ml-5
                sm:w-3/4 sm:ml-2
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
                        className='ml-1 hover:underline text-red-700 cursor-pointer'
                        onClick={() => {setIsTCModalOpen(true)}}
                    >
                        Terms & Conditions
                    </a>
                </span>
            </div>

            <button
                type='submit'
                className='bg-red-700 text-white text-lg w-1/2 mt-12 h-9 rounded mx-auto hover:opacity-80
                    sm:w-3/4
                    xl:w-7/12
                    lg:mt-7
                '
            >
                Sign up
            </button>
        </form>
    )
}