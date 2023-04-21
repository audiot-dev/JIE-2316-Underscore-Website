import Head from "next/head";
import Header from "../components/nav/Header";
import ContactBox from "../components/contact/ContactBox"
import { useAnalytics } from "../utils/analytics";
import Footer from "../components/nav/Footer";


export default function ContactUs() {

    useAnalytics("/contact-us")

    return (
        <>
            <Head>
                <title>Contact Us</title>     
            </Head> 
			<div className="header-footer-root">
				<Header />
				<ContactBox />
				<Footer />
			</div>
        </>
    )
}