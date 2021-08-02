

const Cards = ({title,headline,description}) => {
    return (
        <div className="flex flex-col items-center justify-start font-sans min-h-100 bg-white lg:pt-20 lg:pb-20 lg:bg-white lg:bg-cover">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-4 py-5">
                    <p style={{color:'purple' ,fontSize:'14px'}}>{title}</p>    
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        {headline}
                    </div>
                    <ul>
                        <li style={{fontSize:'14px'}}>
                        {description}
                        </li>                
                    </ul>
                    <br/>                    
                    <button className="pt-2 pb-2 pl-5 pr-5 font-semibold text-center text-white transition-all bg-violet-500 rounded-full shadow-2xl lg:ml-1 hover:bg-violet-700 focus:outline-none ring-4 ring-violet-500 lg:ring-2 lg:font-medium ">
                        SEE MORE
                    </button>
                </div>           
            </div>
        </div>
    )
}

export default Cards
