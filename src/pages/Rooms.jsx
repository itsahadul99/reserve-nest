/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5">
            <div className="flex justify-between items-center my-5">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Our's Rooms</h1>
                <div className="flex gap-3 items-center">

                </div>
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
                        <Link to={`/rooms/${room._id}`} key={room._id} className="card card-compact bg-base-100 shadow-lg hover:scale-105 duration-500 cursor-pointer">
                            <div className="px-5 *:rounded-md">
                                <img className="w-[350px] h-[250px]" src={room?.room_img} alt="Room Img" />
                            </div>
                            <div className="flex justify-between items-center py-5 text-lg md:text-xl font-semibold px-5">
                                <h3>Total Reviews:</h3>
                                <h3>{room?.total_review}</h3>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;