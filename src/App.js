import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';
import Single from './pages/Single';
import New from './pages/New';
import { productInputs, userInputs } from './formSource';
import { Dark } from './style/Dark';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

const Container = styled.div`
    ${(props) => props.className === 'dark' && Dark}
`;

function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <Container className={darkMode ? 'dark' : ''}>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='users'>
                            <Route index element={<List />} />
                            <Route path=':userId' element={<Single />} />
                            <Route
                                path='new'
                                element={
                                    <New
                                        inputs={userInputs}
                                        title='Add New User'
                                    />
                                }
                            />
                        </Route>
                        <Route path='products'>
                            <Route index element={<List />} />
                            <Route path=':productId' element={<Single />} />
                            <Route
                                path='new'
                                element={
                                    <New
                                        inputs={productInputs}
                                        title='Add New Product'
                                    />
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
