/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const ClientsReview = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => {
                setReviewData(res.data);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-8 lg:my-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 mb-8 lg:my-16 text-center">Our Clients Review</h1>
            <Swiper
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Navigation]}>
                {
                    reviewData?.map(r => <SwiperSlide key={r?._id}>
                        <div className="bg-gray-50">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 max-w-xl mx-auto border-x-2">
                                <img src={r?.user_profile_img} alt="" className="size-40 rounded-full " />
                                <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{r?.user_name}</h1>
                                <div className="flex gap-2 items-center *:text-xl text-orange-400">
                                    {
                                        r?.rating === '1' && <FaStar />
                                    }
                                    {
                                        r?.rating === '2' && <><FaStar /> <FaStar /></>
                                    }
                                    {
                                        r?.rating === '3' && <><FaStar /> <FaStar /> <FaStar /></>
                                    }
                                    {
                                        r?.rating === '4' && <><FaStar /> <FaStar /> <FaStar /> <FaStar /></>
                                    }
                                    {
                                        r?.rating === '5' && <><FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStar /></>
                                    }
                                </div>
                                <blockquote className="max-w-lg text-lg italic font-medium text-center">"{r?.comment}"</blockquote>
                                <div className="text-center text-gray-400">

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ClientsReview;