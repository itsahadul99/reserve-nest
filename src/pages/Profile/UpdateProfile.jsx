import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../utils";
import { FaSpinner } from "react-icons/fa";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleUpdateProfile = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        try {
            const img_url = await imageUpload(image)
            setImageText(img_url)
            updateUserProfile(name, img_url)
                .then(() => {
                    setLoading(false)
                    toast.success('Success ')
                    navigate('/')
                })
        } catch (error) {
            toast.error(error);
        }
    }
    const handleImageChange = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
    }
    console.log(user?.photoURL);
    return (
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-365px)] px-5 my-5 md:my-8 lg:my-10">
            <div className="max-w-md mx-auto my-6 lg:my-12 p-3 lg:p-6 border bg-white rounded-lg shadow-md">
                <div className="mx-auto flex justify-center mb-5">
                    <img className="rounded-full size-20" src={user?.photoURL} alt="" />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>
                <form onSubmit={handleUpdateProfile} >
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
                        <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#4CCD99]" required />
                    </div>

                    <div className='flex items-center justify-around gap-4 p-4 bg-white w-full  m-auto rounded-lg'>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        disabled={loading}
                                        onChange={e => handleImageChange(e.target.files[0])}
                                        className='disabled:cursor-not-allowed text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                        required
                                    />
                                    <div className='bg-secondary text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary'>
                                        {imageText.split('.')[0].slice(0, 10) + '...' + imageText.split('.')[1]}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-24 h-20" src={imagePreview} alt="" />
                        </div>
                    </div>
                    <button disabled={loading} type="submit" className="disabled:cursor-not-allowed text-lg rounded-xl relative p-[10px] block w-full bg-secondary text-white border-y-4 duration-500 overflow-hidden focus:border-[#4CCD99] z-50 group">
                        {loading ? <FaSpinner  className="animate-spin text-center"/>: "Update"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;