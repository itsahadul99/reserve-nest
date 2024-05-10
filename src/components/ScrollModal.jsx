import{ useState, useEffect } from 'react';

const ScrollModal = () => {
    const [showModal, setShowModal] = useState(false);

    // Scroll event handler
    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 200) { 
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
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">Hello there!</h2>
                        <p>Welcome to our website. Enjoy your stay!</p>
                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollModal;
