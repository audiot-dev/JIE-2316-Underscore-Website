import Head from "next/head";
import Header from "../components/nav/Header";
import Script from "next/script";
import { Box, Container, NoSsr } from "@mui/material"

export default function News() {

    return (
        <>
            <Head>
                <title>AudioT News</title>
                <script src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js" async />
            </Head> 
            <div>
                <Header />
                <Box mx="auto" maxWidth="md" minHeight="calc(100vh - 72px)" bgcolor="background.paper">
                    <Box mx="auto" maxWidth={700}>
                        <NoSsr>
                            <div className='sk-ww-linkedin-page-post' data-embed-id='135491'></div>
                        </NoSsr>
                    </Box>
                </Box>
            </div>
        </>
    )
}