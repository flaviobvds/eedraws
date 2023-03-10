export function Footer() {
    
    function handleOpenAbout() {
        console.log('About Open')
    }

    function handleOpenTC() {
        console.log('TC Open')
    }

    
    return (
        <nav className={"flex absolute bottom-2 mx-auto w-80 py-1 inset-x-0 text-black"}>
            <ul className="text-center text-sm border-r-2 border-stone-400 w-1/2 max-w-xs">
                <a onClick={handleOpenAbout} className="hover:underline cursor-pointer">
                    About us
                </a>
            </ul>
            <ul className="text-sm w-1/2 max-w-xs text-center">
                <a onClick={handleOpenTC} className="hover:underline cursor-pointer">
                    Terms & Conditions
                </a>
            </ul>
        </nav>
    )
}