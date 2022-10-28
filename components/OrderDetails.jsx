import React, { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

const OrderDetails = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    You will pay $12 after delivery.
                </h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input
                        className={styles.input}
                        placeholder='John Doe'
                        type='text'
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        className={styles.input}
                        placeholder='+1 234 567 89'
                        type='text'
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <input
                        className={styles.input}
                        placeholder='Address'
                        type='text'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;
