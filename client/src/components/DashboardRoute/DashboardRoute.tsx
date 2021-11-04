import { FC } from 'react';
import { Switch, Route, } from 'react-router-dom';
import styled from 'styled-components';
import Todos from '../Todos/Todos';
import TodoItem from '../Todos/components/TodoItem/TodoItem';
import TodoCreate from '../Todos/components/TodoCreate/TodoCreate';


const DashboardBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const DashboardRoute: FC = () => {
    return (
        <DashboardBody>
            <Switch>
                <Route path="/privat/dashboard/todos">
                    <Todos />
                </Route>
                <Route path="/privat/dashboard/todo/:id" component={TodoItem} />
                <Route path="/privat/dashboard/todo-create" component={TodoCreate} />
            </Switch>
        </DashboardBody>
    );
};

export default DashboardRoute;