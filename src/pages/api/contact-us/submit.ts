import { NextApiRequest, NextApiResponse } from "next";
import { addContactMessage } from "../../../database/operations/contactMessage";
import axios from "axios"

export default async function(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(400).json({msg: 'Invalid request method.'})
    }

    try {

        const token = req.body.token

        if (!token) {
            return res.status(400).json({msg: 'No reCAPTCHA token received.'})
        }

        const check = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`, {
            method: 'POST'
        })

        const checkJSON = await check.json()

        if (!checkJSON.success) {
            return res.status(400).json({msg: 'Art thou a robot?'})
        }

        await addContactMessage(req.body.data)

        return res.status(200).json({msg: 'Success'})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: 'Internal Server Error'})
    }
}