import React from 'react';
import styled from 'styled-components';
import {} from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        id: 1143155,
        product: 'Acer Nitro 5',
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        customer: 'John Smith',
        date: '1 March',
        amount: 785,
        method: 'Cash on Delivery',
        status: 'Approved',
    },
    {
        id: 2235235,
        product: 'Playstation 5',
        img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
        customer: 'Michael Doe',
        date: '1 March',
        amount: 900,
        method: 'Online Payment',
        status: 'Pending',
    },
    {
        id: 2342353,
        product: 'Redragon S101',
        img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
        customer: 'John Smith',
        date: '1 March',
        amount: 35,
        method: 'Cash on Delivery',
        status: 'Pending',
    },
    {
        id: 2357741,
        product: 'Razer Blade 15',
        img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
        customer: 'Jane Smith',
        date: '1 March',
        amount: 920,
        method: 'Online',
        status: 'Approved',
    },
    {
        id: 2342355,
        product: 'ASUS ROG Strix',
        img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
        customer: 'Harold Carol',
        date: '1 March',
        amount: 2000,
        method: 'Online',
        status: 'Pending',
    },
];

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    color: gray;
    padding: 20px;
    margin: 20px 0px;
`;

const CellWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const ImageWrapper = styled.div`
    width: 35px;
    height: 35px;
    /* border-radius: 50%; */
    margin-right: 10px;
`;
const ProductImage = styled.img`
    width: 100%;
`;
const StatusProduct = styled.span`
    padding: 5px;
    border-radius: 5px;
    &.Approved {
        color: green;
        background-color: rgba(0, 128, 0, 0.151);
    }
    &.Pending {
        color: goldenrod;
        background-color: rgba(189, 189, 3, 0.103);
    }
`;

const TableTransactions = () => {
    return (
        <Container>
            <TableContainer component={Paper} className='table'>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>
                                Tracking ID
                            </TableCell>
                            <TableCell className='tableCell'>Product</TableCell>
                            <TableCell className='tableCell'>
                                Customer
                            </TableCell>
                            <TableCell className='tableCell'>Date</TableCell>
                            <TableCell className='tableCell'>Amount</TableCell>
                            <TableCell className='tableCell'>
                                Payment Method
                            </TableCell>
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className='tableCell'>
                                    {row.id}
                                </TableCell>
                                <TableCell className='tableCell'>
                                    <CellWrapper>
                                        <ImageWrapper>
                                            <ProductImage
                                                src={row.img}
                                                alt={row.product}
                                            />
                                        </ImageWrapper>
                                        {row.product}
                                    </CellWrapper>
                                </TableCell>
                                <TableCell className='tableCell'>
                                    {row.customer}
                                </TableCell>
                                <TableCell className='tableCell'>
                                    {row.date}
                                </TableCell>
                                <TableCell className='tableCell'>
                                    {row.amount}
                                </TableCell>
                                <TableCell className='tableCell'>
                                    {row.method}
                                </TableCell>
                                <TableCell className='tableCell'>
                                    <StatusProduct
                                        className={`status ${row.status}`}
                                    >
                                        {row.status}
                                    </StatusProduct>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TableTransactions;
