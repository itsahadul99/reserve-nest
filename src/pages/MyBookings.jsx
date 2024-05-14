import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const MyBookings = () => {
    const { user } = useAuth();
    const [displayBooking, setDisplayBooking] = useState([])
    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/my-booking/${user?.email}`, { withCredentials: true })
            .then(res => {
                setDisplayBooking(res.data);
            })
    }, [user])
    const handleCancelButton = (id, title, booking_date) => {
        const currentDate = new Date()
        const cancelDate = new Date(booking_date)
        const cancel = cancelDate.setDate(cancelDate.getDate() - 1)
        if (!(currentDate < cancel)) {
            return toast.error('You can not cancel this booking before 1 day remaining booking date ')
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#91D9D0",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/my-booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const updateAvailability = { availability: 'available' }
                            axios.patch(`${import.meta.env.VITE_API_URL}/update-status/${title}`, updateAvailability)
                            Swal.fire({
                                title: "Canceled!",
                                text: "You successfully cancel your booking.",
                                icon: "success"
                            });
                            const remaining = displayBooking.filter(d => d._id !== id);
                            setDisplayBooking(remaining)
                        }
                    })
            }
        });

    }
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <Helmet>
                <title>Serve Nest || My Bookings</title>
            </Helmet>
            {
                displayBooking.length === 0 ? <div className="flex flex-col justify-center items-center space-y-3 pb-12">
                    <img className="w-36" src={'https://i.ibb.co/0ttkf0m/pngegg.png'} alt="" />
                    <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">You do not booked any room</h1>
                    <p className="font-semibold">Please book a room</p>
                    <Link to="/rooms" className="px-2 md:px-4 py-1 md:py-2 bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium text-white">Go Room</Link>
                </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-sm md:text-lg font-semibold text-primary">
                                <tr>
                                    <th>Room Name: </th>
                                    <th>Price / <span className="text-xs">night</span></th>
                                    <th>Date</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    displayBooking.map(data => <tr key={data._id} className="text-xs md:text-sm font-medium">
                                        <td>{data?.room_title}</td>
                                        <td>{data?.price_per_night}</td>
                                        <td>{data?.booking_date}</td>
                                        <td className="text-center space-x-2 space-y-2">
                                            <button
                                                onClick={() => handleCancelButton(data?._id, data?.room_title, data?.booking_date)}
                                                className="px-2 md:px-4 py-1 md:py-2 bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium text-white"
                                            >Cancel</button>
                                            <Link to={`/update-date/${data?._id}`}
                                                className="px-2 md:px-4 py-1 md:py-2 bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium text-white"
                                            >Update Date</Link>
                                            <Link
                                                to={`/review/${data?._id}`}
                                                className="px-2 md:px-4 py-1 md:py-2 bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium text-white"
                                            >Review</Link>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyBookings;