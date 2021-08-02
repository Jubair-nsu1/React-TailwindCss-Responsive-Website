import { Link } from 'react-router-dom';

const Navbar = ({logo}) => {   
  
    return (
      <nav
      className='flex justify-between items-center h-20 bg-hero text-black relative shadow-sm'      
      >      
        <a href="/" className="pl-7 logo lg:ml-10">
          <img height="65%" width="65%" src={logo} alt="logo" />
        </a>
        
        <div className="flex-row items-center justify-around h-full pt-7">
            <a href="/" className="text-lg font-semibold text-white transition-all hover:text-blue-300">Home </a>
            <a href="/" className="text-lg  text-white transition-all hover:text-blue-300">Portfolio</a>                
        </div>

        <div className='px-4 cursor-pointer md:hidden'>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      
        <div className='pr-8 md:block  hidden'>       
          <button className="pt-2 pb-2 pl-10 pr-10 text-l font-bold text-center text-violet-800 transition-all bg-white rounded-full shadow-2xl lg:ml-5 hover:bg-orange-400 ring-4 ring-white lg:ring-2 lg:font-medium ">
            HIRE ME
          </button>       
        </div>
    </nav>
 
    )
}

export default Navbar

