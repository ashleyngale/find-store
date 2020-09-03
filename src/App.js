import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './Search/Search.js';
import Nav from './Nav/Nav.js';
import Info from './Info/Info.js';

function App() {
  
  render(); {
    return (
      <main className='App'>
        <Nav/>
        <SearchBar/>
        <Info/>
      </main>
    )
  }
}

  export default App;

  //https://find-store.vercel.app