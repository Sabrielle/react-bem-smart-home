import React, { Component } from 'react';
import './Input.css';
import '../Link/Link.css';
import { cn } from '@bem-react/classname';

const cnInput = cn('Input');

class Input extends Component {
  render() {
    return (
      <div className={cnInput()}>
        <label htmlFor={this.props.id} className={cnInput('Label')}>{this.props.title}</label>
        <input id={this.props.id} type="range" name={this.props.name} min={this.props.min} max={this.props.max} step={this.props.step} />
      </div>
    );
  }
}

export default Input;