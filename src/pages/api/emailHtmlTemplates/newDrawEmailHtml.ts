import { Rounds } from "../checkUpdates"

export function newDrawEmailHtml(unsubscribeLink: string, roundData: Rounds) {
    const html =
    `<table 
        style="border-collapse: collapse; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto;  border-right: solid 1px #6F0202; border-left: solid 1px #6F0202"
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
                        <span style="color: #ffffff;">New Express Entry Draw</span>
                    </h2>
                </td>
            </tr>
            <tr>
                <td style="width: 100%; background-color:#DCDCDC;">
                    <p style="text-align: center;">&nbsp;</p>
                    <p style="text-align: center; color: #000000">
                        IRCC just released a new Express Entry draw:
                    </p>
                    
                    <table style="margin: 20px auto 50px auto; color: #000000;">
                        <tbody>
                            <tr>
                                <th style="text-align: left; width:38%">
                                    <b>Type:</b>
                                </th>
                                <th style="text-align: left; font-weight: normal;">
                                    ${roundData.drawName}
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <b>Invitations:</b>
                                </td>
                                <td>
                                    ${roundData.drawSize}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>CRS cutoff:</b>
                                </td>
                                <td>
                                    ${roundData.drawCRS}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Tie-Breaking:</b>
                                </td>
                                <td>
                                    ${roundData.drawCutOff}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Time of Round:</b>
                                </td>
                                <td>
                                    ${roundData.drawDateTime}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Link:</b>
                                </td>
                                <td>
                                    <a 
                                        style="color:#b91c1c;" 
                                        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html#results">
                                        Rounds of Invitations
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </tr>
                    <tr style="background-color: #6F0202; color: white;">
                        <td style="text-align: center; padding-top:10px; font-size:10px">
                            <b style="font-size:12px">Can I unsubscribe?</b>
                            <p style="text-align: justify; margin: 10px 20px;">
                                This is a 100% free notifications service! However, if at any time you feel 
                                you're no longer interested in our notifications, you can simply 
                                <a style="color: white;" href="${unsubscribeLink}">unsubscribe</a>.
                            </p>
                        </td>
                    </tr>
                </td>
            </tr>
        </tbody>
    </table>`

    return html
}