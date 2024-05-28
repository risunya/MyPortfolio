import './carousel.scss';
import { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { tasks } from "../../data/project-data"

export const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='works-carousel-wrapper'>
            <div className="works-carousel">
                <div className='carousel-caption'>
                    <div className="carousel-name">МОИ ПРОЕКТЫ 💪</div>
                    <div className="carousel-description">Разработка - это моя страсть, поэтому я отдаюсь каждой задаче на полную, будь то серверная часть или создание адаптивного дизайна интерфейсов. В каждом проекте я стремлюсь к совершенству, превращая сложные задачи в элегантные решения.</div>
                </div>
                <div className="carousel-logo">
                    <img src="./icon-two.png" alt="profile-picture" className="profile-picture" />
                </div>
            </div>
            <div className="works-slicker">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={2}
                    centeredSlides={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {tasks.map(function(data) {
                        return (
                            <div className="worklist-item">
                            <SwiperSlide>
                                <a className="worklist-item-wrapper" href='#'>
                                    <div className="title">{data.title}</div>
                                    <div className='worklist-tech'>
                                    {data.techStack.map(function(photoUrl, index) {
                                        return (
                                                <div className='worklist-tech__logo-wrapper' key={index}>
                                                    <img src={photoUrl} className='worklist-tech__logo' alt="Tech logo"/>
                                                </div>
                                                );
                                         })}
                                    </div>
                                    <div className="subtitle">{data.subtitle}</div>
                                    <div className='bottom-button'>Читать подробнее</div>
                                </a>
                            </SwiperSlide>
                            </div>
                        )
                     })}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}


