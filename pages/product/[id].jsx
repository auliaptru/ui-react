import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({ pizza }) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);

    const dispatch = useDispatch();
    // const pizza = {
    //     id: 1,
    //     img: '/img/pizza.png',
    //     title: 'CAMPAGNOLA',
    //     price: [19.9, 23.9, 27.9],
    //     desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
    // };

    const changePrices = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        setSize(sizeIndex);
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        changePrices(difference);
    };

    const handleChange = (e, opt) => {
        const checked = e.target.checked;
        if (checked) {
            changePrices(opt.price);
            setExtras((prev) => [...prev, opt]);
        } else {
            changePrices(-opt.price);
            setExtras(extras.filter((extra) => extra._id !== opt._id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...pizza, extras, price, quantity }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image
                        src={pizza.img}
                        alt=''
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>$ {price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src='/img/size.png' layout='fill' alt='' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src='/img/size.png' layout='fill' alt='' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src='/img/size.png' layout='fill' alt='' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map((opt) => (
                        <div className={styles.option} key={opt._id}>
                            <input
                                type='checkbox'
                                id={opt.text}
                                name={opt.text}
                                className={styles.checkbox}
                                onChange={(e) => handleChange(e, opt)}
                            />
                            <label htmlFor={opt.text}>{opt.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input
                        type='number'
                        defaultValue={1}
                        className={styles.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleClick}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/products/${params.id}`
    );
    return {
        props: {
            pizza: res.data,
        },
    };
};

export default Product;
