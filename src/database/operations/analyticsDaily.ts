import { query as q } from "faunadb"
import client from "../fauna"
import dayjs from "dayjs"
import { S_AnalyticsDaily } from "../interfaces/AnalyticsDaily"

function getAnalyticsDailyInnerQuery(date:string) {
    const qDate = q.Date(date)
    return q.If(
        q.Exists(q.Match(q.Index("analyticsDaily_by_date"), qDate)),
        q.Get(q.Match(q.Index("analyticsDaily_by_date"), qDate)),
        q.Create(q.Collection("analyticsDaily"), {data: {
            date: qDate,
            pageVisitFrequencies: {}
        }})
    )
}

export function incrementAnalyticsDailyInnerQuery(page:string) {

    const date = dayjs().format("YYYY-MM-DD")

    return q.Let(
        {
            analytics: getAnalyticsDailyInnerQuery(date)
        },
        q.Update(q.Select("ref", q.Var("analytics")), {data: {
            pageVisitFrequencies: {
                [page]: q.If(
                    q.ContainsField(page, q.Select(["data", "pageVisitFrequencies"], q.Var("analytics"))),
                    q.Add(q.Select(["data", "pageVisitFrequencies", page], q.Var("analytics")), 1),
                    1
                )
            }
        }})
    )
}

export async function getAnalyticsDaily(date:string) {

    return await client.query(
        getAnalyticsDailyInnerQuery(date)
    ) as S_AnalyticsDaily
}