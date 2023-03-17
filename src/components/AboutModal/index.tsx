import Modal from 'react-modal';
import { FaTimes as CloseButton, FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './aboutModal.module.scss'

interface AboutModalProps {
    isOpen: boolean;
    setIsAboutModalOpen: (state: boolean) => void;
}

Modal.setAppElement('body');


export function AboutModal({ isOpen, setIsAboutModalOpen }: AboutModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsAboutModalOpen(false)}
            overlayClassName={styles.modalOverlay}
            className={'bg-slate-300 w-11/12 max-w-xl p-12 relative rounded focus:outline-none'}
        >
            <CloseButton
                onClick={() => setIsAboutModalOpen(false)}
                className={'absolute right-6 top-6 border-0 bg-transparent text-black opacity-70 cursor-pointer hover:opacity-50'}
            />

            <h1 className={'text-3xl w-full bg-red-700 text-white rounded text-center mb-10'}>
                About us
            </h1>

            <p className={'mt-6 text-base text-center'}>
                Hey there! EE Draws Notifier is a free tool designed to help you keep track of all
                new Express Entry draws as soon as they happen.
            </p>

            <p className={'mt-6 text-base text-center'}>
                Once you sign up, you will start receiving emails from us every time IRCC conducts a
                new Express Entry draw. You can also subscribe easily at any time with just one click.
            </p>

            <p className={'mt-6 text-base text-center'}>
                This is an individual portfolio project by Flavio Silva. If you liked it, please also check 
                it on Github and my Linkedin page.
            </p>

            <div className={'mt-12 flex justify-center'}>
                <button
                    className={"h-12 rounded-3xl text-white px-6 font-bold border-none mx-4 flex items-center justify-center bg-zinc-800 hover:brightness-75 transition"}
                    onClick={() => { window.open('https://github.com/flaviobvds/eedraws', '_blank') }}
                >
                    <FaGithub className={'mr-4 w-5 h-5'} /> GitHub
                </button>

                <button
                    className={"h-12 rounded-3xl text-white px-6 font-bold border-none mx-4 flex items-center justify-center bg-cyan-700 hover:brightness-75 transition"}
                    onClick={() => { window.open('https://www.linkedin.com/in/flaviobvdsilva/', '_blank') }}
                >
                    <FaLinkedin className={'mr-4 w-5 h-5'} /> LinkedIn
                </button>

            </div>
            
        </Modal>
    )
}