import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Widget from '../components/Widget';
import Featured from '../components/Featured';
import Chart from '../components/Chart';
import TableTransactions from '../components/Table';

const Container = styled.div`
    display: flex;
`;
const HomeContainer = styled.div`
    flex: 6;
`;
const WidgetContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
`;
const ChartContainer = styled.div`
    display: flex;
    padding: 5px 20px;
    gap: 20px;
`;
const ListContainer = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 20px;
`;
const Title = styled.h4`
    margin-bottom: 15px;
    font-weight: 500;
    color: gray;
`;

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <HomeContainer>
                <Navbar />
                <WidgetContainer>
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </WidgetContainer>
                <ChartContainer>
                    <Featured />
                    <Chart aspect={2 / 1} title='Last 6 Months (Revenue)' />
                </ChartContainer>
                <ListContainer>
                    <Title>Latest Transactions</Title>
                    <TableTransactions />
                </ListContainer>
            </HomeContainer>
        </Container>
    );
};

export default Home;
