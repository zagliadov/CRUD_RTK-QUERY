import { FC, useEffect } from 'react';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import styled from 'styled-components';
import Privat from '../Privat/Privat';
import Dashboard from '../Dashboard/Dashboard';
import { useAppDispatch } from '../../features/store';
import { saveToken } from '../../features/Auth/authSlice';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;


const App: FC = () => {

    const dispatch = useAppDispatch();
 
    useEffect(() => {
        if(!localStorage.getItem('token')) return 
        dispatch(saveToken(localStorage.getItem('token')))
    }, [dispatch])

    return (
        <Wrapper>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/privat' exact>
                    <Privat />
                </Route>
                <Route path="/privat/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Registration />
                </Route>
            </Switch>
        </Wrapper>

    );
};

export default App;