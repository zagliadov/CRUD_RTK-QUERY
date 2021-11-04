import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {useRegistrationMutation} from '../../../features/services/authApi'


interface IFormData {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}
const RegistrationWrapper = styled.div`
    display: flex;
    justify-content: center;
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


const Registration: FC = () => {

    const { register, handleSubmit } = useForm();
    const [registration] = useRegistrationMutation();
    const onSubmit = (data: IFormData) => {
        registration(data)
    }

    return (
        <RegistrationWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputText type='text' {...register('firstname', { required: true })} />
                <InputText type='text' {...register('lastname', { required: true })} />
                <InputText type='text' {...register('email', { required: true })} />
                <InputText type='text' {...register('password', { required: true })} />
                <InputText type='submit' defaultValue='Sign Up' />
            </Form>
        </RegistrationWrapper>
    );
};

export default Registration;