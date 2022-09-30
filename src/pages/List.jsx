import React from 'react';
import styled from 'styled-components';
import Datatable from '../components/Datatable';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const ListContainer = styled.div`
    flex: 6;
`;

const Title = styled.h4`
    margin-bottom: 20px;
    font-weight: 500;
`;

const List = () => {
    return (
        <Container>
            <Sidebar />
            <ListContainer>
                <Navbar />
                <Datatable />
            </ListContainer>
        </Container>
    );
};

export default List;
