import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: center;
    padding: 10px;
    box-sizing: border-box;
`;

const Form = styled.form`
    padding: 5px;
        input[type='text'] {
            border: none;
        }
        input[type='submit'] {
            background-color: transparent;
            outline: none;
            border: none;
            box-shadow: 1px 1px 1px silver;
            cursor: pointer;
        }

`;

const Button = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    box-shadow: 1px 1px 1px silver;
    cursor: pointer;
`;


interface IData {
    limit: string;
}

const TodoLimitation: FC<any> = ({ setCount }) => {

    const { handleSubmit, register } = useForm();
    const [todoLimitForm, setTodoLimitForm] = useState<boolean>(false);

    useEffect(() => {
        console.log(todoLimitForm)
    }, [todoLimitForm])


    const onSubmit = (data: IData) => {
        setCount(data.limit);
        setTodoLimitForm(!todoLimitForm);
    }
    const handleTodoLimitFormOpening = () => {
        setTodoLimitForm(!todoLimitForm);
    }


    return (
        <Wrapper>
            {todoLimitForm
                ?
                <>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <input type='number' {...register('limit')} />
                        <input type='submit' />
                        <Button onClick={() => handleTodoLimitFormOpening()}>x</Button>
                    </Form>

                </>
                :
                <>
                    <Form>
                        <Button onClick={() => handleTodoLimitFormOpening()}>Set todos limit?</Button>
                    </Form>

                </>


            }


        </Wrapper>
    );
};

export default TodoLimitation;