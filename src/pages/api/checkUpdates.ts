import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from 'mongodb'
import axios from "axios";
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

const url = 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    console.time('fetch')
    const data = await nodefetch(url)
    console.timeEnd('fetch')

    const json: JSONResponse = (await data.json()) as any;
    const thisDraw = json.rounds[0]

    const db = await connectToDatabase(process.env.MONGODB_URI!)
    const collection = db.collection('lastDraws')

    const recentDraw = await collection.find({}).sort({ createdAt: -1 }).next();

    if (thisDraw.drawNumber != recentDraw?.drawNumber) {
        await collection.insertOne({
            drawNumber: thisDraw.drawNumber,
            drawDate: thisDraw.drawDate,
            drawName: thisDraw.drawName,
            drawCRS: thisDraw.drawCRS,
            drawSize: thisDraw.drawSize,
            createdAt: new Date()
        })
        res.send('new draw')
    }

    res.send(thisDraw?.drawNumber)
}