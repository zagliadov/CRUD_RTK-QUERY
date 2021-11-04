import { FC, useEffect } from 'react';
import { usePrivatMutation } from '../../features/services/authApi';
import { saveUser } from '../../features/Auth/authSlice';
import { useAppDispatch } from '../../features/store';
import styled from 'styled-components';
import Header from '../Header/Header';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import DashboardRoute from '../DashboardRoute/DashboardRoute';

const Wrapper = styled.div`
    display: flex;
`;

const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 10px;
    height: 100vh;
`;



const Dashboard: FC = () => {

    const [privat, { data }] = usePrivatMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!localStorage.getItem('token')) return
        privat(localStorage.getItem('token'));
    }, [privat]);

    useEffect(() => {
        if (!data) return
        dispatch(saveUser(data))
    }, [data, dispatch])



    return (
        <DashboardWrapper>
            <Header />

            <Wrapper>
                <DashboardMenu />
                <DashboardRoute />
            </Wrapper>

        </DashboardWrapper>

    );
};

export default Dashboard;