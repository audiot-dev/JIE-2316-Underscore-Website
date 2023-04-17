import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { verifyAdmin } from "../../../utils/admin-auth";

export default verifyAdmin(async function AdminLogout(req:NextApiRequest, res:NextApiResponse) {

    setCookie({res}, 'admin-auth', '', {
        maxAge: 0,
        path: '/',
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict'
    })

    return res.status(200).json({msg: 'Logged out...'})
})