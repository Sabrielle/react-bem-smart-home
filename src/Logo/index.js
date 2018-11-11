import React, { Component } from 'react';
import logo from './logo.svg';
import './Logo.css';
import { cn } from '@bem-react/classname';

const cnLogo = cn('Logo');

class Logo extends Component {
  render() {
    return (
        <div className={cnLogo()}>
            <img src={logo} alt="Яндекс.Дом" />
        </div>
    );
  }
}

export default Logo;