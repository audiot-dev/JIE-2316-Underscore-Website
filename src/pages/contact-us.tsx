import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"

export default function ContactUs() {

    useAnalytics("/contact-us")

    return (
        <>
            <Head>
                <title>Contact Us</title>     
            </Head> 
            <div>
                <Header />
                <div>
                    Contact Us page
                </div>
            </div>
        </>
    )
}