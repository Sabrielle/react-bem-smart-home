import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

const cnApp = cn('MainPanel');
const cnContent = cn('Content');

class App extends Component {
  render() {
    return (
      <RegistryConsumer>
          {registries => {
              const registry = registries[cnApp()];
              const Content = registry.get(cnContent());

          return (
            <div className={cnApp()}>
              <Header />
              <Content />
              <Footer />
            </div>
          );
      }
    }
    </RegistryConsumer>
    );
  }
}

export default App;
