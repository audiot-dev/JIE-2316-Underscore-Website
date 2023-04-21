import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"
import Composite from "../components/aboutUs/Composite";
import Footer from "../components/nav/Footer";

export default function AboutUs() {

    useAnalytics("/about-us")

    return (
        <>
            <Head>
                <title>About Us</title>     
            </Head> 
			<div className="header-footer-root">
				<Header />
				<Composite />
				<Footer />
			</div>
        </>
    )
}