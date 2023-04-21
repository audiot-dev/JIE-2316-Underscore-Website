import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"
import Main from "../components/home/Main"
import Footer from "../components/nav/Footer";

export default function Home() {

	useAnalytics("/")

	return (
		<>
			<Head>
				<title>AudioT</title>		
			</Head>
			<div className="header-footer-root">
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	)
}