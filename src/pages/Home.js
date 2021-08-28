import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
margin-top: 6%;
margin-bottom: 3%;
display: flex;
flex-direction: column`


const Tag = styled.p`
font-size: .8em;
font-weight: 500;
padding: .3em .75em;
margin-left: .85em;
background: var(--primary);
color: var(--secondary);
border-radius: 3px;
`

const Article = styled.a`
padding: 0 1em;
border-radius: 3px;
margin-bottom: 1em;
transition: all .3s ease-in-out;
&:hover{
    color: var(--secondary);
    background: var(--primary);
    opacity: .3;
}

&:hover ${Tag}{
    border: 1px solid var(--secondary);
}
`

const Title = styled.h2`
font-size: 1.5em;
font-weight: 800;
margin-bottom: -.2em`

const Information = styled.div`
display: flex;
align-items: center;
justify-content: space-between`

const Excerpt = styled.p`
font-weight: 500;
margin-bottom: -.25em`

const Date = styled.p`
font-weight: 600;
font-style: italic;
`

const Tags = styled.div`
display: flex;
justify-content: center`

export default function Home({data}) {
    return (
        <Container>
            {data.map(data => (
                <Article key={data.id} href={data.path} rel="norefferer">
                    <Title>
                        {data.title}
                    </Title>
                    <Excerpt>
                        {data.excerpt}
                    </Excerpt>
                    <Information>
                        <Date>
                            {data.date}
                        </Date>
                        <Tags>
                            {data.tags.map(tagnow => (<Tag>{tagnow}</Tag>))}
                        </Tags>
                    </Information>
                </Article>
            ))}
        </Container>
    )
}
