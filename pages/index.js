import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Category from '../components/Category';

export default function Home({ pizzaList }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant</title>
                <meta name='description' content='Best pizza shop in town' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Featured />
            <Card />
            <PizzaList pizzaList={pizzaList} />
            <Category pizza={pizzaList} />
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    return {
        props: {
            pizzaList: res.data,
        },
    };
};
