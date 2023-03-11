import { api } from "@/services/api";
import { FormEvent, useEffect, useState } from "react"
import { LoadingScreen } from "../LoadingScreen";
import { SignUpForm } from "../SignUpForm";

export function Subscription() {

    const [email, setEmail] = useState('')
    const [agreeTC, setAgreeTC] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

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
        return <LoadingScreen/>
    } else {
        return (
            <SignUpForm 
                handleSubmitForm={handleSubmitForm}
                setEmail={setEmail}
                setAgreeTC={setAgreeTC}
            />
        )
    }
}