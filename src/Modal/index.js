import React, { Component } from 'react';
import './Modal.css';
import Button from '../Button';
import Input from '../Input';
import { cn } from '@bem-react/classname';

const cnModal = cn('Modal');

class Modal extends Component {
  render() {
    return (
        <div className={cnModal()} id={this.props.id}>
            <div className={cnModal('Body')}>
                <div className={cnModal('Header')}>
                    <div className={cnModal('Controls')}>
                        <Input id="brightness" title="Яркость" name="brightness" min="0" max="2" step="0.1"/>
                        <Input id="contrast" title="Контрастность" name="contrast" min="0" max="2" step="0.1"/>
                    </div>
                    <Button className={cnModal('Close')} title="Все камеры"/>
                </div>
                <div className={cnModal('Content')} id="modal-video">
                    <canvas id="canvas" className={cnModal('Canvas')} width="30" height="130"></canvas>
                </div>
            </div>
        </div>
    );
  }
}

export default Modal;
