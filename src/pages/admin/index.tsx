import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { C_Admin } from "../../database/interfaces/Admin";
import { getAdmin } from "../../utils/admin-auth";
import styles from "../../styles/pages/HeaderSidebar.module.css"
import AdminSidebar from "../../components/nav/AdminSidebar";
import AdminHeader from "../../components/nav/AdminHeader";
import Main from "../../components/admin/index/Main";
import { Box } from "@mui/material";

interface Props {
    admin: C_Admin;
}

export default function Admin({admin}:Props) {

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>     
            </Head> 
            <div className={styles.root}>
                <AdminHeader />
                <AdminSidebar />
                <div>
                    <Main admin={admin} />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

    const {admin, redirect} = await getAdmin(ctx)

    if (redirect) {
        return redirect
    }

    return {props: {
        admin: JSON.parse(JSON.stringify(admin))
    }}
}