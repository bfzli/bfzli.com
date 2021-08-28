import React from 'react'
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled.div``

const Bio = styled.p`
font-size: 2.2em;
font-weight: 900;`

export default function About({locales}) {
    return (
        <Container>
            <Helmet>
                <title>{locales.name}</title>
            </Helmet>
            <Bio>
                {locales.bio}
            </Bio>
        </Container>
    )
}
