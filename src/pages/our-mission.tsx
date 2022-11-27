import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"

export default function AboutUs() {

    useAnalytics("/our-mission")

    return (
        <>
            <Head>
                <title>Our Mission</title>     
            </Head> 
            <div>
                <Header />
                <div>
                    Our Mission page
                </div>
            </div>
        </>
    )
}