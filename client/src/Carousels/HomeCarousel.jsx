import { HomeSwiperData } from '../assets/Home'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function HomeCarousel() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Navigation]}

                className="h-full"
            >
                {
                    HomeSwiperData.map((item, index) => (
                        <SwiperSlide key={index} >
                            <img src={item.Url} alt={item.Name}
                                className='h-full w-full'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </>
    );
}
