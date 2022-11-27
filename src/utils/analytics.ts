import { useEffect, useState } from "react"
import { parseCookies, setCookie } from "nookies"
import crypto from "crypto"
import axios, {AxiosError} from "axios"

export async function useAnalytics(page:string) {

    useEffect(() => {
        const incrementVisitToPage = async () => {
            console.log("calling useEffect")
            try {
                await axios({
                    method: "POST",
                    url: "/api/analytics/page-visit",
                    data: {page}
                })
            } catch (e) {
                console.log((e as AxiosError)?.response)
            }
        }
        incrementVisitToPage()
    }, [])
}