import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material'

export default function Header() {
    const Navbar = styled.div`
            background-color: yellow;
            overflow: hidden;
        `;
    const Button = styled.a`
            float: left;
            color: blue;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            
        `;

    return (
        <Container maxW='1200px'>
            <Navbar>
                <Button href="/">Home</Button>
                <Button href='/categories'>Categories</Button>
            </Navbar>
            <Outlet />
        </Container>
    );
}