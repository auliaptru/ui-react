import styled from 'styled-components';

const CellUser = styled.div`
    display: flex;
    align-items: center;
`;
const CellImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;

export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 230,
        renderCell: (params) => {
            return (
                <CellUser className='cell'>
                    <CellImage
                        className='cellImg'
                        src={params.row.img}
                        alt={params.row.name}
                    />
                    {params.row.username}
                </CellUser>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            const CellStatus = styled.div`
                padding: 5px;
                border-radius: 5px;
                width: 50px;
                &.active {
                    color: green;
                    background-color: rgba(0, 128, 0, 0.05);
                }
                &.pending {
                    color: goldenrod;
                    background-color: rgba(255, 217, 0, 0.05);
                }
                &.passive {
                    color: crimson;
                    background-color: rgba(255, 0, 0, 0.05);
                }
            `;
            return (
                <CellStatus className={`status ${params.row.status}`}>
                    {params.row.status}
                </CellStatus>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '2snow@gmail.com',
        status: 'passive',
        age: 42,
    },
    {
        id: 3,
        username: 'Lannister',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '3snow@gmail.com',
        status: 'pending',
        age: 45,
    },
    {
        id: 4,
        username: 'Stark',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '4snow@gmail.com',
        status: 'active',
        age: 16,
    },
    {
        id: 5,
        username: 'Targaryen',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '5snow@gmail.com',
        status: 'passive',
        age: 22,
    },
    {
        id: 6,
        username: 'Melisandre',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '6snow@gmail.com',
        status: 'active',
        age: 15,
    },
    {
        id: 7,
        username: 'Clifford',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '7snow@gmail.com',
        status: 'passive',
        age: 44,
    },
    {
        id: 8,
        username: 'Frances',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '8snow@gmail.com',
        status: 'active',
        age: 36,
    },
    {
        id: 9,
        username: 'Roxie',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'pending',
        age: 65,
    },
    {
        id: 10,
        username: 'Roxie',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'active',
        age: 65,
    },
];
