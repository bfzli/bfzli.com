import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled.div`
margin-top: 6%;
margin-bottom: 3%`

const Title = styled.h1`
font-size: 2.5em;
font-weight: 900`

const Body = styled.p`
font-size: 1.1em;
font-weight: 500`

export default function Article({article}) {
    return (
        <Container>
            <Helmet>
                <title>{article.title} - Bfzli</title>
                <meta name="description" content={article.excerpt} />
                <meta name="keywords" content={article.keywords} />
                <meta name="author" content={article.author} />
                <meta name="thumbnail" content={article.thumbnail} />
                <meta content={article.thumbnail} property="og:image" />
                <meta content={article.thumbnail} property="twitter:image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content={article.excerpt} name="description" data-react-helmet="true" />
                <meta content={article.excerpt} property="og:description" data-react-helmet="true" />
                <meta content={article.excerpt} property="twitter:description" data-react-helmet="true" />
                <meta content={article.title} property="og:title" data-react-helmet="true" />
                <meta content={article.title} property="twitter:title" data-react-helmet="true" />
            </Helmet>
            <Title>{article.title}</Title>
            <p>{article.date}</p>
            <Body>{article.description}</Body>
        </Container>
    )
}
