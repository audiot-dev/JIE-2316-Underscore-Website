
import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header";
import Composite from "../components/techPage/Composite";
import Footer from "../components/nav/Footer";

export default function Technology() {

    useAnalytics("/technology")

    return (
        <>
            <Head>
                <title>Technology</title>     
            </Head> 
			<div className="header-footer-root">
				<Header />
				<Composite />
				<Footer />
			</div>
        </>
    )
}