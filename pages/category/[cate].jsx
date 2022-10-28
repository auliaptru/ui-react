import React from 'react';
import styles from '../../styles/CategoryItem.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import PizzaCard from '../../components/PizzaCard';
import Image from 'next/image';

const CategoryItem = ({ products }) => {
    const router = useRouter();
    const category = router.query.cate;
    const data = products.filter((product) => product.cat === category);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{category} PREMIUM</h1>
            <div className={styles.imgContainer}>
                <Image
                    src={`/img/banner-${category}.png`}
                    layout='fill'
                    alt=''
                    className={styles.image}
                />
                <a
                    className={styles.link}
                    href='https://www.freepik.com/free-vector/seamless-pizza-ingredients_1389751.htm#query=pizza&position=14&from_view=search&track=sph'
                >
                    Pattern by sergey_kandakov on Freepik
                </a>
            </div>
            <div className={styles.wrapper}>
                {data.map((item) => (
                    <PizzaCard pizza={item} />
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await axios.get(`http://localhost:3000/api/products`);
    return {
        props: {
            products: res.data,
        },
    };
};

export default CategoryItem;
