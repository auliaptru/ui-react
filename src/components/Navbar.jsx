import React from 'react';
import styled from 'styled-components';
import {
    SearchOutlined,
    LanguageOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    NotificationsNoneOutlined,
    ChatBubbleOutlineOutlined,
    ListOutlined,
} from '@mui/icons-material';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const Container = styled.div`
    height: 50px;
    border-bottom: 0.5px solid rgb(231, 288, 228);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    &::placeholder {
        font-size: 12px;
    }
`;

const Items = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`;

const NotifNum = styled.p`
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: 0px;
`;

const styleIcon = {
    fontSize: '20px',
    marginRight: '5px',
};

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <Container className='navbar'>
            <Wrapper>
                <Search className='search'>
                    <Input type='text' placeholder='Search...' />
                    <SearchOutlined />
                </Search>
                <Items>
                    <Item>
                        <LanguageOutlined style={styleIcon} />
                        English
                    </Item>
                    <Item>
                        <DarkModeOutlined
                            style={styleIcon}
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                    </Item>
                    <Item>
                        <FullscreenExitOutlined style={styleIcon} />
                    </Item>
                    <Item>
                        <NotificationsNoneOutlined style={styleIcon} />
                        <NotifNum>1</NotifNum>
                    </Item>
                    <Item>
                        <ChatBubbleOutlineOutlined style={styleIcon} />
                        <NotifNum>2</NotifNum>
                    </Item>
                    <Item>
                        <ListOutlined style={styleIcon} />
                    </Item>
                    <Item>
                        <Image src='../women-cate.jpg' alt='avatar' />
                    </Item>
                </Items>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
