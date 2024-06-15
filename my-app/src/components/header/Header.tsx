import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    return (
        <div className='top-header'>
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
            </div>
        </div>
    )
}
    