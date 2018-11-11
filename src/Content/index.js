import React, { Component } from 'react';
import './Content.css';
import Card from '../Card';
import Modal from '../Modal';
import { cn } from '@bem-react/classname';

const cnContent = cn('Content');

class Content extends Component {
  render() {
    return (
        <main className={cnContent(null, ['Container'])}>
            <div className={cnContent('Header')}>
                <h1>Видеотрансляция</h1>
            </div>
            <div className={cnContent('Grid')}>
                <Card size="m" id="1" title="Камера 1" />
                <Card size="m" id="2" title="Камера 2" />
                <Card size="m" id="3" title="Камера 3" />
                <Card size="m" id="4" title="Камера 4" />
            </div>
            <Modal id="myModal" />
        </main>
    );
  }
}

export default Content;
