export function Footer() {
    
    function handleOpenAbout() {
        console.log('About Open')
    }

    function handleOpenTC() {
        console.log('TC Open')
    }

    
    return (
        <nav className={"flex absolute bottom-3 inset-x-0 justify-center"}>
            <ul className="px-5 text-lg border-r-2 border-stone-400">
                <a onClick={handleOpenAbout} className="hover:text-red-700 hover:underline cursor-pointer">
                    About us
                </a>
            </ul>
            <ul className="px-5 text-lg ">
                <a onClick={handleOpenTC} className="hover:text-red-700 hover:underline cursor-pointer">
                    Terms & Conditions
                </a>
            </ul>
        </nav>
    )
}