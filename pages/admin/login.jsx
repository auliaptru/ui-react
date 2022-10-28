import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Login.module.css';
import axios from 'axios';

const login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try {
            await axios.post('http://localhost:3000/api/login', {
                username,
                password,
            });
            router.push('/admin');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Admin Dashboard</h1>
                <input
                    type='text'
                    placeholder='Username'
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>
                {error && (
                    <span className={styles.error}>Wrong Credentials!</span>
                )}
            </div>
        </div>
    );
};

export default login;
