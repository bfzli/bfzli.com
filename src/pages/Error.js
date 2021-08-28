import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
`
const NotFound = styled.h1`
font-size: 2.5em;
margin-bottom: -.2em;
font-weight: 900;`

const NotFoundText = styled.p`
width: 50%;
font-weight: 500;
text-align: center;
`

export default function Error() {
    return (
        <Container>
            <Helmet>
                <title>Not Found | Bfzli</title>
            </Helmet>
            <NotFound>404 Not Found</NotFound>
            <NotFoundText>The page you where looking for was not found or is on private mode, <a href="/" rel="norefferer"><b>dclick here to go back home</b></a>.</NotFoundText>
        </Container>
    )
}
