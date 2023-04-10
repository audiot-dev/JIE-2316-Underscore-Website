import client from "../fauna"
import {query as q} from "faunadb"
import { ContactMessageData, S_ContactMessage } from "../interfaces/ContactMessage"

export const INITIAL_RECENT_CONTACT_MSG_COUNT = 10

export async function addContactMessage(data:ContactMessageData) {

    let copy:any = {...data}
    copy.time = q.Now()

    return await client.query(
        q.Create(q.Collection('contactMessages'), {data: copy})
    )
}

export async function getInitialRecentContactMessages() {

    return (await client.query(
        q.Map(
            q.Paginate(
                q.Match(q.Index('contactMessages_sorted_by_time')),
                {size: INITIAL_RECENT_CONTACT_MSG_COUNT}
            ),
            q.Lambda('item', q.Get(q.Select(1, q.Var('item'))))
        )
    ) as {data: S_ContactMessage[]}).data
}

export async function getRecentContactMessages(after:string[]) {

    const a = [q.Time(after[0]), q.Ref(q.Collection('contactMessages'), after[1])]

    return (await client.query(
        q.Map(
            q.Paginate(
                q.Match(q.Index('contactMessages_sorted_by_time')),
                {size: INITIAL_RECENT_CONTACT_MSG_COUNT + 1, after: a}
            ),
            q.Lambda('item', q.If(
                q.Equals(after[1], q.Select([1, 'id'], q.Var('item'))),
                null,
                q.Get(q.Select(1, q.Var('item')))
            ))
        )
    ) as {data: S_ContactMessage[]}).data.filter(d => d)
}