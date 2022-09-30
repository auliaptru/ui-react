import React from 'react';
import styled from 'styled-components';
import {
    Dashboard,
    PersonOutlineOutlined,
    StoreOutlined,
    CreditCard,
    LocalShipping,
    InsertChart,
    NotificationsNone,
    SettingsSystemDaydreamOutlined,
    PsychologyOutlined,
    SettingsApplications,
    AccountCircleOutlined,
    ExitToApp,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const Container = styled.div`
    flex: 1;
    border-right: 0.5px solid rgb(230, 227, 227);
    min-height: 100vh;
    background-color: white;
`;

const Top = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5px solid rgb(230, 227, 227);
`;
const Logo = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: #a639ff;
    width: 100%;
    text-align: center;
`;

const Center = styled.div`
    padding: 0px 10px;
`;
const List = styled.ul``;
const Title = styled.p`
    font-size: 10px;
    font-weight: 700;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
    letter-spacing: 0.7px;
`;
const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ece8ff;
        border-radius: 5px;
    }
`;
const Icon = styled.div`
    display: flex;
    font-size: 18px;
    color: #8e12e0;
`;
const IconText = styled.span`
    font-size: 13px;
    font-weight: 300;
    color: #888;
    margin-left: 10px;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;
const ColorOption = styled.div`
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #8e12e0;
    cursor: pointer;
    &:nth-child(1) {
        background-color: whitesmoke;
    }
    &:nth-child(2) {
        background-color: #333;
    }
`;

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <Container className='sidebar'>
            <Top className='top'>
                <Link to='/' className='link'>
                    <Logo className='logo'>ADMIN</Logo>
                </Link>
            </Top>
            <Center className='center'>
                <Title>MAIN</Title>
                <List>
                    <ListItem>
                        <Icon className='icon'>
                            <Dashboard />
                        </Icon>
                        <Link to='/' className='link'>
                            <IconText>Dashboard</IconText>
                        </Link>
                    </ListItem>

                    <Title>LISTS</Title>

                    <ListItem>
                        <Icon className='icon'>
                            <PersonOutlineOutlined />
                        </Icon>
                        <Link to='/users' className='link'>
                            <IconText>Users</IconText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <StoreOutlined />
                        </Icon>
                        <Link to='/products' className='link'>
                            <IconText>Products</IconText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <CreditCard />
                        </Icon>
                        <IconText>Orders</IconText>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <LocalShipping />
                        </Icon>
                        <IconText>Delivery</IconText>
                    </ListItem>

                    <Title>USEFUL</Title>

                    <ListItem>
                        <Icon className='icon'>
                            <InsertChart />
                        </Icon>
                        <IconText>Stats</IconText>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <NotificationsNone />
                        </Icon>
                        <IconText>Notifications</IconText>
                    </ListItem>

                    <Title>SERVICE</Title>

                    <ListItem>
                        <Icon className='icon'>
                            <SettingsSystemDaydreamOutlined />
                        </Icon>
                        <IconText>System Health</IconText>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <PsychologyOutlined />
                        </Icon>
                        <IconText>Logs</IconText>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <SettingsApplications />
                        </Icon>
                        <IconText>Settings</IconText>
                    </ListItem>

                    <Title>USER</Title>

                    <ListItem>
                        <Icon className='icon'>
                            <AccountCircleOutlined />
                        </Icon>
                        <IconText>Profile</IconText>
                    </ListItem>
                    <ListItem>
                        <Icon className='icon'>
                            <ExitToApp />
                        </Icon>
                        <IconText>Logout</IconText>
                    </ListItem>
                </List>
            </Center>
            <Bottom>
                <ColorOption onClick={() => dispatch({ type: 'LIGHT' })} />
                <ColorOption onClick={() => dispatch({ type: 'DARK' })} />
            </Bottom>
        </Container>
    );
};

export default Sidebar;
