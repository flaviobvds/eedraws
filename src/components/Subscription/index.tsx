import { FormEvent, useState } from "react"

import { api } from "@/services/api";
import { LoadingScreen } from "../LoadingScreen";
import { SignUpForm } from "../SignUpForm";
import { SuccessScreen } from "../SuccessScreen";

export function Subscription() {

    const [email, setEmail] = useState('')
    const [agreeTC, setAgreeTC] = useState(false)
    const [isLoading, setIsLoading] = useState<Boolean | null>(null) // null at start, false when finish loading

    function validateEmail(emailAdress: string) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    async function handleSubmitForm(e: FormEvent) {
        e.preventDefault();

        const isValidEmail = (validateEmail(email));
        if (email && isValidEmail) {

            if (agreeTC) {

                setIsLoading(true);
                await api.post('/subscribe', {
                    email,
                })
                setIsLoading(false);

            } else {
                alert('To subscribe, you must accept the Terms & Conditions')
            }

        } else {
            alert('You must inform a valid email address')
        }
    }

    
    if (isLoading) {
        return <LoadingScreen />
    }

    if (isLoading === false) {
        return <SuccessScreen />
    }

    return (
        <SignUpForm
            handleSubmitForm={handleSubmitForm}
            setEmail={setEmail}
            setAgreeTC={setAgreeTC}
        />
    )
}