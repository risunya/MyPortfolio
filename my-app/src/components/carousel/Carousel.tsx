import './carousel.scss';
import { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
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
                    <SwiperSlide>
                        <div className="swiper-box">Slide 1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-box">Slide 2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-box">Slide 3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-box">Slide 4</div>
                    </SwiperSlide>
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