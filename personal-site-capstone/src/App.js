import React from 'react';
import './style.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AboutMe />
        <Project />
        <Skills />
        <Footer />
      </header>
    </div>
  );
}

export default App;
