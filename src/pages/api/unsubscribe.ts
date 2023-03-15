import {MongoClient, Db, ObjectId} from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        
        const unsubsribeId = req.body.id

        if (unsubsribeId) {
            const db = await connectToDatabase(process.env.MONGODB_URI!)
            const collection = db.collection('subscribers')

            console.log('initiating delete ' + unsubsribeId)
            const deletion = await collection.deleteOne({
                "_id": new ObjectId(unsubsribeId)
            })
            console.log(deletion)
        }

        return(res.status(200).send('success'))
    
    } else { // if method is not POST
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}