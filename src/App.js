import React, { Fragment } from 'react'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import List from './Components/List';

function App() {
  return (
    <Fragment>
      <Header />
      <List />
      <Footer />
    </Fragment>
  );
}

export default App;
