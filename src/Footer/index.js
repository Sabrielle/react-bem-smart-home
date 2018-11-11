import React, { Component } from 'react';
import './Footer.css';
import Link from '../Link';
import { cn } from '@bem-react/classname';

const cnFooter = cn('Footer');

class Footer extends Component {
  render() {
    return (
        <footer className={cnFooter()}>
            <ul className={cnFooter('List')}>
                <li className={cnFooter('Item')}>
                    <Link className={cnFooter('Link')} href="#" title="Помощь" />
                </li>
                <li className={cnFooter('Item')}>
                    <Link className={cnFooter('Link')} href="#" title="Обратная связь" />
                </li>
                <li className={cnFooter('Item')}>
                    <Link className={cnFooter('Link')} href="#" title="Разработчикам" />
                </li>
                <li className={cnFooter('Item')}>
                    <Link className={cnFooter('Link')} href="#" title="Условия использования" />
                </li>
                <li className={cnFooter('Item')}>
                    <Link className={cnFooter('Link')} href="files/license.pdf" title="Авторские права" />
                </li>
            </ul>
            <p className={cnFooter('Copyright')}>© 2001 - 2018 ООО "Яндекс"</p>
        </footer>
    );
  }
}

export default Footer;
