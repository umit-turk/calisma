import React from 'react'
import { Container, Logo, Title,TitleDiv } from './headerStyles'

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src="/images/tesodev-logo.svg" alt="logo"/>
            </Logo>
            <TitleDiv>
                <Title>Search web app</Title>
            </TitleDiv>
        </Container>
    )
}

export default Header
