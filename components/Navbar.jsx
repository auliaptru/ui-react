import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const closeMenu = () => {
        setOpenMenu(false);
    };
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <nav className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callBtn}>
                    <Image
                        src='/img/telephone.png'
                        alt=''
                        width={32}
                        height={32}
                    />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.menuResponsive}>
                <div
                    className={styles.hamburger}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
            </div>
            <div className={styles.item}>
                <ul
                    className={
                        openMenu
                            ? `${styles.list} ${styles.active}`
                            : `${styles.list}`
                    }
                >
                    <Link href='/' passHref>
                        <li className={styles.listItem} onClick={closeMenu}>
                            Home
                        </li>
                    </Link>
                    <div className={styles.dropdown}>
                        <li className={styles.dropdownBtn}>Menu</li>
                        <div className={styles.dropdownContent}>
                            <Link href='/category/pizza'>
                                <li className={styles.dropdownList}>
                                    <Image
                                        src='/img/pizza-icon.png'
                                        alt=''
                                        width={30}
                                        height={30}
                                        className={styles.icon}
                                    />
                                    <span
                                        className={styles.menu}
                                        onClick={closeMenu}
                                    >
                                        Pizza
                                    </span>
                                </li>
                            </Link>
                            <Link href='/category/pasta'>
                                <li className={styles.dropdownList}>
                                    <Image
                                        src='/img/pasta.png'
                                        alt=''
                                        width={30}
                                        height={30}
                                        className={styles.icon}
                                    />
                                    <span
                                        className={styles.menu}
                                        onClick={closeMenu}
                                    >
                                        Pasta
                                    </span>
                                </li>
                            </Link>
                            <Link href='/category/appetizer'>
                                <li className={styles.dropdownList}>
                                    <Image
                                        src='/img/pastry.png'
                                        alt=''
                                        width={30}
                                        height={30}
                                        className={styles.icon}
                                    />
                                    <span
                                        className={styles.menu}
                                        onClick={closeMenu}
                                    >
                                        Appetizer
                                    </span>
                                </li>
                            </Link>
                            <Link href='/category/drink'>
                                <li href='#' className={styles.dropdownList}>
                                    <Image
                                        src='/img/drink.png'
                                        alt=''
                                        width={30}
                                        height={30}
                                        className={styles.icon}
                                    />
                                    <span
                                        className={styles.menu}
                                        onClick={closeMenu}
                                    >
                                        Drink
                                    </span>
                                </li>
                            </Link>
                        </div>
                    </div>
                    <Link href='/promo'>
                        <li className={styles.listItem} onClick={closeMenu}>
                            Promo
                        </li>
                    </Link>
                    <Link href='#contact' passHref>
                        <li className={styles.listItem} onClick={closeMenu}>
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
            <Link href='/cart' passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image
                            src='/img/cart.png'
                            alt=''
                            width='30px'
                            height='30px'
                        />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
