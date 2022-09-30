import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Wrapper = styled.div`
    flex: 6;
`;
const Top = styled.div`
    margin: 20px;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    h1 {
        color: lightgray;
        font-size: 20px;
    }
`;
const Bottom = styled.div`
    margin: 20px;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    display: flex;
    h1 {
    }
`;
const BottomLeft = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const BottomRight = styled.div`
    flex: 2;
    form {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-around;
    }
`;
const FormInput = styled.div`
    width: 40%;
    label {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon {
            cursor: pointer;
        }
    }
    input {
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid gray;
    }
`;
const Button = styled.button`
    width: 150px;
    padding: 10px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const New = ({ inputs, title }) => {
    const [file, setFile] = useState('');

    console.log(file);

    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Navbar />
                <Top>
                    <h1>{title}</h1>
                </Top>
                <Bottom>
                    <BottomLeft>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
                            }
                            alt='avatar'
                        />
                    </BottomLeft>
                    <BottomRight>
                        <form>
                            <FormInput>
                                <label htmlFor='file'>
                                    Image:
                                    <DriveFolderUploadOutlined className='icon' />
                                </label>
                                <input
                                    type='file'
                                    id='file'
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </FormInput>
                            {inputs.map((input) => (
                                <FormInput key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                </FormInput>
                            ))}
                            <Button>Send</Button>
                        </form>
                    </BottomRight>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default New;
