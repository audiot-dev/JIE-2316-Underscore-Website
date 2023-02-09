import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"

export default function Technology() {

    useAnalytics("/technology")

    return (
        <>
            <Head>
                <title>Technology</title>     
            </Head> 
            <div>
                <Header />
                <div>
                    Technology page
                </div>
            </div>
        </>
    )
}