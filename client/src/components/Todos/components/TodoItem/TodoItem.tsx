import { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useGetTodoByIdQuery, useCheckedTodoMutation } from '../../../../features/services/todoApi';

interface ITodo {
    id: number;
    completed: boolean;
}

interface IParams {
    id: string;
}

const TodoItem: FC<RouteComponentProps<IParams>> = ({ match }) => {

    const { data: todo }: any = useGetTodoByIdQuery(match.params.id);
    const [checkedTodo] = useCheckedTodoMutation();

    useEffect(() => {
        if (!match) return
        console.log(match)
    }, [match])

    const handleCheckedTodo = async (check: ITodo) => {
        await checkedTodo(check).unwrap();
    }


    return (
        <div>
            {todo &&
                <>
                    <span>{todo.title}</span>
                    <input type="checkbox" defaultChecked={todo.completed}
                        onClick={() => handleCheckedTodo({
                            completed: todo.completed,
                            id: todo.id,
                        })} />
                </>
            }
        </div>
    );
};

export default TodoItem;