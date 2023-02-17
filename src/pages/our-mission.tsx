import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header";
import Composite from "../components/missionPage/Composite"

export default function AboutUs() {

    useAnalytics("/our-mission")

    return (
        <>
            <Head>
                <title>Our Mission</title>     
            </Head> 
            <div>
                <Header />
                <Composite />
            </div>
        </>
    )
}