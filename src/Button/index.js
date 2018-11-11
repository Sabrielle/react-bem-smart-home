import React, { Component } from 'react';
import './Button.css';
import { cn } from '@bem-react/classname';

const cnButton = cn('Button');

class Button extends Component {
  render() {
    return (
        <button className={cnButton(null, [this.props.className])}>{this.props.title}</button>
    );
  }
}

export default Button;