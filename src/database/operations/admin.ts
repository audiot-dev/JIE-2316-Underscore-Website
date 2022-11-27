import client from "../fauna"
import {query as q} from "faunadb"
import { AdminData, S_Admin } from "../interfaces/Admin"

export async function createAdmin(data:AdminData) {

    const admin:S_Admin = await client.query(
        q.Create(q.Collection('admins'), {data})
    )

    return admin
}

export async function getAdminFromUsername(username:string) {

    return await client.query(
        q.If(
            q.Exists(q.Match(q.Index("admins_by_username"), username)),
            q.Get(q.Match(q.Index("admins_by_username"), username)),
            null
        )
    ) as S_Admin
}