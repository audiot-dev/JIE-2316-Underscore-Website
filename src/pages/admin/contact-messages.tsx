import Head from "next/head";
import styles from "../../styles/pages/HeaderSidebar.module.css"
import AdminSidebar from "../../components/nav/AdminSidebar";
import AdminHeader from "../../components/nav/AdminHeader";
import Main from "../../components/admin/contactMessages/Main"
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getInitialRecentContactMessages } from "../../database/operations/contactMessage";
import { C_ContactMessage } from "../../database/interfaces/ContactMessage";

interface Props {
    contactMessages: C_ContactMessage[];
}

export default function ContactMessages({contactMessages}:Props) {

    return (
        <>
            <Head>
                <title>Admin Contact Messages</title>
            </Head> 
            <div className={styles.root}>
                <AdminHeader />
                <AdminSidebar />
                <div>
                    <Main contactMessages={contactMessages} />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

    const contactMessages = await getInitialRecentContactMessages()

    return {props: {
        contactMessages: JSON.parse(JSON.stringify(contactMessages))
    }}
}