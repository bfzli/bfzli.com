import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Article from './pages/Article'
import {useState, useEffect} from 'react';
var Markdown = require('react-remarkable');


const Container = styled.div`
  padding: 5% 25%;
  @media (max-width: 768px) {
  padding: 5%;
}
`

const locales = {
  image: 'te',
  name: 'Benjamin Fazli',
  username: 'bfzli',
  bio: <Markdown>{`
  Hello there 👋,

  It's me, a passionate full stack developer and, designer based in North Macedonia. While studying there Informatics in the first year at Mother Teresa Univeristy.
  
  Overall I'm a web enthusiast. I like everything that has to do with web & design, and my ideas revolves around making awesome web applications for society with a focus on visual ideas, and making products to offer as open source.
  
  `}</Markdown>
};

let data = [
  {
    id: 1,
    path: '/what-is-figma-and-why-you-should-use-it',
    title: 'What is Figma, and why you should use it?',
    description: `
    Figma is a graphics editing and user interface design tool that is used mostly for Prototyping, but nonetheless for anything else that has to do with design and creativity.
    And why Figma is unbeatable for now? In fact, there are many factors, to begin with, one of the best features of Figma is that it runs as a web-based tool, not just that, it is also available for mostly all desktop systems. It is also free and incuses a variety of tools that can be used to design and share.
    Figma is used by designers around the world, mostly in UX (User Experience) and UI (User Interface), it has millions of users, and a community who contributes with designs on their Showcase page, that are available for clone and use with a default license that requires attribute.
    `,
    excerpt: 'The reason eval is generally considered dangerous is because it is very easy for untrusted code to sneak in. Consider a page that allows you specify input via query string, where the input box is prepopulated with the value in the query string.',
    date: 'Saturday, 28 Aug 2021',
    tags: ['Graphic Design', 'Design Tools'],
    keywords: ['Figma', 'Graphic Design', 'Designers', 'Design Tool', 'Editing Tool'],
    author: 'Benjamin Fazli',
    thumbnail: './thumbnails/blog_1.jpg'
  }
]

export default function Controller() {

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'lightmode');
      setDarkmode(false);
    }
    else if (localStorage.getItem('theme') === 'lightmode') {
      setDarkmode(false);
    }
    else if (localStorage.getItem('theme') === 'darkmode') {
      setDarkmode(true);
    }
  }, [])

  const toggler = () => {
    if (darkmode === false) {
      setDarkmode(true)
      localStorage.setItem('theme', 'darkmode')
    }
    else {
      setDarkmode(false)
      localStorage.setItem('theme', 'lightmode')
    }
  }
  var body = document.body;

  return (
    <Container className={darkmode === false ? body.classList.remove("darkmode") : body.classList.add("darkmode")}>
      <Header darkmode={darkmode} toggler={() => toggler()} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home data={data} />
          </Route>
          <Route path="/about">
            <About locales={locales} />
          </Route>
          {data.map(article => (
            <Route key={article.id} path={article.path}>
              <Article article={article} />
            </Route>
          ))}
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container >
  )
}
