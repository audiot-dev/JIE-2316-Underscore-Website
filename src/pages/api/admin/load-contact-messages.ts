import { NextApiRequest, NextApiResponse } from "next";
import { getRecentContactMessages } from "../../../database/operations/contactMessage";
import { verifyAdmin } from "../../../utils/admin-auth";

export default verifyAdmin(async function LoadContactMessages(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(400).json({msg: 'Invalid request method.'})
    }

    try {

        const messages = await getRecentContactMessages(req.body.after)

        return res.status(200).json({messages})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: 'Internal Server Error'})
    }
})