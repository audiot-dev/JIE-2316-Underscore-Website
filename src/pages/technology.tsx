
import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header";
import Composite from "../components/techPage/Composite";

export default function Technology() {

    useAnalytics("/technology")

    return (
        <>
            <Head>
                <title>Technology</title>     
            </Head> 
            <div>
                <Header />
                <Composite />
            </div>
        </>
    )
}