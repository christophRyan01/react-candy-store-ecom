import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { GiChocolateBar } from "react-icons/gi";

export const Nav = styled.nav `
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    font-weight: 700;
`;

export const NavLink = styled(Link)
`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width 400px) {
        position: absolute;
        top: 10;
        left: 25;
    }
`;

export const NavIcon = styled.div `
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
        font-size: 1.2rem;
    }
`

export const Bars = styled(GiChocolateBar)
` 
    font-size: 2.5rem;
    transform: translate(-50%, -15%);
`;