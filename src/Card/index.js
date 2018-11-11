import React, { Component } from 'react';
import './Card.css';
import cross from "./cross.svg";
import Video from '../Video';
import { cn } from '@bem-react/classname';

const cnCard = cn('Card');

class Card extends Component {
  render() {
    return (
        <div className={cnCard({size: this.props.size})}>
            <div className={cnCard('Close')}>
                <img src={cross} alt="Закрыть"/>
            </div>
            <div className={cnCard('Header')}>
                <h4 className={cnCard('Title')}>{this.props.title}</h4>
            </div>
            <div className={cnCard('Content')} id={`item-${this.props.id}`}>
                <Video id={this.props.id}/>
            </div>
        </div>
    );
  }
}

export default Card;
