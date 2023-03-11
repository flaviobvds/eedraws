import { ThreeCircles } from 'react-loader-spinner'

interface LoadingScreenProps {
    email: string
}

export function LoadingScreen({ email }: LoadingScreenProps) {
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