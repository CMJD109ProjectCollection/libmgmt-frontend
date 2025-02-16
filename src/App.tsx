import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Book } from './components/Book';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Book/>
    </div>
  );
}

export default App;
