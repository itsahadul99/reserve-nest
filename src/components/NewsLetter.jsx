/* eslint-disable react/no-unescaped-entities */
import icon from '../assets/Group 61.png';
const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 bg-gray-50 border shadow-sm rounded-lg">
      <div>
        <img className='mx-auto' src={icon} alt="" />
        <h1 className="text-xl md:text-2xl lg:text-5xl font-black my-5 mb-8 text-center">Subscribe Newsletter</h1>
        <div className='w-full lg:w-1/2 text-center mx-auto'>
          <p className='text-sm'>Stay in the loop with all the latest updates, exclusive offers, and exciting news from <span className='font-bold'>Serve Nest!</span> Join our newsletter community today and be the first to know about our newest services, special promotions, and helpful tips to enhance your experience. Don't miss out – subscribe now and elevate your journey with <span className='font-bold'>Serve Nest!</span></p>
          <div className="join my-5">
            <input className="input input-bordered join-item" placeholder="Email" />
            <button className="px-2 md:px-4 py-1 md:py-2 hover:bg-[#91D9D0] bg-[#5beeddd4] duration-300 rounded-md text-xs font-medium md:text-lg text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
