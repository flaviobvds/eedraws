import { useRouter } from 'next/router'
import { api } from "@/services/api";


async function unsubscribeUser(id: string) {
    await api.post('/unsubscribe',{
        id
    })
}

export default function Unsubscribe() {
    const router = useRouter();
    const {unsubscribeId} = router.query;

    unsubscribeUser(unsubscribeId as string)
    return (
        <main>
            <h1>Successfully Unsubscribed!</h1>
            <p>We're sad to see you go!</p>
        </main>
    )
}

