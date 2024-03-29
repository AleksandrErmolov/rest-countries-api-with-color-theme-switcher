import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import styled from 'styled-components'
import { Container } from './Container';



const Wrapper = styled.main`
padding: 2rem 0;

@media (min-width:767px){
    padding: 4rem 0;
}
`;

export default function Main({children}) {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    )
}
