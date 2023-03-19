export function welcomeEmailHtml(unsubscribeLink: string) {
    const html =
    `<table 
        style="border-collapse: collapse; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto; border: solid 1px #6F0202; border-left: solid 1px #6F0202;"
    >
        <tbody>
            <tr style="height: 18px; background-color: #b91c1c;">
                <td style="width: 100%; height: 80px; text-align: center; justify-content: center;">
                    <a 
                        href="https://www.eedraws.online/"
                        style="margin: auto 30px auto 0px; text-decoration:none; color: #b91c1c;"
                    >
                        <img 
                            style="height: 70px; width: 70px; display: inline-block; vertical-align:middle" 
                            src="https://www.eedraws.online/images/email-red-logo.png" 
                        />
                    </a>
                    <h2 style="display: inline-block;">
                        <span style="color: #ffffff;">Welcome!</span>
                    </h2>
                </td>
            </tr>
            <tr>
                <td style="padding:10px;">
                    <p style="text-align: center; color: #000000">
                        You have successfully signed up to EE Draws Notifier and, from now on, you won't 
                        miss any new Express Entry draw. And the best of all: 
                        <span style="color: #b91c1c;"><strong>it's free!</strong></span>
                    </p>
                    

                    <p style="text-align: center;">&nbsp;</p>
                    

                    <h2 style="text-align: center;">
                        <span style="color: #b91c1c;"><strong>How it works</strong></span>
                    </h2>
                    <p style="text-align: center; color: #000000">
                        Everytime IRCC conducts and publishes a new Express Entry Draw, we 
                        will send you an email immediatly informing you the type of draw conducted, 
                        its CRS cutoff score and the number of invitations issued. It is really 
                        <strong>as simple as that</strong>.
                    </p>
                    <p style="text-align: center; color: #000000">
                        Don't worry. As stated in our Terms &amp; Conditions, we won't use your email 
                        to send you any spam and we'll keep your information safe.
                    </p>


                    <p style="text-align: center;">&nbsp;</p>
                    

                    <h2 style="text-align: center;">
                        <span style="color: #b91c1c;"><strong>Can I unsubscribe?</strong></span>
                    </h2>
                    <p style="text-align: center; color: #000000">
                        Of course! If at any time you feel you're no longer interested in our notifications, 
                        you can simply 
                        <span style="color: #b91c1c;">
                            <a style="color: #b91c1c;" href="${unsubscribeLink}">
                                unsubscribe
                            </a>
                        </span>
                        .
                    </p>

                </td>
            </tr>
        </tbody>
    </table>`

    return html
}

