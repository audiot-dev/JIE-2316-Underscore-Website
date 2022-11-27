import { NextApiRequest, NextApiResponse } from "next";
import { getAdminFromUsername } from "../../../database/operations/admin";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { setCookie } from "nookies"

export default async function Login(req:NextApiRequest, res:NextApiResponse) {

    if (req.method !== "POST") {
        return res.status(400).json({msg: "Ok..."})
    }

    try {

        const {username, password} = req.body

        const admin = await getAdminFromUsername(username)

        if (!admin) {
            return res.status(409).json({field: "username", msg: "Username not found."})
        }

        const isCorrectPassword = await new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, admin.data.password, (err, result) => {
                if (err) reject(err)
                resolve(result)
            }) 
        }).catch(e => {
            throw new Error("Error comparing password.")
        })

        if (!isCorrectPassword) {
            return res.status(409).json({field: "password", msg: "Incorrect password."})
        }

        const token = jwt.sign(
            {username, email: admin.data.email}, 
            process.env.JWT_TOKEN_SIGNATURE, 
            {expiresIn: "48hr"}
        )

        setCookie({res}, "admin-auth", token, {
            secure: process.env.NODE_ENV !== "development",
            sameSite: true,
            maxAge: 172800,
            path: "/"
        })

        return res.status(200).json({msg: "Success"})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: "Internal Server Error"})
    }
}