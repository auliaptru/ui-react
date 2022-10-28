import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';
import OrderDetails from '../components/OrderDetails';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);

    const cart = useSelector((state) => state.cart);
    // This values are the props in the UI
    const amount = cart.total;
    const currency = 'USD';
    const style = { layout: 'vertical' };

    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data) => {
        try {
            const res = await axios.post(
                'http://localhost:3000/api/orders',
                data
            );
            res.status === 201 && router.push('/orders/' + res.data._id);
            dispatch(reset());
        } catch (error) {
            console.log(error);
        }
    };

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: 'resetOptions',
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className='spinner' />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // Your code here after capture the order
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };

    return (
        <div className={styles.cart}>
            <h2 className={styles.cartTitle}>CART DETAIL</h2>
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tbody className={styles.tbody}>
                            <tr className={styles.trTitle}>
                                <th className={styles.th}>No.</th>
                                <th className={styles.th}>Product</th>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Extras</th>
                                <th className={styles.th}>Price</th>
                                <th className={styles.th}>Quantity</th>
                                <th className={styles.th}>Total</th>
                            </tr>
                        </tbody>
                        {cart.products.map((product, index) => (
                            <tbody key={product._id} className={styles.tbody}>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>
                                        <span className={styles.noOrder}>
                                            {index + 1}.
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.imgContainer}>
                                            <Image
                                                src={product.img}
                                                layout='fill'
                                                objectFit='cover'
                                                alt=''
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.name}>
                                            {product.title}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.extras}>
                                            {product.extras.map((extra) => (
                                                <span key={extra._id}>
                                                    {extra.text}
                                                </span>
                                            ))}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.price}>
                                            $ {product.price}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.quantity}>
                                            {product.quantity}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.total}>
                                            $ {product.price * product.quantity}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>$
                            {cart.total}
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>
                            $0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>$
                            {cart.total}
                        </div>
                        {open ? (
                            <div className={styles.paymentMethods}>
                                <button
                                    className={styles.cashBtn}
                                    onClick={() => setCash(true)}
                                >
                                    CASH ON DELIVERY
                                </button>
                                <PayPalScriptProvider
                                    options={{
                                        'client-id':
                                            'AeHDR44UnOKWGsD97EDge97lyDHUhZsdd7mRSJoGamWxJFWN6Kq-Vw5qQ2mjVg3AWkzH6TWVFVdm61Kb',
                                        components: 'buttons',
                                        currency: 'USD',
                                        'disable-funding': 'card',
                                    }}
                                >
                                    <ButtonWrapper
                                        currency={currency}
                                        showSpinner={false}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button
                                onClick={() => setOpen(true)}
                                className={styles.button}
                            >
                                CHECKOUT NOW
                            </button>
                        )}
                    </div>
                </div>
                {cash && (
                    <OrderDetails
                        total={cart.total}
                        createOrder={createOrder}
                    />
                )}
            </div>
        </div>
    );
};

export default Cart;
