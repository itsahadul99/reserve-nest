/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ReviewProduct = () => {
    const { user } = useAuth()
    const data = useLoaderData();
    const navigate = useNavigate()
    const handleReview = e => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const currentTime = new Date().toISOString();
        const reviewData = { comment, rating, user_name: user?.displayName, room_title: data?.room_title, user_profile_img: user?.photoURL, currentTime }
        axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Review successfully done",
                    icon: "success"
                  });
                  navigate('/my-bookings')
            }
        })
    }
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <Helmet>
                <title>Serve Nest || Review Room</title>
            </Helmet>
            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Write your review here</h1>
                <form onSubmit={handleReview} className="w-full md:w-1/2 mx-auto my-5 md:my-10 shadow-md p-5 bg-gray-50">
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 font-semibold' htmlFor='userName'>
                                User Name:
                            </label>
                            <input
                                id='userName'
                                name='userName'
                                type='text'
                                disabled
                                defaultValue={user?.displayName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border border-gray-200 rounded-md'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 font-semibold' htmlFor='rating'>
                                Rating
                            </label>
                            <select
                                id='rating'
                                name='rating'
                                className='block w-full px-4 py-2 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md'
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="comment" className='text-gray-700 font-semibold'>Comment</label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md h-20'
                                name="comment" id="comment"
                            ></textarea>
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-2 md:px-6 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-sm md:text-lg font-medium text-white'>
                            Save Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewProduct;