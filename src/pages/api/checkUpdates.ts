import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db, ObjectId } from 'mongodb'
import sgMail from '@sendgrid/mail'
import nodefetch from 'node-fetch'

let cachedDb: Db | null = null;

interface Rounds {
    drawNumber: string,
    drawNumberURL: string,
    drawDate: string,
    drawDateFull: string,
    drawName: string,
    drawSize: string,
    drawCRS: string,
    mitext: string,
    DrawText1: string,
    drawText2: string,
    drawDateTime: string,
    drawCutOff: string,
    drawDistributionAsOn: string,
    dd1: string,
    dd2: string,
    dd3: string,
    dd4: string,
    dd5: string,
    dd6: string,
    dd7: string,
    dd8: string,
    dd9: string,
    dd10: string,
    dd11: string,
    dd12: string,
    dd13: string,
    dd14: string,
    dd15: string,
    dd16: string,
    dd17: string,
    dd18: string,
}

interface JSONResponse {
    classes: string,
    rounds: Rounds[]
}

async function connectToDatabase(uri: string) {
    
    if (cachedDb) {
        return cachedDb
    }
    
    const client = await MongoClient.connect(uri)
    const db = client.db('eedraws')
    cachedDb = db;
    return db;
}

function html(unsubscribeLink: string) {
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

async function sendGridMail(email: string, unsubscribeId: string) {
    const unsubscribeLink = 'https://eedraws.online/unsubscribe/' + unsubscribeId
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    const msg = {
        to: email,
        from: 'EE Draws Team <donotreply@eedraws.online>',
        subject: 'New Express Entry Draw',
        text: "IRCC just released a new Express Entry Draw!",
        html: html(unsubscribeLink)
    }

    await sgMail.send(msg).then(() => {
        console.log('email sent')
    }).catch((error) => {
        console.log(error)
    })


}

const url = 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    console.time('fetch')
    const data = await nodefetch(url)
    console.timeEnd('fetch')

    const json: JSONResponse = (await data.json()) as any;
    const thisDraw = json.rounds[0]

    const db = await connectToDatabase(process.env.MONGODB_URI!)
    const lastDrawsCollection = db.collection('lastDraws')
    const subscribersCollection = db.collection('subscribers')

    const recentDraw = await lastDrawsCollection.find({}).sort({ createdAt: -1 }).next();

    if (thisDraw.drawNumber != recentDraw?.drawNumber) {
        
        // insert newDraw on lastDrawsCollection
        await lastDrawsCollection.insertOne({
            drawNumber: thisDraw.drawNumber,
            drawDate: thisDraw.drawDate,
            drawName: thisDraw.drawName,
            drawCRS: thisDraw.drawCRS,
            drawSize: thisDraw.drawSize,
            createdAt: new Date()
        })

        // get emails from subscribersCollection
        const allUsers = await subscribersCollection.find().map(doc => doc).toArray()
        allUsers.forEach((user) => sendGridMail(user.email, user._id.toString()))
        
        return (res.send('new draw'))
    }

    return (res.send(thisDraw?.drawNumber))
}