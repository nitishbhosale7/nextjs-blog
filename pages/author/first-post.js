import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <Layout >
            <Head>
                <title>First-Post</title>
            </Head>
            {/* <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnload'
                onLoad={() => console.log('Script loaded correctly, window.FB has been populated')}
            /> */}
            <div>
                <h1>First Post</h1>
                <p>This is the first post by the author.</p>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </div>
        </Layout>
    );
}