import './aboutme.scss';

export const Aboutme = () => {
    return (
        <div className='about-wrapper'>
            <div className="about__picture">
                <img src="./icon-three.png" alt="about-me-picture" className="about__picture" />
            </div>
            <div className='about-info'>
                <div className="about-info__name">Обо мне 👀</div>
                <div className="about-info__text">Привет, еще раз. Спасибо, что дочитали до сюда! 🤗 В данный момент я учусь в <span className='first-span'>ГУМРФ С.О. Макарова.</span> <span className='second-span'>(на 2 курсе!)</span></div>
                <div className="about-info__text">Кроме фронтенда, я либо копаюсь в серверных языках <span className='second-span'>(иногда)</span>, либо пробую себя в создании комлексных IT-решений, в том числе open source 🤓 Также я очень люблю читать, а мой профиль <span className='second-span'>(LiveLib)</span> можно найти <a href="https://www.livelib.ru/reader/risunyaaa" target="_blank">тут</a>!</div>
            </div>
        </div>
    )
}

