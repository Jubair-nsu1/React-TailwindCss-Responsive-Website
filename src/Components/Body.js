import React from 'react'

import image_01 from '../UI/image_01.png'; 

const Body = ({appType, tagLine, description, mainButtonText, extraButtonText}) => {
    return (
        <div >
            <div className="min-h-20 bg-hero lg:pt-20 lg:pb-60 lg:bg-cover">
                
            <div className="max-w-sm mb-15 mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-2 items-start  lg:max-w-none">
                    
                    <div className="flex flex-col items-center justify-start">                      
                        <div>
                        <p className="p-3 pt-12 text-white lg:text-white">{appType}</p>
                        </div>
                        <div>
                        <p className="p-2 text-4xl font-bold text-center text-white lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-white">
                            {tagLine}
                        </p>
                        </div>
                        <div>
                        <p className="p-4 pt-6 font-sans text-l leading-10 text-left text-white lg:text-white">
                            {description}
                        </p>
                        </div>
                        
                        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                        <button
                            className="pt-3 pb-3 pl-12 pr-12 text-l mb-5 font-bold text-center text-violet-800 transition-all bg-white rounded-full shadow-2xl lg:ml-5 hover:bg-orange-400 focus:outline-none ring-4 ring-white lg:ring-2 lg:font-medium "
                        >
                            {mainButtonText}
                        </button>
                        <button
                            className="pt-3 pb-3 text-l mb-5 font-bold text-center text-violet-800 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-white lg:font-medium lg:text-white lg:bg-opacity-0 lg:ring-2 lg:ring-white"
                        >
                            {extraButtonText}
                        </button>                
                        </div>
                    </div>

                    <div className="flex flex-col  justify-center mt-5 ml- w-screen h-screen mb-2 lg:mb-2 lg:w-full lg:h-50 lg:pt-20 lg:bg-cover">
                          <img className="absolute left-0 lg:left-auto lg:-mt-64" src={image_01} alt=""/>
                    </div>
                    
                </div>


            </div>
            

     
            

        </div>
    )
}

export default Body
