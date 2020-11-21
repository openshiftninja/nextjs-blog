import Link from "next/link";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import fpStyles from "../../styles/firstPost.module.css";

const FirstPost = () => (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1 className={fpStyles.firstPostHeader}>First Post</h1>
        <Link href="/">Back to Home</Link>
    </Layout>
);

export default FirstPost;
