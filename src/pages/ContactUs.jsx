import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { CiLocationOn } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineEmail, MdPhone } from "react-icons/md";

/* eslint-disable react/no-unknown-property */
const ContactUs = () => {
    const handleSendMessage = e => {
        e.preventDefault()
        toast.success('Successfully sent message. We will contact with you soon')
    }
    return (
        <>
         <section className="py-12 max-w-7xl mx-auto">
                <Helmet>
                    <title>Serve Nest || Contact Us</title>
                </Helmet>
                <div className="px-6 shadow-sm rounded-lg py-3 border">
                    <div>
                        <p className="font-medium text-primary text-lg md:text-xl">Contact us</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl ">Chat to our friendly team</h1>

                        <p className="mt-2 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 *:md:text-start *:text-center">
                            <div>
                                <div className="inline-block p-3 text-primary rounded-full bg-primary bg-opacity-40">
                                    <MdOutlineEmail size={40} />
                                </div>

                                <h2 className="mt-4 text-sm md:text-lg lg:text-xl font-medium text-gray-800 ">Email</h2>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-gray-500">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-primary">servenest@gamil.com</p>
                            </div>

                            <div>
                                <div className="inline-block p-3 text-primary rounded-full bg-primary bg-opacity-40">
                                    <IoChatboxEllipsesOutline size={40} />
                                </div>

                                <h2 className="mt-4 text-sm md:text-lg lg:text-xl font-medium text-gray-800 ">Live chat</h2>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-gray-500">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-primary">Start new chat</p>
                            </div>

                            <div>
                                <div className="inline-block p-3 text-primary rounded-full bg-primary bg-opacity-40">
                                    <CiLocationOn size={40} />
                                </div>

                                <h2 className="mt-4 text-sm md:text-lg lg:text-xl font-medium text-gray-800 ">Office</h2>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-gray-500">Come say hello at our office HQ.</p>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-primary">100/330 Cox Bazar, Bangladesh</p>
                            </div>

                            <div>
                                <div className="inline-block p-3 text-primary rounded-full bg-primary bg-opacity-40">
                                    <MdPhone size={40} />
                                </div>

                                <h2 className="mt-4 text-sm md:text-sm lg:text-xl font-medium text-gray-800 ">Phone</h2>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-sm md:text-sm lg:text-lg text-primary">+88 019672724</p>
                            </div>
                        </div>

                        <div className="p-4 py-6 rounded-lg bg-gray-5-800 md:p-8">
                            <form onSubmit={handleSendMessage} className="shadow-sm rounded-md p-5 border">
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm md:text-sm lg:text-lg text-gray-600 -200">First Name</label>
                                        <input required type="text" placeholder="First name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gra bg-white border border-gray-200" />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm md:text-sm lg:text-lg text-gray-600 -200">Last Name</label>
                                        <input type="text" placeholder="Last name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gra bg-white border border-gray-200" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm md:text-sm lg:text-lg text-gray-600 -200">Email address</label>
                                    <input type="email" required placeholder="Enter your email" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gra bg-white border border-gray-200" />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm md:text-sm lg:text-lg text-gray-600 -200">Message</label>
                                    <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gra bg-white border border-gray-200 rounded-lg md:h-56" placeholder="Message"></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-4 text-sm md:text-sm lg:text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary hover:bg-primary rounded-lg">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;