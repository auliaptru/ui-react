import React from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../datatableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    padding: 20px;
`;

const ListContainer = styled.div`
    width: 100%;
    height: 600px;
`;
const Title = styled.div`
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .link {
        color: green;
        font-size: 16px;
        font-weight: 400;
        padding: 5px;
        border: 1px solid green;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const CellAction = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const ViewButton = styled.button`
    padding: 2px 7px;
    border-radius: 5px;
    color: darkblue;
    border: 1px solid rgba(0, 0, 139, 0.6);
    cursor: pointer;
`;

const DeleteButton = styled.button`
    padding: 2px 5px;
    border-radius: 5px;
    color: crimson;
    border: 1px solid rgba(220, 20, 60, 0.6);
    cursor: pointer;
`;

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <CellAction>
                        <Link to='/users/test' className='link'>
                            <ViewButton className='view'>View</ViewButton>
                        </Link>

                        <DeleteButton
                            className='delete'
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </DeleteButton>
                    </CellAction>
                );
            },
        },
    ];
    return (
        <Container className='datatable'>
            <ListContainer>
                <Title>
                    Add New User
                    <Link to='/users/new' className='link'>
                        Add New
                    </Link>
                </Title>
                <DataGrid
                    className='datagrid'
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </ListContainer>
        </Container>
    );
};

export default Datatable;
