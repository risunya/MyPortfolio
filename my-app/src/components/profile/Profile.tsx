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
                            Трудолюбивый <span>Фронтенд React Разработчик</span>, из города Санкт-Петербург, Россия.
                        </div>
                        <div className="links">
                            <div className="links__item"><FirstIcon/></div>
                            <div className="links__item"><SecondIcon/></div>
                            <div className="links__item"><ThirdIcon/></div>
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