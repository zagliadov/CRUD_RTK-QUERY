import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LogoWrapper = styled.div`
    display: flex;
    width: 25%;
    padding: 20px 10px;
`;

const MyLink = styled(Link)`
    padding: 5px;
    font-size: 25px;
    text-decoration: none;
`;

const Logo: FC = () => {
    return (
        <LogoWrapper>
            <MyLink to='/privat' >Logo</MyLink>
        </LogoWrapper>
    );
};

export default Logo;