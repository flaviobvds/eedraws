import {MongoClient, Db} from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'

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

function html(unsubscribeLink: string) {
    const html = `
        <table style="border-collapse: collapse; width: 100%; height: 138px;">
        <tbody>
        <tr style="height: 18px; background-color: #b91c1c;">
        <td style="width: 100%; height: 18px; text-align: center;">
        <h1><span style="color: #ffffff;">Welcome!</span></h1>
        </td>
        </tr>
        <tr style="height: 120px;">
        <td style="width: 100%; height: 120px;">
        <p style="text-align: center;">You have successfully signed up to EE Draws Notifier and, from now on, you won't miss any new Express Entry draw. And the best of all: <span style="color: #b91c1c;"><strong>it's free!</strong></span></p>
        <h2 style="text-align: center;"><span style="color: #b91c1c;"><strong>How it works</strong></span></h2>
        <p style="text-align: center;"><span style="color: #000000;">Everytime IRCC conducts and publishes a new Express Entry Draw, we will send you an email immediatly informing you the type of draw conducted, its CRS cutoff score and the number of invitations issued. It is really <strong>as simple as that</strong>.</span></p>
        <p style="text-align: center;"><span style="color: #000000;">Don't worry. As stated in our Terms &amp; Conditions, we won't use your email to send you any spam and we'll keep your information safe.</span></p>
        <h2 style="text-align: center;"><span style="color: #b91c1c;"><strong>Can I unsubscribe?</strong></span></h2>
        <p style="text-align: center;"><span style="color: #000000;">Of course! If at any time you feel you're no longer interested in our notifications, you can simply <span style="color: #b91c1c;"><a style="color: #b91c1c;" href="${unsubscribeLink}">unsubscribe</a></span>.</span></p>
        <p style="text-align: center;">&nbsp;</p>
        </td>
        </tr>
        </tbody>
        </table>
    `
    return html
}


async function sendGridMail(userMail: string, unsubsribeLink: string) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    const msg = {
        to: userMail,
        from: 'EE Draws Team <donotreply@eedraws.online>',
        subject: 'Welcome to EE Draws',
        text: "Welcome to EE Draws. It's very nice to see you here!",
        html: html(unsubsribeLink)
    }

    await sgMail.send(msg).then(() => {
        console.log('email sent')
    }).catch((error) => {
        console.log(error)
    })
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
            const unsubscribeLink = 'https://www.eedraws.online/api/unsubscribe/' + unsubsribeID
            
            await sendGridMail(email, unsubscribeLink)
            return res.status(201).json({ok: true})
        }

    // if method is not POST
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}