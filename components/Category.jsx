import Image from 'next/image';
import React from 'react';
import styles from '../styles/Category.module.css';
import Link from 'next/link';

const Category = ({ pizza }) => {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80',
            cate: 'pizza',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            cate: 'pasta',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1612204021719-fa46ad9bd805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            cate: 'appetizer',
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1543363950-c78545037afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            cate: 'drink',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SEARCH BY CATEGORIES</h1>
            <div className={styles.cate}>
                {data.map((item) => (
                    <div className={styles.wrapper}>
                        <div className={`${styles.imgContainer}`}>
                            <Link href={`/category/${item.cate}`} passHref>
                                <Image
                                    src={item.img}
                                    className={styles.image}
                                    alt=''
                                    layout='fill'
                                />
                            </Link>
                            <p className={styles.titleImg}>{item.cate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
