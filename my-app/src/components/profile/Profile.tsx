import { FirstIcon } from './images/github';
import { ThirdIcon } from './images/gitlab';
import { SecondIcon } from './images/linkedin';
import './profile.scss';

export const Profile = () => {
    


    return (
        <div className='profile-wrapper'>
            <div className='profile-content'>
                <div className="info">
                    <div className="info-left">
                        <div className="greeting">Привет, я Андрей! 👋</div>
                        <div className="about-me">
                            Трудолюбивый <span>Фронтенд Разработчик</span>, из города Санкт-Петербург, Россия.
                        </div>
                        <div className="links">
                            <a className="links__item" href='https://github.com/risunya' target='_blank'><FirstIcon/></a>
                            <a className="links__item" href='https://ru.linkedin.com/in/andrey-aleshkin-41a600266?trk=people-guest_people_search-card' target='_blank'><SecondIcon/></a>
                            <a className="links__item" href='https://gitlab.com/risunya' target='_blank'><ThirdIcon/></a>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="profile-picture" >
                            <img src="./icon-one.png" alt="profile-picture"/>
                        <div className="info-right__message">
                            <div className="input-wrapper">
                                <input aria-label="Ask us anything"/>
                                <span className="placeholder"></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}