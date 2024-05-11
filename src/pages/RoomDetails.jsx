import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const RoomDetails = () => {
    const { user } = useAuth();
    const roomData = useLoaderData();
    const { room_title, room_img, description, price_per_night, availability, special_offer, room_size } = roomData;
    const navigate = useNavigate()
    const handleBookNow = (e) => {
        e.preventDefault();
        if (availability === 'unavailable') {
            return Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "This room is unavailable now!",
            });
        }
        const booking_date = e.target.email.value;
        const bookingData = { booking_email: user?.email, booking_date, room_title, price_per_night, }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${import.meta.env.VITE_API_URL}/booking-room`, bookingData)
                    .then(res => {
                        if (res.data.insertedId) {
                            const updateAvailability = { availability: 'unavailable' }
                            axios.patch(`${import.meta.env.VITE_API_URL}/update-status/${roomData?._id}`, updateAvailability)
                            Swal.fire({
                                title: "Success!",
                                text: "Your successfully book this room.",
                                icon: "success"
                            });
                            navigate('/my-bookings')
                        }
                    })

            }
        });


    }
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <div className="space-y-5 flex flex-col md:flex-row gap-5 justify-between md:gap-10">
                <img className="w-full md:w-1/2 bg-cover h-[350px] rounded-md" src={room_img} alt="" />
                <div className="space-y-5">
                    <h1 className="text-lg md:text-xl font-bold">{room_title}</h1>
                    <p className="text-sm md:text-lg font-bold w-full lg:w-2/3">Description: <span className="text-xs md:text-lg font-medium">{description}</span></p>
                    <div className="space-y-3">
                        <h1 className="text-sm md:text-lg font-semibold">Price: ${price_per_night} / <span className="text-sm">night</span>
                        </h1>
                        <h1 className="text-sm md:text-lg font-semibold">Availability: {availability}.</h1>

                        <h1 className="text-sm md:text-lg font-semibold">Room Size: {room_size}.</h1>

                        <h1 className="text-sm md:text-lg font-semibold">Special Offer: {special_offer ? special_offer : 'Not Available'}.</h1>

                        <form onSubmit={handleBookNow} className="flex flex-col gap-3 w-full lg:w-1/2">
                            <label htmlFor="date" className="text-sm md:text-lg font-semibold" >Pick a date: </label>
                            <input type="date" name="email" className="border py-1 px-2 font-semibold rounded-md text-sm md:text-lg" required />
                            <input type="submit" value="Book Now" className="px-2 md:px-4 py-1 md:py-2 bg-[#91D9D0] hover:bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium">Reviews:</h1>
                <p className="text-sm md:text-lg font-medium my-2">5 Reviews For this room </p>
                {/* review showcase */}
                <div>
                    <div className="flex gap-5 lg:gap-8 items-center space-y-3 border-y py-2">
                        <img className="rounded-full size-20" src="https://i.ibb.co/Vjg1dWq/profile-pic-3.png" alt="" />
                        <div className="space-y-2">
                            <h1 className="text-lg md:text-xl font-bold">Reviewer name</h1>
                            <div className="flex gap-2 items-center text-orange-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-sm font-medium">review here......</p>
                        </div>
                    </div>
                    <div>
                        <form className="lg:w-1/2 my-5 md:my-10 p-5 border border-dotted">
                            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
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
                                    Post Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;