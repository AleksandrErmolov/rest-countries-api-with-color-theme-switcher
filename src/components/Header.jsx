import React from 'react'
import styled from 'styled-components'
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from './Container'

export default function Header() {

    const HeaderEl = styled.header``;

    const Wrapper = styled.div``;

    const Title = styled.a.attrs({
        href: '/'
    })``;

    const ModeSwitcher = styled.div``;


    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world?
                        <ModeSwitcher>
                            <IoMoon /> Light Theme
                        </ModeSwitcher>
                    </Title>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
