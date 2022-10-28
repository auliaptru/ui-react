import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Featured.module.css';

const Featured = () => {
    const [index, setIndex] = useState(0);

    const handleArrow = (direct) => {
        if (direct === 'left') {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direct === 'right') {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };

    const images = [
        '/img/featured.svg',
        '/img/featured2.png',
        '/img/featured3.png',
    ];
    return (
        <div className={styles.container}>
            <div
                className={styles.arrowContainer}
                style={{ left: 0 }}
                onClick={() => handleArrow('left')}
            >
                <Image
                    src='/img/arrowl.png'
                    alt=''
                    layout='fill'
                    objectFit='contain'
                />
            </div>

            <div
                className={styles.wrapper}
                style={{ transform: `translateX(${-100 * index}vw)` }}
            >
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image
                            src={img}
                            alt='pizza'
                            layout='fill'
                            objectFit='contain'
                            className={styles.img}
                        />
                    </div>
                ))}
            </div>
            <div
                className={styles.arrowContainer}
                style={{ right: 0 }}
                onClick={() => handleArrow('right')}
            >
                <Image
                    src='/img/arrowr.png'
                    alt=''
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        </div>
    );
};

export default Featured;
