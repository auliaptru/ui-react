import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
