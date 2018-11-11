import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { cn } from '@bem-react/classname';

const cnHeader = cn('Header');

class Header extends Component {
  render() {
    return (
        <header className={cnHeader({expand: true, absolute: true, fixed: 'top'})}>
            <div className={cnHeader('Container')}>
                <Logo />
                <Navigation />
                <div className={cnHeader('Container', {toggler: true, icon: true})}></div>
            </div>
        </header>
    );
  }
}

export default Header;