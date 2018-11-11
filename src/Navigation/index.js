import React, { Component } from 'react';
import './Navigation.css';
import Link from '../Link';
import { cn } from '@bem-react/classname';

const cnNavigation = cn('Navigation');

class Navigation extends Component {
  render() {
    return (
        <nav className={cnNavigation()}>
            <ul className={cnNavigation('List')}>
                <li className={cnNavigation('Item')}>
                    <Link className={cnNavigation('Link')} href="#" title="Сводка" />
                </li>
                <li className={cnNavigation('Item')}>
                    <Link className={cnNavigation('Link')} href="#" title="Устройства" />
                </li>
                <li className={cnNavigation('Item')}>
                    <Link className={cnNavigation('Link')} href="#" title="Сценарии" />
                </li>
                <li className={cnNavigation('Item')}>
                    <Link className={cnNavigation('Link')} href="broadcast" title="Видеотрансляция" />
                </li>
            </ul>
        </nav>
    );
  }
}

export default Navigation;