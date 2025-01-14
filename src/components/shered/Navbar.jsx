import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const navLinks =
        <>
            <li>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-bold"
                            : "font-bold "
                    }
                >Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-bold"
                            : "font-bold "
                    }
                >Rooms
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink to="/my-bookings"
                        className={({ isActive }) =>
                            isActive
                                ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-bold"
                                : "font-bold "
                        }
                    >My Bookings
                    </NavLink>
                </li>
            }
            <li>
                <NavLink to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-1 text-secondary border-b-0 lg:border-b-2 border-primary font-bold"
                            : "font-bold pb-1"
                    }
                >Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-1 text-secondary border-b-0 lg:border-b-2 border-primary font-bold"
                            : "font-bold pb-1"
                    }
                >About Us
                </NavLink>
            </li>
        </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfully")
                navigate('/')
            })
            .catch(err => {
                toast.error(err?.message)
            })
    }
    return (
        <div className="bg-base-100 px-5 py-2 shadow-md">
            <div className="navbar  max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <h1 className="cursor-pointer text-lg md:text-2xl lg:text-3xl text-secondary font-bold">Reserve<span className="text-primary">Nest</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center justify-center gap-3 md:gap-6">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2 md:gap-4">
                    {
                        user ?
                            <div className='dropdown dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div className='w-10 rounded-full' title=''>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                            title={user?.displayName}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52'
                                >
                                    <li className='mt-2'>
                                        <button className='bg-gray-200 block text-center'>{user?.displayName}</button>
                                    </li>
                                    <Link to='/update-profile'>
                                        <li className='mt-2'>
                                            <button className='bg-gray-200 block text-center'>Update Profile</button>
                                        </li>
                                    </Link>
                                    <li className='mt-2'>
                                        <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <Link to="/login" className="px-2 md:px-4 py-1 md:py-2 bg-secondary hover:bg-primary duration-300 rounded-md text-xs font-medium md:text-lg text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;