import { Link } from 'react-router-dom';
import './header.scss';
import { Hamburger } from './hamburger/Hamburger';
import { useState } from 'react';
import { Hamx } from './hamburger/Hamx';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
      setIsOpen(isOpen === false ? true : false);
    }
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <a href='/'>
                    <div className='header__logo-text'>Aleshkin.dev</div>
                </a>
                <div className="header__nav-items">
                    <Link to='/'>
                        <div className='header__nav-text'>Главная</div>
                    </Link>
                    <Link to='/projects'>
                        <div className='header__nav-text'>Проекты</div>
                    </Link>
                    <Link to='/blog'>
                        <div className='header__nav-text'>Статьи</div>
                    </Link>
                </div>
                <button className='header__button' onClick={toggle}>
                    {isOpen ? <Hamx/> : <Hamburger/>}
                </button>
            </div>
            {(isOpen === true) ? <div className='mobile-menu' >
                <div className="mobile__nav-items">
                    <Link to='/' onClick={toggle}>
                        <div className='mobile__nav-text'>Главная</div>
                    </Link>
                    <Link to='/projects' onClick={toggle}>
                        <div className='mobile__nav-text'>Проекты</div>
                    </Link>
                    <Link to='/blog' onClick={toggle}>
                        <div className='mobile__nav-text'>Статьи</div>
                    </Link>
                </div>
            </div> : null}
        </div>
    )
}
    