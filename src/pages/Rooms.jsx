/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
// import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
const Rooms = () => {
    const rooms = useLoaderData();
    console.log(rooms);
    // const [reviewData, setReviewData] = useState([])
    // useEffect(() => {
    //     axios(`${import.meta.env.VITE_API_URL}/rooms/filter`)
    //     //     .then(res => {
    //     //         setReviewData(res.data)
    //     //     })
    // }, [])
    const handleFilter = e => {
        e.preventDefault();
        const form = e.target;
        const minPrice = form.low_price.value;
        const maxPrice = form.high_price.value;
        const priceData = {minPrice, maxPrice}
        axios.post(`${import.meta.env.VITE_API_URL}/rooms-filter`, priceData)
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5">
            <Helmet>
                <title>Serve Nest || Rooms Page</title>
            </Helmet>
            <div className="flex justify-between items-center my-5">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Our's Rooms</h1>
                <form onSubmit={handleFilter} className="flex flex-col justify-center items-center space-y-2">
                    <div>
                        <input className="border p-1 bg-gray-100 rounded-sm mr-2" type="text" name="low_price" placeholder="Min price" />
                        <input className="border p-1 bg-gray-100 rounded-sm" type="text" name="high_price" placeholder="Max price" />
                    </div>
                    <input type="submit" className="bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium md:text-lg text-white px-2 md:px-4 py-1 md:py-2" value="Filter" />
                </form>
            </div>
            {/* <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            {/* rooms card  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-center my-5 md:my-8 lg:my-10">
                {
                    rooms.map(room =>
                        <Zoom key={room._id} duration={1500}>
                            <Link to={`/rooms/${room._id}`} className="card card-compact bg-base-100 shadow-lg hover:scale-105 duration-500 cursor-pointer">
                                <div className="px-5 *:rounded-md">
                                    <img className="w-[350px] h-[250px]" src={room?.room_img} alt="Room Img" />
                                </div>
                                <div className="flex justify-between items-center py-5 text-lg md:text-xl font-semibold px-5">
                                    <h3>Total Reviews: </h3>
                                    <h3>{room?.total_review}</h3>
                                </div>
                            </Link>
                        </Zoom>
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;