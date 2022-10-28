import Image from 'next/image';
import React from 'react';
import styles from '../styles/Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h1 className={styles.titleHeader}>
                    THE BEST PIZZA AND PASTA IN TOWN
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum quasi adipisci nemo provident architecto alias vitae
                    animi quisquam, atque tempora voluptatibus sed maxime.
                    Reiciendis, architecto. Aspernatur vel commodi est
                    consectetur!
                </p>
                <div className={styles.cate}>
                    <div className={styles.wrapper}>
                        <div
                            className={`${styles.imgContainer} ${styles.card1}`}
                        >
                            <Image
                                src='https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                className={styles.image}
                                alt=''
                                layout='fill'
                            />
                            <div className={styles.wrapperDiscount}>
                                <span className={styles.discountText}>10%</span>
                                <span className={styles.discountText}>OFF</span>
                            </div>
                            <div className={styles.content}>
                                <h1 className={styles.title}>
                                    ALL YOU NEED IS A PASTA!
                                </h1>
                                <button className={styles.button}>
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div
                            className={`${styles.imgContainer} ${styles.card2}`}
                        >
                            <Image
                                src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                className={styles.image}
                                alt=''
                                layout='fill'
                            />
                            <div className={styles.wrapperDiscount}>
                                <span className={styles.discountText}>10%</span>
                                <span className={styles.discountText}>OFF</span>
                            </div>
                            <div className={styles.content}>
                                <h1 className={styles.title}>
                                    FOR MEAT PIZZA LOVERS
                                </h1>
                                <button className={styles.button}>
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div
                            className={`${styles.imgContainer} ${styles.card3}`}
                        >
                            <Image
                                src='https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                                className={styles.image}
                                alt=''
                                layout='fill'
                            />
                            <div className={styles.wrapperDiscount}>
                                <span className={styles.discountText}>10%</span>
                                <span className={styles.discountText}>OFF</span>
                            </div>
                            <div className={styles.content}>
                                <h1 className={styles.title}>
                                    SPECIAL DRINK FOR SUMMER!
                                </h1>
                                <button className={styles.button}>
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
