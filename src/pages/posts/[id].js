import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import React from "react";
import Head from "next/dist/next-server/lib/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

// render the data from one of the posts
const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

// returns a collection of valid ids
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// given one of the items in the valid paths array, return the data for that id
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
