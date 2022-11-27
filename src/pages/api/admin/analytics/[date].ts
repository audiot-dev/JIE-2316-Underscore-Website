import { NextApiRequest, NextApiResponse } from "next";
import { getAnalyticsDaily } from "../../../../database/operations/analyticsDaily";
import { verifyAdmin } from "../../../../utils/admin-auth";

export default verifyAdmin(async function DayAnalytics(req:NextApiRequest, res:NextApiResponse) {

    try {

        const date = req.query.date?.toString()

        if (!date) {
            throw new Error("No Date Given")
        }

        const analytics = await getAnalyticsDaily(date)

        return res.status(200).json({analytics})
    } catch (e) {
        console.log(e)
        return res.status(500).json({msg: "Internal Server Error"})
    }
})