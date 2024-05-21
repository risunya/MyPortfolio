import './carousel.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carousel = () => {
      
    return (
        <div className='works-carousel-wrapper'>
            <div className="works-carousel">
                <div className='carousel-caption'>
                    <div className="carousel-name">МОИ ПРОЕКТЫ</div>
                    <div className="carousel-description">Разработка - это моя страсть, поэтому я отдаюсь каждой задаче на полную, будь то серверная часть или создание адаптивного дизайна интерфейсов. В каждом проекте я стремлюсь к совершенству, превращая сложные задачи в элегантные решения.</div>
                </div>
                <div className="carousel-logo">
                    <img src="./icon-two.png" alt="profile-picture" className="profile-picture" />
                </div>
            </div>
            <div className="works-slicker">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    loop={true}
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
                    <SwiperSlide>
                        <div className="swiper-box">Slide 5</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-box">Slide 6</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}