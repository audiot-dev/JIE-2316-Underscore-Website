import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"

export default function AboutUs() {

    useAnalytics("/about-us")

    return (
        <>
            <Head>
                <title>About Us</title>     
            </Head> 
            <div>
                <Header />
                <div>
                    about us page
                </div>
            </div>
        </>
    )
}