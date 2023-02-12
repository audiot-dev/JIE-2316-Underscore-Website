import Head from "next/head";
import { useAnalytics } from "../utils/analytics";
import Header from "../components/nav/Header"
import Main from "../components/home/Main"

export default function Home() {

	useAnalytics("/")

	return (
		<>
			<Head>
				<title>AudioT</title>		
			</Head>
			<div>
				<Header />
				<Main />
			</div>
		</>
	)
}