import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"

export default function Home() {

	useAnalytics("/")

	return (
		<>
			<Head>
				<title>AudioT</title>		
			</Head>
			<div>
				<Header />
				<div>
					main section
				</div>
			</div>
		</>
	)
}