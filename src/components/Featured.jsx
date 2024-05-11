import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/rooms`)
            .then(res => {
                setRooms(res.data)
            })
    }, [])
    return (
        <div className="my-5 md:my-8 lg:my-10 max-w-7xl mx-auto">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 mb-8 text-center">Our Featured Room</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {
                    rooms?.slice(4, 8).map(item => <div key={item?._id}
                        data-aos='fade-up'
                        data-aos-duration="1500"
                        className="flex flex-col gap-2 border rounded-md items-center hover:shadow-2xl p-5">
                        <img
                            src={item?.room_img}
                            alt="Room img"
                        />
                        <div className="py-3">
                            <p className="text-sm text-center">{item?.description}</p>
                        </div>
                        <Link to={`/rooms/${item._id}`} className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">
                            Book Now
                        </Link>
                    </div>)
                }
            </div>

            <div className="border-b border-dotted">
                <div className="my-16 flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 ">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        className="w-full">
                        <img className="" src="https://i.ibb.co/p405vqf/section-2.jpg" alt="" />
                    </div>
                    <div
                        data-aos='fade-left'
                        data-aos-duration="2000"
                    >
                        <div>
                            <h1 className="text-xl font-semibold p-2 lg:text-5xl">
                                Turning Mud Into Something Amazing
                            </h1>
                            <p className="mt-6 px-5">
                                Serve Nest Hotel stands out as a premier destination for both leisure and business travelers, offering unmatched comfort and exceptional service. The hotel combines modern design with functional elegance to create a welcoming atmosphere across all areas, from the luxurious guest rooms to the dynamic dining venues.
                            </p>
                        </div>
                        <div className="flex gap-10 items-center py-5 px-3">
                            <div className="flex flex-col">
                                <p className="text-3xl md:text-6xl font-bold">15+</p>
                                <p className="text-sm md:text-xl">Years of Experience</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-3xl md:text-6xl font-bold">98%</p>
                                <p className="text-sm md:text-xl">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;