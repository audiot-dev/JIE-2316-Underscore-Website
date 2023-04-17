import { GetServerSidePropsContext, NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import { parseCookies } from "nookies";
import { C_AdminData } from "../database/interfaces/Admin";
import jwt from "jsonwebtoken"
import { getAdminFromUsername } from "../database/operations/admin";
import axios from "axios";
import Router from 'next/router'

function getDecoded(auth:string) {
    return new Promise<C_AdminData|null>((resolve, reject) => {
        jwt.verify(auth, process.env.JWT_TOKEN_SIGNATURE, (err, decoded) => {
            if (!err && decoded) resolve(decoded as C_AdminData)
            resolve(null)
        })
    })
}

export async function getAuthToken(ctx:GetServerSidePropsContext) {

    const auth = parseCookies(ctx)["admin-auth"]

    if (!auth) return null

    return await getDecoded(auth)
}

export async function getAuthTokenFromAPIHandler(req:NextApiRequest) {
    const auth = req.cookies["admin-auth"]

    if (!auth) return null

    return await getDecoded(auth)
}

export async function mustNotBeAuthenticated(ctx:GetServerSidePropsContext) {

    const token = await getAuthToken(ctx)

    if (!token) {
        return null
    }

    return {props: {}, redirect: {destination: "/admin"}}
}

export function verifyAdmin(fn:NextApiHandler) {
    return (req:NextApiRequest, res:NextApiResponse) => {
        return new Promise<void>(resolve => {
            getAuthTokenFromAPIHandler(req).then(async (token) => {
                if (!token) {
                    res.status(403).json({msg: "YOU CANNOT PASS"})
                    return resolve()
                }
                if (req.method !== "GET") {
                    req.body.jwtAdmin = token
                }
                await fn(req, res)
                return resolve()
            }).catch(() => {
                res.status(500).json({msg: "Internal Server Error"})
                return resolve()
            })
        })
    }
}

export async function getAdmin(ctx:GetServerSidePropsContext) {

    const token = await getAuthToken(ctx)

    if (!token) {
        return {admin: null, redirect: {
            props: {},
            redirect: {destination: "/admin/login"}
        }}
    }

    try {

        const admin = await getAdminFromUsername(token.username)

        if (!admin) {
            throw new Error("No Admin found!")
        }

        return {admin, redirect: null}
    } catch (e) {
        return {admin: null, redirect: {
            props: {},
            redirect: {destination: "/admin/login"}
        }}
    }
}

export async function logout() {

    try {
        await axios.get('/api/admin/logout') 
        Router.push({
            pathname: '/admin/login'
        })
    } catch (e) {
        console.log(e)
    }
}