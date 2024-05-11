import { useState, useEffect } from 'react';
import offer from '../assets/about_us/hot-offer.png';
const ScrollModal = () => {
    const [showModal, setShowModal] = useState(false);

    // Scroll event handler
    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 400) {
            setShowModal(true);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg lg:w-[450px]">
                        <div>
                            <img className=' mx-auto' src={offer} alt="" />
                        </div>
                        <p className='text-lg md:text-xl font-medium text-center pb-5'> For <br /> All Our Featured Rooms</p>
                        <div className=' flex justify-center'>
                            <button
                                className='px-2 md:px-8 mt-2 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-sm md:text-lg font-medium text-white'
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollModal;
