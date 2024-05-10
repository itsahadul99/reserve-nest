import { PiCoffeeLight } from 'react-icons/pi';
import room from '../assets/about_us/room.jpg';
import { FaCar, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaUserCheck, FaWifi } from 'react-icons/fa';
import { TbAirConditioning } from 'react-icons/tb';
import { MdPets, MdSportsGymnastics } from 'react-icons/md';
import { IoTvSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto my-5 md:my-8 lg:my-10'>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center my-5">About Us</h1>
            <div>
                <h1 className='text-lg md:text-xl font-semibold mt-5'>OUR ROOM FACILITIES</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-5 md:gap-8 my-5 md:my-10 py-5'>
                    <div className='space-y-5'>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <PiCoffeeLight size={35} />
                            <p className='text-sm md:text-lg font-medium'>Breakfast</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <FaUserCheck size={35} />
                            <p className='text-sm md:text-lg font-medium'>Room service</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <TbAirConditioning size={35} />
                            <p className='text-sm md:text-lg font-medium'>Air conditioning</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <MdSportsGymnastics size={35} />
                            <p className='text-sm md:text-lg font-medium'>GYM fecility</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <FaCar size={35} />
                            <p className='text-sm md:text-lg font-medium'>Free Parking</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <IoTvSharp size={35} />
                            <p className='text-sm md:text-lg font-medium'>TV LCD</p>
                        </div>
                    </div>
                    <div className='space-y-5 border-r-2'>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <MdPets size={35} />
                            <p className='text-sm md:text-lg font-medium'>Pet allowed</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-5'>
                            <FaWifi size={35} />
                            <p className='text-sm md:text-lg font-medium'>Wi-fi service</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/rooms" className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-black">Book Room</Link>
                    </div>
                </div>
                <div className='my-5 space-y-5 py-5'>
                    <p className='text-sm md:text-lg'>At Serve Nest, we redefine the art of hospitality by blending luxury with personalized service, ensuring an unforgettable experience for every guest.

                        Our rooms are sanctuaries of comfort and elegance, designed with a keen eye for detail to create a serene retreat from the hustle and bustle of everyday life. Each room is equipped with state-of-the-art technology and a range of premium amenities that cater to the needs of modern travelers.</p>
                    <img src={room} alt="" />
                </div>
            </div>
            <div className='my-5 md:my-10'>
                <h1 className='text-lg md:text-xl font-semibold mt-5'>OUR HOTEL STAFF</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className='w-full h-64 bg-center bg-cover rounded-lg shadow-md' style={{ backgroundImage: `url(https://i.ibb.co/ngj9WCY/stuf1.jpg)` }}></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 bg-gray-100">DOHN DOE <br /><span className='text-xs '>Receiptionist</span> </h3>
                            <div className="flex items-center justify-center gap-3 px-3 py-3 *:cursor-pointer">
                                <FaFacebook className='hover:text-blue-400' size={25} />
                                <FaTwitter className='hover:text-blue-400' size={25} />
                                <FaInstagram className='hover:text-rose-400' size={25} />
                                <FaTiktok className='hover:text-gray-400' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className='w-full h-64 bg-center bg-cover rounded-lg shadow-md' style={{ backgroundImage: `url(https://i.ibb.co/SdgyNtm/stuff5.jpg)` }}></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 bg-gray-100">Mr Michel<br /><span className='text-xs'>Manager</span></h3>
                            <div className="flex items-center justify-center gap-3 px-3 py-3 *:cursor-pointer">
                                <FaFacebook className='hover:text-blue-400' size={25} />
                                <FaTwitter className='hover:text-blue-400' size={25} />
                                <FaInstagram className='hover:text-rose-400' size={25} />
                                <FaTiktok className='hover:text-gray-400' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className='w-full h-64 bg-center bg-cover rounded-lg shadow-md' style={{ backgroundImage: `url(https://i.ibb.co/3r34d3P/stuf4.jpg)` }}></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 bg-gray-100">Jasmine Sara<br /><span className='text-xs'>Room Services</span></h3>
                            <div className="flex items-center justify-center gap-3 px-3 py-3 *:cursor-pointer">
                                <FaFacebook className='hover:text-blue-400' size={25} />
                                <FaTwitter className='hover:text-blue-400' size={25} />
                                <FaInstagram className='hover:text-rose-400' size={25} />
                                <FaTiktok className='hover:text-gray-400' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className='w-full h-64 bg-center bg-cover rounded-lg shadow-md' style={{ backgroundImage: `url(https://i.ibb.co/31gqdk5/stuf3.jpg)` }}></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 bg-gray-100">Kamrul Hassan<br /><span className='text-xs'>Word boy</span></h3>
                            <div className="flex items-center justify-center gap-3 px-3 py-3 *:cursor-pointer">
                                <FaFacebook className='hover:text-blue-400' size={25} />
                                <FaTwitter className='hover:text-blue-400' size={25} />
                                <FaInstagram className='hover:text-rose-400' size={25} />
                                <FaTiktok className='hover:text-gray-400' size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;