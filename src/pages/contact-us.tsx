import Head from "next/head";
import Header from "../components/nav/Header";
import ContactBox from "../components/contact/ContactBox"
import { useAnalytics } from "../utils/analytics";


export default function ContactUs() {

    useAnalytics("/contact-us")

    return (
        <>
            <Head>
                <title>Contact Us</title>     
            </Head> 
            <Header />
            <ContactBox />
        </>
    )
}