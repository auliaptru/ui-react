import React, { useState } from 'react';
import styles from '../../styles/OrderAdmin.module.css';
import axios from 'axios';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';

const Order = ({ orders }) => {
    const [orderList, setOrderList] = useState(orders);
    console.log(orders);

    const status = ['Preparing', 'On the way', 'Delivered', 'Completed'];

    const handleStatus = async (id) => {
        const item = orderList.filter((order) => order._id === id)[0];
        const currentStatus = item.status;

        try {
            const res = await axios.put(
                'http://localhost:3000/api/orders/' + id,
                { status: currentStatus + 1 }
            );
            setOrderList([
                res.data,
                ...orderList.filter((order) => order._id !== id),
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'customer',
            headerName: 'Customer',
            width: 160,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 200,
        },
        {
            field: 'total',
            headerName: 'Total',
            width: 130,
            renderCell: (params) => {
                return <div>$ {params.row.total}</div>;
            },
        },
        {
            field: 'method',
            headerName: 'Payment',
            width: 130,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.method === 0 ? (
                            <span>Cash</span>
                        ) : (
                            <span>Paid</span>
                        )}
                    </div>
                );
            },
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            renderCell: (params) => {
                return <div>{status[params.row.status]}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.status < 3 ? (
                            <button
                                className={styles.button}
                                onClick={() => handleStatus(params.row._id)}
                            >
                                Next Stage
                            </button>
                        ) : (
                            <span>Completed</span>
                        )}
                    </div>
                );
            },
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Orders</h1>
                <Link href='/admin'>
                    <button className={styles.productBtn}>Products</button>
                </Link>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={orders}
                    columns={columns}
                    pageSize={10}
                    getRowId={(row) => row._id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || '';
    let admin = false;

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
            props: {
                admin,
            },
        };
    }

    const productRes = await axios.get('http://localhost:3000/api/products');
    const orderRes = await axios.get('http://localhost:3000/api/orders');
    return {
        props: {
            products: productRes.data,
            orders: orderRes.data,
        },
    };
};

export default Order;
