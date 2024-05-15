/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";
const Rooms = () => {
    const rooms = useLoaderData();
    const [displayData, setDisplayData] = useState(rooms)
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [toggle, setToggle] = useState(false)
    const handleFilter = () => {
        if (minPrice === '' || maxPrice === '' || parseFloat(minPrice) > parseFloat(maxPrice)) {
            return toast.error("Please select price correctly")
        }
        axios.post(`${import.meta.env.VITE_API_URL}/rooms/filter`, { maxPrice, minPrice })
            .then(res => {
                setDisplayData(res.data);
            })
    }
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5">
            <Helmet>
                <title>Serve Nest || Rooms Page</title>
            </Helmet>
            <div className="mt-3 flex gap-3 justify-end">
                <p className="text-sm font-bold">Change Layout</p>
                <button onClick={() => setToggle(!toggle)}>
                    { toggle ?<LuLayoutList size={20} />: <LuLayoutGrid size={20} />}
                </button>
            </div>
            <div className="flex justify-between items-center my-5">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Our's Rooms</h1>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                        <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border p-1 bg-gray-100 rounded-sm mr-2" type="text" name="low_price" placeholder="Start price" />
                        <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border p-1 bg-gray-100 rounded-sm" type="text" name="high_price" placeholder="End price" />
                    </div>
                    <button onClick={handleFilter} className="bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium md:text-lg text-white px-2 md:px-4 py-1 md:py-2">Filter</button>
                </div>
            </div>

            {/* implement letter */}
            { toggle === true ? <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr className="text-sm md:text-lg">
                            <th>Picture</th>
                            <th>Total Review</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayData.map(room => <tr key={room?._id}>
                                <td>
                                    <img className="w-[100px] h-[100px] rounded-md" src={room?.room_img} alt="room pic" />
                                </td>
                                <td>
                                    {room?.total_review}
                                </td>
                                <td className="font-semibold">${room?.price_per_night} / <span className="font-normal">night</span></td>
                                <th>
                                    <Link to={`/rooms/${room._id}`} className="btn btn-ghost btn-xs bg-secondary">View Details</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>:
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-center my-5 md:my-8 lg:my-10">
                {
                    displayData?.map(room =>
                        <Zoom key={room._id} duration={1000}>
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
            </div>}
            {
                displayData.length === 0 && <div className="flex flex-col justify-center items-center space-y-3 pb-12">
                    <img className="w-36" src={'https://i.ibb.co/0ttkf0m/pngegg.png'} alt="" />
                    <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">There is no rooms at this price range</h1>
                    <p className="font-semibold">Please change price range </p>
                </div>
            }
        </div>
    );
};

export default Rooms;