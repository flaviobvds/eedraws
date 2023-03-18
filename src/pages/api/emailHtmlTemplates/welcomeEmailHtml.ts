export function welcomeEmailHtml(unsubscribeLink: string) {
    const html =
    `<table style="border-collapse: collapse; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
        <tbody>
            <tr style="height: 18px; background-color: #b91c1c;">
            <td style="width: 100%; height: 80px; text-align: center; display: flex; justify-content: center;">
                <img 
                    style="height: 160px; width: 160px; margin-top: -40px; margin-left: -80px;" 
                    src="https://www.eedraws.online/images/red-logo.png" 
                />
                <h1 style="margin-top: auto; margin-bottom: auto;">
                    <span style="color: #ffffff;">Welcome!</span>
                </h1>
            </td>
            </tr>
            <tr style="height: 80px;">
                <td style="width: 100%; height: 120px;">
                    <p style="text-align: center;">You have successfully signed up to EE Draws Notifier and, from now on, you won't miss any new Express Entry draw. And the best of all: <span style="color: #b91c1c;"><strong>it's free!</strong></span></p>
                    <p style="text-align: center;">&nbsp;</p>
                    
                    <h2 style="text-align: center;"><span style="color: #b91c1c;"><strong>How it works</strong></span></h2>
                    <p style="text-align: center;"><span style="color: #000000;">Everytime IRCC conducts and publishes a new Express Entry Draw, we will send you an email immediatly informing you the type of draw conducted, its CRS cutoff score and the number of invitations issued. It is really <strong>as simple as that</strong>.</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Don't worry. As stated in our Terms &amp; Conditions, we won't use your email to send you any spam and we'll keep your information safe.</span></p>
                    <p style="text-align: center;">&nbsp;</p>
                    
                    <h2 style="text-align: center;"><span style="color: #b91c1c;"><strong>Can I unsubscribe?</strong></span></h2>
                    <p style="text-align: center;"><span style="color: #000000;">Of course! If at any time you feel you're no longer interested in our notifications, you can simply <span style="color: #b91c1c;"><a style="color: #b91c1c;" href="${unsubscribeLink}">unsubscribe</a></span>.</span></p>
                    <p style="text-align: center;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
    </table>`

    return html
}

