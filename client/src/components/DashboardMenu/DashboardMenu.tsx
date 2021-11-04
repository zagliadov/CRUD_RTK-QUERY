import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

const DashboardMenu: FC = () => {
    return (
        <div>
            <Menu>
                <MyLink to='/privat/dashboard/todos'>Todos</MyLink>
                <MyLink to='/privat/dashboard/Something_1'>Something_1</MyLink>
                <MyLink to='/privat/dashboard/Something_2'>Something_2</MyLink>
                <MyLink to='/privat/dashboard/Something_3'>Something_3</MyLink>
            </Menu>
        </div>
    );
};

export default DashboardMenu;