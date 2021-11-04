import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { removeToken, removeUser } from '../../features/Auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../features/store';



const Nav = styled.nav`

`;
const Ul = styled.ul`
    dispaly: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;
const Li = styled.li`
    display: inline-block;
    padding: 5px 10px;
`;
const MyLink = styled(Link)`
    text-decoration: none;
    font-size: 23px;
`;

const Navigation: FC = () => {

    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);
    const clean = (): void => {
        localStorage.removeItem('token');
        dispatch(removeToken(''));
        dispatch(removeUser([]))
    }

    


    return (
        <Nav>
            {token ?
                <Ul>
                    <Li>
                        <MyLink to='/' onClick={() => clean()}>
                            Log Out
                        </MyLink>
                    </Li>
                    <Li>
                        <MyLink to='/privat/dashboard'>
                            Dashboard
                        </MyLink>
                    </Li>
                </Ul>
                :
                <Ul>
                    <Li>
                        <MyLink to='/signin'>
                            Sing In
                        </MyLink>
                    </Li>
                    <Li>
                        <MyLink to='/signup'>
                            Sing Up
                        </MyLink>
                    </Li>
                </Ul>
            }


        </Nav>
    );
};

export default Navigation;