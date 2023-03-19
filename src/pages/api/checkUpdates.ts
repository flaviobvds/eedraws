import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from 'mongodb'
import sgMail from '@sendgrid/mail'
import nodefetch from 'node-fetch'

import { newDrawEmailHtml } from "./emailHtmlTemplates/newDrawEmailHtml";

let cachedDb: Db | null = null;

export interface Rounds {
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


async function sendGridMail(email: string, unsubscribeId: string, roundData: Rounds) {
    const unsubscribeLink = 'https://www.eedraws.online/unsubscribe/' + unsubscribeId
    sgMail.setApiKey(process.env.SENDGRID_API_KEY_TEST!)
    console.log(email)

    const msg = {
        to: email,
        from: 'EE Draws Team <donotreply@eedraws.online>',
        subject: 'New Express Entry Draw',
        text: "IRCC just released a new Express Entry Draw!",
        html: newDrawEmailHtml(unsubscribeLink, roundData)
    }

    return sgMail.send(msg)
        .then(() => {return console.log('email sent')})
        .catch((error) => {return console.log(error.message)})
    ;
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

        // get emails from subscribersCollection and send an email to each of them
        const allUsers = await subscribersCollection.find().map(doc => doc).toArray()
        allUsers.forEach(async (user) => {
            console.log(user.email)
            await sendGridMail(user.email, user._id.toString(), thisDraw)
        })

        // insert newDraw on lastDrawsCollection
        await lastDrawsCollection.insertOne({
            drawNumber: thisDraw.drawNumber,
            drawDate: thisDraw.drawDate,
            drawName: thisDraw.drawName,
            drawCRS: thisDraw.drawCRS,
            drawSize: thisDraw.drawSize,
            createdAt: new Date()
        })
        
        return (res.send('new draw'))
    }

    return (res.send(thisDraw?.drawNumber))
}