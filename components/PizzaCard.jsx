import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <Link href={`/product/${pizza._id}`} passHref>
                        <Image
                            src={pizza.img}
                            alt=''
                            width='500'
                            height='500'
                        />
                    </Link>
                </div>
                <div className={styles.cardInfo}>
                    <h1 className={styles.title}>{pizza.title}</h1>
                    <span className={styles.price}>${pizza.prices[0]}</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
