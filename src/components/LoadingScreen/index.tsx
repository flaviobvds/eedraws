import { ThreeCircles } from 'react-loader-spinner'

export function LoadingScreen() {
    return (
        <div className='flex items-center justify-center'>
            <ThreeCircles
                height="100"
                width="100"
                color='#B91C1C'
            />
        </div>
    )
}