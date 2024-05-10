import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const roomData = useLoaderData();
    console.log(roomData);
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <div className="space-y-5 flex flex-col md:flex-row gap-5 justify-between md:gap-10">
                <img className="w-full md:w-1/2 bg-cover h-[350px] rounded-md" src={roomData.room_img} alt="" />
                <div className="space-y-5">
                    <p className="text-lg md:text-xl font-bold w-full">Description: <span className="text-sm md:text-lg font-medium">{roomData?.description}</span></p>
                    <div className="space-y-3">
                        <h1 className="text-sm md:text-lg font-semibold">Price: {roomData.price_per_night} /<span className="text-sm">night</span>
                        </h1>
                        <h1 className="text-sm md:text-lg font-semibold">Availability: {roomData?.availability}.</h1>

                        <h1 className="text-sm md:text-lg font-semibold">Room Size: {roomData?.room_size}.</h1>

                        <h1 className="text-sm md:text-lg font-semibold">Special Offer: {roomData?.special_offer}.</h1>

                        <button className="px-2 md:px-4 py-1 md:py-2 bg-[#91D9D0] hover:bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;