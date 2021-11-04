import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useLoginMutation } from '../../../features/services/authApi';
import { saveToken } from '../../../features/Auth/authSlice';
import { useAppDispatch } from '../../../features/store';
import { useHistory } from 'react-router-dom';


const RegistrationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px
`;
const InputText = styled.input`
    padding: 5px;
    margin-top: 5px;
    outline: none;
    border-radius: 4px;
    &:nth-child(4) {
        margin-bottom: 5px;
    }
    &:nth-child(5) {
        align-self: center;
        width: 50%;
        border: none;
        background-color: transparent;
        box-shadow: 1px 1px 5px silver;
        cursor: pointer
    }
`;

interface IFormDataLogin {
    email: string,
    password: string,
}

const Login: FC = () => {

    const history = useHistory();
    const dispatch = useAppDispatch();
    const [login, { data }] = useLoginMutation();
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData: IFormDataLogin) => {
        login(formData);
    }

    useEffect(() => {
        if (!data) return
        dispatch(saveToken(data.token))
        history.push('/privat')
    }, [data, dispatch, history])





    return (
        <RegistrationWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputText type='text' {...register('email', { required: true })} />
                <InputText type='text' {...register('password', { required: true })} />
                <InputText type='submit' value='Sign In' />
            </Form>
        </RegistrationWrapper>
    );
};

export default Login;