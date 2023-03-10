import { NextApiRequest, NextApiResponse } from "next";
import { addContactMessage } from "../../../database/operations/contactMessage";

export default async function(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(400).json({msg: 'Invalid request method.'})
    }

    try {

        console.log(req.body)
        await addContactMessage(req.body.data)

        return res.status(200).json({msg: 'Success'})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: 'Internal Server Error'})
    }
}