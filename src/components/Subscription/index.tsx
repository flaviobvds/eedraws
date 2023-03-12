import { FormEvent, useState } from "react"

import { api } from "@/services/api";
import { LoadingScreen } from "../LoadingScreen";
import { SignUpForm } from "../SignUpForm";
import { SuccessScreen } from "../SuccessScreen";
import { ErrorScreen } from "../ErrorScreen";

export function Subscription() {

    const [email, setEmail] = useState('')
    const [agreeTC, setAgreeTC] = useState(false)
    const [status, setStatus] = useState('')

    function validateEmail(emailAdress: string) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    async function handleSubmitForm(e: FormEvent) {
        e.preventDefault();

        const isValidEmail = (validateEmail(email));
        if (email && isValidEmail) {

            if (agreeTC) {

                setStatus('loading');
                try {
                    await api.post('/subscribe', {
                        email,
                    })
                    setStatus('success');
                }
                catch(err) {
                    setStatus('failed');
                }

            } else {
                alert('To subscribe, you must accept the Terms & Conditions')
            }

        } else {
            alert('You must inform a valid email address')
        }
    }


    if (status === 'loading') {
        return <LoadingScreen />
    }

    if (status === 'success') {
        return <SuccessScreen email={email} />
    }

    if (status === 'failed') {
        return <ErrorScreen email={email} />
    }

    return (
        <SignUpForm
            handleSubmitForm={handleSubmitForm}
            setEmail={setEmail}
            setAgreeTC={setAgreeTC}
        />
    )
}