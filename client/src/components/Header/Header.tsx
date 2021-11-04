import { FC } from 'react';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

const HeaderWrapper = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Header: FC = () => {


    return (
        <HeaderWrapper>
            <Logo />
            <Navigation />
        </HeaderWrapper>
    );
};

export default Header;