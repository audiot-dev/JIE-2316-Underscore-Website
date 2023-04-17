import { NextApiRequest, NextApiResponse } from "next";
import { deleteContactMessage } from "../../../database/operations/contactMessage";
import { verifyAdmin } from "../../../utils/admin-auth";

export default verifyAdmin(async function DeleteContactMessage(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(400).json({msg: 'Invalid request method.'})
    }

    try {

        await deleteContactMessage(req.body.id)

        return res.status(200).json({msg: 'Success'})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: 'Internal Server Error'})
    }
})