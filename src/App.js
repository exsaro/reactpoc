import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shoplist';
import NavBar from './components/navbar';

function App() {
  
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <ShoppingList />
      </main>
    </React.Fragment>
  );
}

export default App;
