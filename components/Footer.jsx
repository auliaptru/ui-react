import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container} id='contact'>
            <div className={styles.item}>
                <Image
                    src='/img/bg.png'
                    alt=''
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        FOR EVERYONE WHO LOVE AND LIVE FOR PASTA AND PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        2356 K. Laquie Rd #235.
                        <br /> New York, 85022
                        <br /> (602) 867-1011
                    </p>
                    <p className={styles.text}>
                        1654 E. Erwin St #104.
                        <br /> New York, 85022
                        <br /> (602) 867-1012
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> New York, 85022
                        <br /> (602) 867-1013
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MODAY UNTIL FRIDAY
                        <br /> 9:00 - 22.00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24.00
                    </p>
                    <div>
                        <h1 className={styles.title}>CONTACT</h1>
                        <div className={styles.order}>
                            <p className={styles.phone}>012-345-678</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
