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
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerGroup={2}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}

                className="h-full"
            >

                <SwiperSlide>
                    <img src="https://www.unearthwomen.com/wp-content/uploads/2021/12/pexels-photo-1603650-1200x600.jpeg" alt="Taj Mahal"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.travelwithcg.com/wp-content/uploads/2021/02/Ganesh-Pol-scaled.jpg" alt="Amer Fort"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/81z2ickjbvL._AC_UF1000,1000_QL80_.jpg" alt="Golden Temple"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg" alt="Victoria Memorial"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/premium-photo/drawing-red-fort-india_582637-4215.jpg" alt="red fort"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://youngstatues.net/wp-content/uploads/2021/09/HawaMahal-Jaipur.jpg" alt="HawaMahal"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/27/5c47137b8b32bdc3702a6c0b4b2359e9_1000x1000.jpg" alt="
                    India Gate"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://guidetour.in/wp-content/uploads/2020/12/Mysore-Palace.jpg" alt="
                    Mysore Palace"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.herzindagi.info/image/2024/Jan/mahabodhi-temple-lord-buddha.jpg" alt="
                    mahabodhi-temple"
                        className='h-full w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.veenaworld.com/wp-content/uploads/2021/02/An-Ultimate-Travel-Guide-to-Agra-Fort-History-Timing-Entry-Fee.jpg" alt="
                    Agra Fort"
                        className='h-full w-full'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
