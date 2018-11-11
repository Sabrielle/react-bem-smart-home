import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { cn } from '@bem-react/classname';

const cnMain = cn('MainPanel');

class App extends Component {
  render() {
    return (
      <div className={cnMain()}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
