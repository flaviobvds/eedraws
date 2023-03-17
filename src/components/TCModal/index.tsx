import Modal from 'react-modal';
import { FaTimes as CloseButton, FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './tcModal.module.scss'

interface AboutModalProps {
    isOpen: boolean;
    setIsTCModalOpen: (state: boolean) => void;
}

Modal.setAppElement('body');


export function TCModal({ isOpen, setIsTCModalOpen }: AboutModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsTCModalOpen(false)}
            overlayClassName={styles.modalOverlay}
            className={'bg-slate-300 w-11/12 max-w-xl h-5/6 p-12 relative rounded focus:outline-none overflow-y-auto'}
        >
            <CloseButton
                onClick={() => setIsTCModalOpen(false)}
                className={'absolute right-6 top-6 border-0 bg-transparent text-black opacity-70 cursor-pointer hover:opacity-50'}
            />

            <h1 className={'text-3xl w-full bg-red-700 text-white rounded text-center mb-10'}>
                Terms & Conditions
            </h1>

            <p className={'mt-6 text-base text-justify'}>
                Welcome to EE Draws Notifier. Our service is designed to provide free notifications to users 
                regarding new rounds of invitation for Canada's Express Entry system.
                By using our service, you agree to be bound by the following terms and conditions:
            </p>

            <h2 className={'mt-6 text-base font-bold text-justify text-red-700'}>
                1. Acceptance of Terms
            </h2>

            <p className={'mt-3 text-base text-justify'}>
                By accessing or using our services, you agree to be bound by these Terms & Conditions. 
                If you do not agree to these Terms & Conditions, you may not use our service.
            </p>

            <h2 className={'mt-6 text-base font-bold text-justify text-red-700'}>
                2. Privacy Policy
            </h2>

            <p className={'mt-3 text-base text-justify'}>
                We take the privacy of our users seriously. We use your email address only to send you 
                notifications regarding new rounds of invitation for Canada's Express Entry system. We do not 
                use your email address for any other purpose. We do not share your email address with any 
                third-party service. We retain your email address as long as you remain subscribed to our service. 
                If you unsubscribe from our service, we will permanently delete your email address from our 
                database.
            </p>

            <h2 className={'mt-6 text-base font-bold text-justify text-red-700'}>
                3. Pricing
            </h2>

            <p className={'mt-3 text-base text-justify'}>
                The notifications provided by us are free and will remain free. You will not be charged for using
                any of our services.
            </p>

            <h2 className={'mt-6 text-base font-bold text-justify text-red-700'}>
                4. Unsubscribe
            </h2>

            <p className={'mt-3 text-base text-justify'}>
                Users can unsubscribe from our service at any time by clicking on the unsubscribe link 
                provided in each email. Once a user unsubscribes, all data provided by the user will be 
                permanently deleted.
            </p>

            <p className={'mt-8 text-base text-justify'}>
                By using EE Draws Notifier, you acknowledge that you have read, understood, and agreed to 
                these Terms & Conditions. If you have any questions or concerns about our service or these 
                Terms & Conditions, please 
                <a 
                    href="mailto:donotreply@eedraws.online"
                    className='ml-1 text-red-700 hover:underline'
                >
                    contact us
                </a>
                .
            </p>      
            
        </Modal>
    )
}