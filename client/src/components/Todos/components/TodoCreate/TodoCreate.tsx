import { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../../features/store';
import { useCreateTodoMutation } from '../../../../features/services/todoApi';
import { useHistory } from 'react-router-dom';

const Form = styled.form``;
const InputText = styled.input`
    
`;
const InputSubmit = styled.input``;



interface ICreateTodo {
    id: string;
    title: string;
    completed: boolean;
}

const TodoCreate: FC = () => {

    const history = useHistory();
    const [createTodo] = useCreateTodoMutation();
    const { register, handleSubmit } = useForm();
    const user = useAppSelector(store => store.auth.user);

    const onSubmit = async (data: ICreateTodo) => {
        data.id = String(user.id);
        data.completed = false;
        await createTodo(data);
        history.push('/privat/dashboard/todos')
    }



    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputText type='text' {...register('title', { required: true })}
                placeholder='title' />
            <InputSubmit type='submit' />
        </Form>
    );
};

export default TodoCreate;