
const Footer = ({actionText, description, extraActionText}) => {
    return (
        <div className="flex flex-col justify-center bg-hero lg:pt-24 lg:pb-5 lg:bg-cover lg:bg-footer">
        <p className="p-5 mt-5 text-2xl font-bold leading-normal text-center text-white lg:text-3xl lg:pt-20">{actionText}</p>
        
        <p className="pl-8 pr-8 text-l leading-8 text-center text-white lg:text-white lg:font-small">{description}</p>
        <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1">
 
          <button
            className="pt-2 pb-2 pl-10 pr-10 text-l font-semibold text-center text-violet-800 transition-all bg-white rounded-full shadow-2xl lg:ml-5 hover:bg-orange-400 focus:outline-none ring-4 ring-white lg:ring-2 lg:font-medium "
          >
            {extraActionText}
          </button>
        </div>
      </div>
    );
  };
  
  export default Footer;