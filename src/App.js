import React from 'react';
import Nav from '../src/components/Nav'
import './App.css';
import About from '../src/components/About ';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;