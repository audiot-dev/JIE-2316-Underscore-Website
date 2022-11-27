import { NextApiRequest, NextApiResponse } from "next";
import { AdminData } from "../../database/interfaces/Admin";
import { createAdmin } from "../../database/operations/admin";
import bcrypt from "bcryptjs"

export default async function InitialAdmin(req:NextApiRequest, res:NextApiResponse) {
    return res.json({msg: "Hello World"})
}

// The following should only be uncommented for creating a new root admin.
// This SHOULD NOT BE USED IN PRODUCTION
/*
export default async function InitialAdmin(req:NextApiRequest, res:NextApiResponse) {

    const data:AdminData = {
        username: "AudioT_Root",
        email: "audiot.development@gmail.com",
        password: process.env.ADMIN_ROOT_PASSWORD
    }

    const hashedPassword = await new Promise<string>((resolve, reject) => {
        bcrypt.hash(data.password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        })
    })

    data.password = hashedPassword

    await createAdmin(data)

    return res.json({msg: "Created Initial Admin Account"})
}
*/