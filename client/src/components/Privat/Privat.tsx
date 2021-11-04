import { FC, useEffect } from 'react';
import { usePrivatMutation } from '../../features/services/authApi';
import { saveUser } from '../../features/Auth/authSlice';
import { useAppDispatch } from '../../features/store';
import Header from '../Header/Header';


const Privat: FC = () => {

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
        <div>
            <Header />
            Privat
        

        </div>
    );
};

export default Privat;