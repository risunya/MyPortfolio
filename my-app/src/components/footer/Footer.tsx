import { FirstIcon } from '../profile/images/github';
import { SecondIcon } from '../profile/images/linkedin';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className="reserved">Coded by Andrey Aleshkin, 2024</div>
                <div className="links">
                    <div className="links__item"><FirstIcon/></div>
                    <div className="links__item"><SecondIcon/></div>
                </div>
            </div>
        </footer>
    )
}