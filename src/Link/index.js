import React, { Component } from 'react';
import './Link.css';
import { cn } from '@bem-react/classname';

const cnLink = cn('Link');

class Link extends Component {
  render() {
    return (
        <a className={cnLink(null, [this.props.className])} href={this.props.href}>{this.props.title}</a>
    );
  }
}

export default Link;