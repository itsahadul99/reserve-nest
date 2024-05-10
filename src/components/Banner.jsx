import bg1 from '../assets/bg1.avif';
import bg2 from '../assets/bg 2.avif';
import bg3 from '../assets/bg3.avif';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <Swiper 
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)]" style={{ backgroundImage: `url(${bg1})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-2xl md:text-3xl lg:text-5xl font-bold">Make Your Vacation More Enjoyable</h1>
                            <p className="mb-5 font-semibold text-lg md:text-xl text-gray-200 opacity-95">Book our rooms and make your vacation enjoyable. We provides best services...</p>
                            <button className="px-2 md:px-6 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">Book Room</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)]" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-2xl md:text-3xl lg:text-5xl font-bold">Relax More Comfortably</h1>
                            <p className="mb-5 font-semibold text-lg md:text-xl text-gray-200 opacity-95">Book our rooms and enjoy your relax time more comfortably. We provides best services...</p>
                            <button className="px-2 md:px-6 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">Book Room</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-[calc(100vh-120px)]" style={{ backgroundImage: `url(${bg3})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-2xl md:text-3xl lg:text-5xl font-bold">Spend Quality Time With Your Partner</h1>
                            <p className="mb-5 font-semibold text-lg md:text-xl text-gray-200 opacity-95">Makes your quality time more enjoyable. We provides best services...</p>
                            <button className="px-2 md:px-6 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">Book Room</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;