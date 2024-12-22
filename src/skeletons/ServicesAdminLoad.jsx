import { lineSpinner } from 'ldrs'

export default function ServicesAdminLoad(){
    
    lineSpinner.register()
    return(
        // main loader HomeAboutMe container
        <div className='w-[98%] h-[100svh] m-auto h-fit bg-[#121212] px-[37.5px] md:px-[5%] border border-[#c4c4c4] md:w-[89%]'>
            <div className='h-[420px] px-[37.5px] md:px-[5%] flex flex-col justify-center items-center'>
            {/* Default values shown */}
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