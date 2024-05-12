import { Link } from "react-router-dom"
import Error from '../assets/404.gif';
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <section className='bg-white '>
      <Helmet>
        <title>Serve Nest || Error Page</title>
      </Helmet>
      <div className='max-w-7xl min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center'>
        <div className='w-full lg:w-1/2'>
          <p className='text-lg md:text-3xl font-medium text-gray-500 text-center md:text-start'>404 error</p>
          <h1 className=' text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className=' text-gray-500 dark:text-gray-400 text-sm md:text-lg'>
            Sorry, the page you are looking for doesnt exist.Here are some
            helpful links:
          </p>
          <div className='flex items-center mt-6 gap-x-3'>
            <Link to='/' className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600'>
              Take me home
            </Link>
          </div>
        </div>

        <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
          <img
            className=' w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
            src={Error}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
