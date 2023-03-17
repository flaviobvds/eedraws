import {MongoClient, Db} from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'
import { welcomeEmailHtml } from './emailHtmlTemplates/welcomeEmailHtml';

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
    if (cachedDb) {
        return cachedDb
    }

    const client = await MongoClient.connect(uri)
    const db = client.db('eedraws')
    cachedDb = db;
    return db;
}

async function sendGridMail(userMail: string, unsubsribeLink: string) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    const msg = {
        to: userMail,
        from: 'EE Draws Notifier <donotreply@eedraws.online>',
        subject: 'Welcome to EE Draws',
        text: "Welcome to EE Draws Notifier. It's very nice to see you here!",
        html: welcomeEmailHtml(unsubsribeLink)
    }

    await sgMail.send(msg)
        .then(() => {console.log('email sent')})
        .catch((error) => {console.log(error)})
    ;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const email: string = req.body.email
        console.log(email)

        const db = await connectToDatabase(process.env.MONGODB_URI!)
        const collection = db.collection('subscribers')

        // Check if user already exists. If it doesn't, create a new one.
        const userExists = await collection.findOne({email}) != null
        
        if (userExists) {
            return res.status(409).send('User already Exists')
        } else {
            
            const document = await collection.insertOne({
                email,
                subscribedAt: new Date()
            })
            const unsubsribeID = document.insertedId.toString();
            console.log(unsubsribeID)
            const unsubscribeLink = 'https://www.eedraws.online/unsubscribe/' + unsubsribeID
            
            await sendGridMail(email, unsubscribeLink)
            return res.status(201).json({ok: true})
        }

    // if method is not POST
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}