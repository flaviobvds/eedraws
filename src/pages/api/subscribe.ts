import {MongoClient, Db} from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
    if (cachedDb) {
        return cachedDb
    }

    const client = await MongoClient.connect(uri)
    const db = client.db('eedrawsUsers')
    cachedDb = db;
    return db;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const email: string = req.body.email

        const db = await connectToDatabase(process.env.MONGODB_URI!)
        const collection = db.collection('subscribers')

        await collection.insertOne({
            email,
            subscribedAt: new Date()
        })

        return res.status(201).json({ok: true})

    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}