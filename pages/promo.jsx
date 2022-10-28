import Image from 'next/image';
import styles from '../styles/Promo.module.css';

const Promo = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titlePromo}>SPECIAL OFFERS FOR YOU</h1>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <Image
                        src='/img/promo1.png'
                        width={250}
                        height={250}
                        alt=''
                        className={styles.img}
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            Buy 1 large pizza, get free 1 medium pizza.
                        </p>
                        <p className={styles.desc}>
                            Only 20$, <b>GRAB NOW!</b>
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/img/promo1.png'
                        width={250}
                        height={250}
                        alt=''
                        className={styles.img}
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            Buy 1 large pizza, get free 1 medium pizza.
                        </p>
                        <p className={styles.desc}>
                            Only 20$, <b>GRAB NOW!</b>
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/img/promo1.png'
                        width={250}
                        height={250}
                        alt=''
                        className={styles.img}
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            Buy 1 large pizza, get free 1 medium pizza.
                        </p>
                        <p className={styles.desc}>
                            Only 20$, <b>GRAB NOW!</b>
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/img/promo1.png'
                        width={250}
                        height={250}
                        alt=''
                        className={styles.img}
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            Buy 1 large pizza, get free 1 medium pizza.
                        </p>
                        <p className={styles.desc}>
                            Only 20$, <b>GRAB NOW!</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;
