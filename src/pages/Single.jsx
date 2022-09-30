import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import TableTransactions from '../components/Table';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Wrapper = styled.div`
    flex: 6;
`;

const TopWrapper = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
`;

const TopLeft = styled.div`
    padding: 20px;
    flex: 1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    position: relative;
    h1 {
        margin-bottom: 10px;
        font-size: 20px;
        color: lightgray;
    }
`;

const Item = styled.div`
    display: flex;
    gap: 20px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 12px;
    color: #7451f8;
    background-color: #7551f818;
    cursor: pointer;
    border: none;
    border-radius: 0 0 0 5px;
`;

const ItemDetails = styled.div`
    h1 {
        margin-bottom: 10px;
        color: #555;
        font-size: 30px;
    }
`;
const DetailItem = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    span {
        &.key {
            font-weight: bold;
            color: gray;
            margin-right: 5px;
        }
        &.value {
            font-weight: 300;
        }
    }
`;

const TopRight = styled.div`
    flex: 2;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
`;

const BottomWrapper = styled.div`
    padding: 20px;
    margin: 10px 20px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    h1 {
        color: lightgray;
        font-size: 20px;
    }
`;

const Single = () => {
    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Navbar />
                <TopWrapper>
                    <TopLeft>
                        <Button>Edit</Button>
                        <h1>Information</h1>
                        <Item>
                            <img src='../women-cate.jpg' alt='' />
                            <ItemDetails>
                                <h1>Jane Doe</h1>
                                <DetailItem>
                                    <span className='key'>Email:</span>
                                    <span className='value'>
                                        janedoe@gmail.com
                                    </span>
                                </DetailItem>
                                <DetailItem>
                                    <span className='key'>Phone:</span>
                                    <span className='value'>+1 234 567 89</span>
                                </DetailItem>
                                <DetailItem>
                                    <span className='key'>Address:</span>
                                    <span className='value'>
                                        Elton St. 234 Garden Yd. New York
                                    </span>
                                </DetailItem>
                                <DetailItem>
                                    <span className='key'>Country:</span>
                                    <span className='value'>USA</span>
                                </DetailItem>
                            </ItemDetails>
                        </Item>
                    </TopLeft>
                    <TopRight>
                        <Chart
                            aspect={3 / 1}
                            title='User Spending (Last 6 Months)'
                        />
                    </TopRight>
                </TopWrapper>
                <BottomWrapper>
                    <h1>Last Transactions</h1>
                    <TableTransactions />
                </BottomWrapper>
            </Wrapper>
        </Container>
    );
};

export default Single;
