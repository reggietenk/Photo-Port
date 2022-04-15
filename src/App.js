import React from 'react';
import Nav from '../src/components/Nav'
import './App.css';
import About from '../src/components/About ';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;