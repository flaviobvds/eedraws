export function SignUpForm() {
    return (
        <form className="flex flex-col justify-center items-center">
            <input
                placeholder='E-mail'
                type={'email'}
                className='w-1/2 p-3 focus:outline-none border-l-2 border-red-700 placeholder:text-black rounded'
            />

            <div className='w-1/2 flex h-10 items-center ml-2'>
                <input
                    type={'checkbox'}
                    className='accent-red-700 cursor-pointer h-4 w-4'
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
                className='bg-red-700 text-white text-lg w-1/2 mt-7 h-9 rounded'
            >
                Sign up
            </button>
        </form>
    )
}