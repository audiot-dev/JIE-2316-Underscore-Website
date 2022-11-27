import Head from "next/head";
import styles from "../../styles/pages/HeaderOnly.module.css"
import Main from "../../components/admin/login/Main"
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { mustNotBeAuthenticated } from "../../utils/admin-auth";
import AdminHeader from "../../components/nav/AdminBareHeader";

export default function Login() {

    return (
        <>
            <Head>
                <title>Admin Login</title>   
            </Head> 
            <div className={styles.root}>
                <AdminHeader />
                <div>
                    <Main />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

    const redirect = await mustNotBeAuthenticated(ctx)

    if (!redirect) {
        return {props: {}}
    }

    return redirect
}