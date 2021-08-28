import React from 'react'
import styled from 'styled-components';
import logo from '../assets/images/young.jpg';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center`

const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center`

const Item = styled.a`
font-size: 1.2em;
font-weight: 700;
margin-left: .9em`

const Theme = styled.svg`
width: 1.5em;
margin-top: .18em;
fill: var(--primary);
display: flex;
align-items: center;
transition: all .2s ease-in-out;
&:hover{
    opacity: .5;
}
margin-left: 1em;
`

const Link = styled.a`
&:hover{
    opacity: .9;
}`
const Profile = styled.img`
width: 5em;
border-radius: 999px;`

export default function Header({darkmode, toggler}) {
    return (
        <Container>
            <Link href="/">
                <Profile src={logo} />
            </Link>
            <Menu>
                {
                    darkmode === false
                        ?
                        <Theme onClick={toggler} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0H7C5.14348 2.76642e-08 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14H15C16.8565 14 18.637 13.2625 19.9497 11.9497C21.2625 10.637 22 8.85652 22 7C22 5.14348 21.2625 3.36301 19.9497 2.05025C18.637 0.737498 16.8565 2.76642e-08 15 0V0ZM7 10C6.20435 10 5.44129 9.68393 4.87868 9.12132C4.31607 8.55871 4 7.79565 4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4C7.79565 4 8.55871 4.31607 9.12132 4.87868C9.68393 5.44129 10 6.20435 10 7C10 7.79565 9.68393 8.55871 9.12132 9.12132C8.55871 9.68393 7.79565 10 7 10V10Z" />
                        </Theme>
                        :
                        <Theme onClick={toggler} viewBox="0 0 22 14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0H15C16.8565 2.76642e-08 18.637 0.737498 19.9497 2.05025C21.2625 3.36301 22 5.14348 22 7C22 8.85652 21.2625 10.637 19.9497 11.9497C18.637 13.2625 16.8565 14 15 14H7C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 2.76642e-08 7 0V0ZM15 10C15.7956 10 16.5587 9.68393 17.1213 9.12132C17.6839 8.55871 18 7.79565 18 7C18 6.20435 17.6839 5.44129 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10V10Z" />
                        </Theme>
                }
                <Item href="/" rel="norefferer">Home</Item>
                <Item href="/about" rel="norefferer">About</Item>
            </Menu>
        </Container>
    )
}
