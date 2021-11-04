import { FC, useState } from 'react';
import styled from 'styled-components';
import TodoLimitation from './components/TodoLimitation/TodoLimitation';
import TodoList from './components/TodoList/TodoList';
import TodoCreate from './components/TodoCreate/TodoCreate';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const MyLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    padding-top: 5px;
    font-weight: bold;
    padding-bottom: 5px;
    padding-right: 5px;
    padding-left: 10px;
    color: black;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
        &:hover {
            color: silver;
            transition: all 0.3s;
        }
`;

const OptionMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
`;



const Todos: FC = () => {

    const [count, setCount] = useState<string>('');


    return (
        <Wrapper>
            <OptionMenu>
                <TodoLimitation setCount={setCount} />
                <MyLink to='/privat/dashboard/todo-create'>Create todo</MyLink>
            </OptionMenu>

            <TodoList count={count} />


        </Wrapper>
    );
};

export default Todos;