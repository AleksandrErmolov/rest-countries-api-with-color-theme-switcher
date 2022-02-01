import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from './Container'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;





export default function Header() {

    const [theme, setTheme] = useState('light')


    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Link to='/'> <Title> Where is the world? </Title> </Link>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'ligth'
                            ? (<IoMoonOutline size="14px" />)
                            : (<IoMoon size="14px" />)
                        }
                        <span style={{ marginLeft: '0.75rem' }}> {theme} Theme</span>
                        </ModeSwitcher>
                   
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
