import { MongoClient, Db, ObjectId, WithId, Document, } from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";

let cachedDb: Db | null = null;

interface MongoUserDocument extends WithId<Document> {
    _id: ObjectId,
    email?: string,
    subscribedAt?: string
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

        const unsubsribeId = req.body.id

        if (unsubsribeId) {
            const db = await connectToDatabase(process.env.MONGODB_URI!)
            const collection = db.collection('subscribers')


            // retrieve email address to output on the client side
            const doc: MongoUserDocument | null = await collection.findOne({
                "_id": new ObjectId(unsubsribeId)
            })
            const email = doc?.email
            

            // delete user from database
            const deletion = await collection.deleteOne({
                "_id": new ObjectId(unsubsribeId)
            })
            console.log(deletion)
            
            return (res.status(200).send(email))
        }


    } else { // if method is not POST
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}