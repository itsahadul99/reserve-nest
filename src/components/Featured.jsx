const Featured = () => {
    return (
        <div className="my-5 md:my-8 lg:my-10 max-w-7xl mx-auto">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 mb-8 text-center">Our Featured Room</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                <div className="flex flex-col gap-2 border items-center hover:shadow-2xl px-3 py-2">
                    <img
                        src="https://i.ibb.co/fNhPcJY/feature1.jpg"
                        alt="Room img"
                    />
                    <p className="text-sm md:text-lg text-center">Bright and airy room with contemporary design, suitable for couples seeking a romantic getaway.</p>
                    <button className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">
                        Book Now
                    </button>
                </div>
                <div className="flex flex-col gap-2 border items-center hover:shadow-2xl px-3 py-2">
                    <img
                        src="https://i.ibb.co/Fztz2yw/featue3.jpg"
                        alt="Room img"
                    />
                    <p className="text-sm md:text-lg text-center">Luxury suite with a separate living area, offering panoramic views and top-tier comforts..</p>
                    <button className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">
                        Book Now
                    </button>
                </div>
                <div className="flex flex-col gap-2 border items-center hover:shadow-2xl px-3 py-2">
                    <img
                        src="https://i.ibb.co/LRFFcXn/featured2.jpg"
                        alt="Room img"
                    />
                    <p className="text-sm md:text-lg text-center">Compact yet beautifully arranged with all essential facilities, ideal for short stays</p>
                    <button className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">
                        Book Now
                    </button>
                </div>
                <div className="flex flex-col gap-2 border items-center hover:shadow-2xl px-3 py-2">
                    <img
                        src="https://i.ibb.co/0XbSxtQ/feature5.jpg"
                        alt="Room img"
                    />
                    <p className="text-sm md:text-lg text-center">Bright and airy room with contemporary design, suitable for couples seeking a romantic getaway.</p>
                    <button className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">
                        Book Now
                    </button>
                </div>
            </div>

            <div className="">
                <div className="my-16 flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 ">
                    <div className="w-full"> 
                        <img className="" src="https://i.ibb.co/p405vqf/section-2.jpg" alt="" />
                    </div>
                    <div className="">
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