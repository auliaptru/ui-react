import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

import AddPizzaModal from '../../components/AddPizzaModal';
import EditPizzaModal from '../../components/EditPizzaModal';

const Index = ({ products }) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [filteredPizza, setFilteredPizza] = useState([]);
    const [close, setClose] = useState(true);
    const [closeEdit, setCloseEdit] = useState(true);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3000/api/products/' + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const openModalEdit = (id) => {
        setCloseEdit(false);
        const data = pizzaList.filter((pizza) => pizza._id === id);
        setFilteredPizza(data);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'img',
            headerName: 'Image',
            width: 160,
            renderCell: (params) => {
                return (
                    <Image
                        src={params.row.img}
                        alt=''
                        width={40}
                        height={40}
                        objectFit='cover'
                    />
                );
            },
        },
        {
            field: 'title',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'prices',
            headerName: 'Price',
            width: 130,
            renderCell: (params) => {
                return <div>$ {params.row.prices[0]}</div>;
            },
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className={styles.button}
                            onClick={(e) => {
                                e.stopPropagation();
                                openModalEdit(params.row._id);
                            }}
                        >
                            Edit
                        </button>

                        <button
                            className={styles.button}
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PRODUCTS</h1>
            <div className={styles.wrapperBtn}>
                <button
                    className={styles.addButton}
                    onClick={() => setClose(false)}
                >
                    Add New Pizza
                </button>
                <Link href='/admin/order'>
                    <button className={styles.orderButton}>Order</button>
                </Link>
            </div>
            {!close && <AddPizzaModal setClose={setClose} />}
            {!closeEdit && (
                <EditPizzaModal
                    filteredPizza={filteredPizza}
                    setCloseEdit={setCloseEdit}
                />
            )}

            
            {openModalEdit}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={10}
                    getRowId={(row) => row._id}
                    rowsPerPageOptions={[5]}
                />
            </div>

            {/* <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Products</h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </tbody>
                        {pizzaList.map((product) => (
                            <tbody key={product._id}>
                                <tr className={styles.trTitle}>
                                    <td>
                                        <Image
                                            src={product.img}
                                            alt=''
                                            width={50}
                                            height={50}
                                            objectFit='cover'
                                        />
                                    </td>
                                    <td>{product._id.slice(0, 5)}...</td>
                                    <td>{product.title}</td>
                                    <td>$ {product.prices[0]}</td>
                                    <td>
                                        <button
                                            className={styles.button}
                                            onClick={() =>
                                                openModalEdit(product._id)
                                            }
                                        >
                                            Edit
                                        </button>
                                        {!closeEdit && (
                                            <EditPizzaModal
                                                id={product._id}
                                                filteredPizza={filteredPizza}
                                                setCloseEdit={setCloseEdit}
                                            />
                                        )}
                                        {openModalEdit}
                                        <button
                                            className={styles.button}
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div> */}
        </div>
        // </div>
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

export default Index;
