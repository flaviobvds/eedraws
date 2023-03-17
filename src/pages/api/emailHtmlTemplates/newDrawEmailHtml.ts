export function newDrawEmailHtml(unsubscribeLink: string) {
    const html = 
    `<table style="border-collapse: collapse; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;">
        <tbody>
            <tr style="height: 18px; background-color: #b91c1c;">
                <td style="width: 100%; height: 18px; text-align: center;">
                    <h1><span style="color: #ffffff;">Welcome!</span></h1>
                </td>
            </tr>
            <tr style="height: 80px;">
                <td style="width: 100%; height: 120px;">
                    <p style="text-align: center;">You have successfully signed up to EE Draws Notifier and, from now on, you won't miss any new Express Entry draw. And the best of all: <span style="color: #b91c1c;"><strong>it's free!</strong></span></p>
                    <p style="text-align: center;">&nbsp;</p>
                    <p style="text-align: center;"><span><a style="color: #b91c1c;" href="${unsubscribeLink}">Unsubscribe</a></span></p>
                </td>
            </tr>
        </tbody>
    </table>`
    
    return html
}