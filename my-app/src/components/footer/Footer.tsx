import { FirstIcon } from '../profile/images/github';
import { ThirdIcon } from '../profile/images/gitlab';
import { SecondIcon } from '../profile/images/linkedin';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='bottom-footer'>
            <div className='bottom-footer-wrapper'>
                <div className="bottom-footer__reserved">Coded by Andrey Aleshkin, 2024</div>
                <div className="bottom-footer__links">
                            <a className="bottom-footer__links__item" href='https://github.com/risunya' target='_blank'><FirstIcon/></a>
                            <a className="bottom-footer__links__item" href='https://ru.linkedin.com/in/andrey-aleshkin-41a600266?trk=people-guest_people_search-card' target='_blank'><SecondIcon/></a>
                            <a className="bottom-footer__links__item" href='https://gitlab.com/risunya' target='_blank'><ThirdIcon/></a>
                </div>
            </div>
        </footer>
    )
}