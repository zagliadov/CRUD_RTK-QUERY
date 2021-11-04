import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    useDeleteTodoMutation,
    useCheckedTodoMutation,
    useGetAllTodosQuery,
} from '../../../../features/services/todoApi';
import styled from 'styled-components';


const TodoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
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
const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface ITodo {
    userId?: number;
    id: number;
    title?: string;
    completed: boolean;
}

interface ITodoListProps {
    count: string;
}

const TodoList: FC<ITodoListProps> = ({ count }) => {


    const [removeTodo] = useDeleteTodoMutation();
    const [checkedTodo] = useCheckedTodoMutation();
    const { data: todos }: any = useGetAllTodosQuery(count);


    const handleRemoveTodo = async (id: number) => {
        await removeTodo(id).unwrap();
    }

    const handleCheckedTodo = async (check: ITodo) => {
        await checkedTodo(check).unwrap();
    }


    return (
        <div>
            {todos && todos.map((todo: ITodo) => {
                return (
                    <TodoWrapper key={todo.id}>
                        <MyLink to={`/privat/dashboard/todo/${todo.id}`}>{todo.title}</MyLink>
                        <CheckboxWrapper>
                            <input type="checkbox" defaultChecked={todo.completed}
                                onClick={() => handleCheckedTodo({
                                    completed: todo.completed,
                                    id: todo.id,
                                })} />
                            <Button onClick={() => handleRemoveTodo(todo.id)}>x</Button>
                        </CheckboxWrapper>

                    </TodoWrapper>
                )
            })}
        </div>
    );
};

export default TodoList;