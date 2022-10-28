import React from 'react';
import styles from '../styles/AddPizzaModal.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AddPizzaModal = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [cat, setCat] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'uploads');
        try {
            const uploadRes = await axios.post(
                'https://api.cloudinary.com/v1_1/dq4ozj4pk/image/upload',
                data
            );

            const { url } = uploadRes.data;

            const newProduct = {
                title,
                desc,
                prices,
                extraOptions,
                cat,
                img: url,
            };

            await axios.post('http://localhost:3000/api/products', newProduct);
            setClose(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={() => setClose(true)}>
                    X
                </span>
                <h1 className={styles.title}>Add a New Product</h1>

                {/* image */}
                <div className={styles.item}>
                    <label htmlFor='' className={styles.label}>
                        Choose an image
                    </label>
                    <input
                        type='file'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>

                {/* title */}
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input
                        type='text'
                        placeholder='Product Name'
                        className={styles.input}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* description */}
                <div className={styles.item}>
                    <label className={styles.label}>Description</label>
                    <textarea
                        rows={4}
                        type='text'
                        placeholder='Description'
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                {/* type */}
                <div className={styles.item}>
                    <label className={styles.label}>Type</label>
                    <input
                        type='text'
                        placeholder='Category'
                        className={styles.input}
                        onChange={(e) => setCat(e.target.value)}
                    />
                </div>

                {/* prices */}
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='Small'
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='Medium'
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='Large'
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>

                {/* extra */}
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='text'
                            placeholder='Item'
                            name='text'
                            onChange={handleExtraInput}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='Price'
                            name='price'
                            onChange={handleExtraInput}
                        />
                        <button
                            className={styles.extraBtn}
                            onClick={handleExtra}
                        >
                            Add
                        </button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map((option) => (
                            <span
                                key={option.text}
                                className={styles.extraItem}
                            >
                                {option.text} {option.price}
                            </span>
                        ))}
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default AddPizzaModal;
