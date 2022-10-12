import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
// ADDING THIRD-PARTY JS --------->
// import Script from "next/script";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* ADDING THIRD-PARTY JS ---------> below is how we could add a third-party javascript into our Next.JS app */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;
