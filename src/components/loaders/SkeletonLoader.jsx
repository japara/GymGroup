import React from 'react';
import 'ldrs/ring';
import { lineSpinner } from 'ldrs';




export default function SkeletonLoader(){
    lineSpinner.register()
    return(
        <div className='w-[78%] h-[420px] m-auto  bg-[#121212] px-[37.5px] md:px-[5%] border border-[#464040] md:w-[90%]'> 
             <div className="h-[320px] px-[37.5px] md:px-[5%] flex flex-col justify-center items-center">
        <l-line-spinner
                size="70"
                stroke="3"
                speed="1" 
                color="white" 
            ></l-line-spinner>
    </div>
    </div>
       
    )
}






