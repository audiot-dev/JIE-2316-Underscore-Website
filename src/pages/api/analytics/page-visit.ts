import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto"
import jwt from "jsonwebtoken"
import { incrementPageVisited } from "../../../database/operations/analyticsUser";
import { setCookie } from "nookies";

export default async function AnalyticsPageVisit(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== "POST") {
        return res.status(400).json({msg: "Ok..."})
    }

    try {

        const {page} = req.body

        if (!page) {
            return res.status(400).json({msg: "No page given."})
        }

        let analyticsId = req.cookies.analyticsId as string

        if (!analyticsId) {
            analyticsId = await new Promise<string>((resolve, reject) => {
                crypto.randomBytes(48, (err, buffer) => {
                    if (err) reject(err)
                    resolve(buffer.toString("hex"))
                })
            }).catch((e) => {
                throw(e)
            })
        } else {
            analyticsId = await new Promise<string>((resolve, reject) => {
                jwt.verify(analyticsId, process.env.JWT_TOKEN_SIGNATURE, (error, decoded) => {
                    if (!error && decoded) resolve(decoded as string)
                    reject(error)
                })
            }).catch((e) => {
                throw(e)
            })
        }

        const user = await incrementPageVisited(analyticsId, page)

        console.log(`user: ${user}`)

        const jwtToken = jwt.sign(analyticsId, process.env.JWT_TOKEN_SIGNATURE)

        setCookie({res}, "analyticsId", jwtToken, {
            secure: process.env.NODE_ENV != "development",
            sameSite: true,
            maxAge: 1000 * 24 * 60 * 60, 
            path: "/"
        })

        return res.status(200).json({msg: "Success"})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: "Internal Server Error"})
    }
}