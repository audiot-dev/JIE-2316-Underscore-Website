import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"
import Composite from "../components/aboutUs/Composite";

export default function AboutUs() {

    useAnalytics("/about-us")

    return (
        <>
            <Head>
                <title>About Us</title>     
            </Head> 
            <div>
                <Header />
                <Composite />
            </div>
        </>
    )
}