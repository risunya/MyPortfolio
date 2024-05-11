import { FirstIcon } from './images/github';
import { SecondIcon } from './images/linkedin';
import { TypeScriptLogo } from './images/typescriptlogo';
import './profile.scss';

export const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <div className='profile-content'>
                <div className="info">
                    <div className="info-left">
                        <div className="greeting">Hi, I'm Andrey!</div>
                        <div className="about-me">A passionate Frontend React Developer, based in Saint-Petersburg, Russia!</div>
                        <div className="links">
                            <div className="links__item"><FirstIcon/></div>
                            <div className="links__item"><SecondIcon/></div>
                        </div>
                    </div>
                    <div className="info-right">
                        <img src="./profile.jpeg" alt="profile-picture" className="profile-picture" />
                    </div>
                </div>
                <div className="tech-stack">
                    <div className='tech-stack-name'>Current tech stack</div>
                    <span>|</span>
                    <ul className="tech-stack">
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                        <li className="tech-stack__item"><TypeScriptLogo/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}