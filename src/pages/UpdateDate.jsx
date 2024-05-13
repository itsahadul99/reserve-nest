/* eslint-disable no-unused-vars */
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateDate = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate()
    const handleSave = e => {
        e.preventDefault();
        const form = e.target;
        const newDate = form.new_date.value;
        if(newDate === data?.booking_date){
            return toast.error('You cannot choice same date')
        }
        const updateData = {update_date: newDate}
        axios.put(`${import.meta.env.VITE_API_URL}/update-date/${id}`, updateData)
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast.success('Successfully update booking date');
                navigate('/my-bookings')
            }
        })

    }
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Update Your Booked Date </h1>
            <form onSubmit={handleSave} className="w-full md:w-1/2 mx-auto my-5 md:my-10 shadow-md p-5 bg-gray-50">
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div>
                        <label className='text-gray-700 font-semibold' htmlFor='room-title'>
                            Room Title:
                        </label>
                        <input
                            id='room-title'
                            name='room-title'
                            type='text'
                            disabled
                            defaultValue={data?.room_title}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border border-gray-200 rounded-md'
                        />
                    </div>

                    <div>
                        <label className='text-gray-700 font-semibold' htmlFor='emailAddress'>
                            Email Address:
                        </label>
                        <input
                            id='emailAddress'
                            type='email'
                            name='email'
                            defaultValue={data?.booking_email}
                            disabled
                            className='block w-full px-4 py-2 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md'
                        />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700 font-semibold'>Previous Date:</label>
                        <input 
                        type="date"
                         name="date"
                         disabled
                         defaultValue={data?.booking_date} 
                        className="block w-full px-4 py-2 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md" />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700 font-semibold'>New Date:</label>
                        <input type="date" name="new_date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md font-medium" />
                    </div>
                </div>
                <div className='flex justify-end mt-6'>
                    <button className='px-2 md:px-6 py-1 md:py-2 hover:bg-primary bg-secondary duration-300 rounded-md text-sm md:text-lg font-medium text-white'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateDate;