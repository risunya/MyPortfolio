import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <Link to='/'>
                    <div className='logo-text'>Aleshkin.dev</div>
                </Link>
                <div className="nav-items">
                    <Link to='/'>
                        <div className='nav-text'>Главная</div>
                    </Link>
                    <Link to='/projects'>
                        <div className='nav-text'>Проекты</div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
    