import React from 'react';
import styled from 'styled-components';
import {
    KeyboardArrowUp,
    PersonOutline,
    ShoppingCartOutlined,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined,
} from '@mui/icons-material';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    height: 100px;
`;

// left
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: lightgray;
`;
const Counter = styled.span`
    font-size: 28px;
    font-weight: 300;
`;
const Link = styled.span`
    width: max-content;
    font-size: 12px;
    border-bottom: 1px solid gray;
    cursor: pointer;
`;

// right
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Percentage = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(props) => (props.type === 'positive' ? 'green' : 'red')};
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    align-self: flex-end;
`;

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <PersonOutline
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            borderRadius: '5px',
                            padding: '5px',
                            fontSize: '18px',
                        }}
                    />
                ),
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <ShoppingCartOutlined
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)',
                            borderRadius: '5px',
                            padding: '5px',
                            fontSize: '18px',
                        }}
                    />
                ),
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGs',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <MonetizationOnOutlined
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                            borderRadius: '5px',
                            padding: '5px',
                            fontSize: '18px',
                        }}
                    />
                ),
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (
                    <AccountBalanceWalletOutlined
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(123, 0, 128, 0.2)',
                            borderRadius: '5px',
                            padding: '5px',
                            fontSize: '18px',
                        }}
                    />
                ),
            };
            break;

        default:
            break;
    }
    return (
        <Container>
            <Left>
                <Title>{data.title}</Title>
                <Counter>
                    {data.isMoney && '$'} {amount}
                </Counter>
                <Link>{data.link}</Link>
            </Left>
            <Right>
                <Percentage type='positive'>
                    <KeyboardArrowUp
                        style={{ display: 'flex', alignItems: 'center' }}
                    />
                    {diff}%
                </Percentage>
                <Icon>{data.icon}</Icon>
            </Right>
        </Container>
    );
};

export default Widget;
