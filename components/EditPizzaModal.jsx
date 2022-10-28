import React from 'react';
import styles from '../styles/EditPizzaModal.module.css';
import axios from 'axios';
import { useState } from 'react';

const EditPizzaModal = ({ setCloseEdit, filteredPizza }) => {
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

    const data = filteredPizza[0];
    const id = data._id;

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

            const editProduct = {
                title,
                desc,
                prices,
                extraOptions,
                cat,
                img: url,
            };

            await axios.put(
                'http://localhost:3000/api/products/' + id,
                editProduct
            );
            setCloseEdit(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span
                    className={styles.close}
                    onClick={() => setCloseEdit(true)}
                >
                    X
                </span>
                <h1 className={styles.title}>Edit Pizza</h1>

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
                        placeholder={data.title}
                        className={styles.input}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Type</label>
                    <input
                        type='text'
                        placeholder={data.cat}
                        className={styles.input}
                        onChange={(e) => setCat(e.target.value)}
                    />
                </div>

                {/* description */}
                <div className={styles.item}>
                    <label className={styles.label}>Description</label>
                    <textarea
                        rows={4}
                        type='text'
                        placeholder={data.desc}
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                {/* prices */}
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder={data.prices[0]}
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder={data.prices[1]}
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder={data.prices[2]}
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>

                {/* extra */}
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        {/* {data.extraOptions === [] ? ( */}
                        <div className={styles.extraWrapper}>
                            <div className={styles.inputPrice}>
                                <label className={styles.labelPrice}>
                                    Name
                                </label>
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type='text'
                                    name='text'
                                    onChange={handleExtraInput}
                                />
                            </div>
                            <div className={styles.inputPrice}>
                                <label className={styles.labelPrice}>
                                    Price
                                </label>
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type='number'
                                    name='price'
                                    onChange={handleExtraInput}
                                />
                            </div>
                        </div>

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
                    Edit
                </button>
            </div>
        </div>
    );
};

export default EditPizzaModal;
