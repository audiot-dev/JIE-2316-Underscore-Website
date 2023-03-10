import client from "../fauna"
import {query as q} from "faunadb"
import { ContactMessageData } from "../interfaces/ContactMessage"

export async function addContactMessage(data:ContactMessageData) {

    let copy:any = {...data}
    copy.time = q.Now()

    return await client.query(
        q.Create(q.Collection('contactMessages'), {data: copy})
    )
}