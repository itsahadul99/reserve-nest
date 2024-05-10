import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBookings = () => {
    const { user } = useAuth();
    const [displayBooking, setDisplayBooking] = useState([])
    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/my-booking/${user?.email}`)
            .then(res => {
                setDisplayBooking(res.data);
            })
    }, [user])
    const handleCancelButton = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/my-booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
    console.log(displayBooking);
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-sm md:text-lg font-semibold text-[#91D9D0]">
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
                                        onClick={() => handleCancelButton(data?._id)}
                                        className="px-2 md:px-4 py-1 md:py-2 bg-[#91D9D0] hover:bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium text-white"
                                    >Cancel</button>
                                    <Link to={`/update-date/${data?._id}`} 
                                    className="px-2 md:px-4 py-1 md:py-2 bg-[#91D9D0] hover:bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium text-white"
                                    >Update Date</Link>
                                    <button 

                                    className="px-2 md:px-4 py-1 md:py-2 bg-[#91D9D0] hover:bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium text-white"
                                    >Review</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;