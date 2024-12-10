export default function BlogsHero(){

    return(
        <div className="w-full pb-[10px] pt-[110px] md:pt-[210px] ">
            {/* blogs page title */}
            <h2 className="text-[#C4C4C4] w-full flex justify-center text-base font-bold uppercase md:text-[40px] md:pb-[30px] ">
                Private personal training
            </h2>

            <div className="w-full flex justify-center gap-[12px] pt-[20px] md:pt-[30px] md:gap-[32px] ">
                <button className="border text-[#D7FD44] border-[#D7FD44] rounded-[30px] py-[4px] px-[8px] text-[13px] md:text-[16px] md:py-[10px] md:px-[29px] ">Workout Routines</button>
                <button className="border text-[#D7FD44] border-[#D7FD44] rounded-[30px] py-[4px] px-[8px] text-[13px] md:text-[16px] md:py-[10px] md:px-[29px] ">Nutrition and diet</button>
            </div>

            <div className="w-[90%] max-h-[700px] m-auto max-h-[700px] mt-[40px] md:mt-[70px] mb-[100px] ">
                <img className="w-full max-h-[700px]" src="http://localhost:5173/BlogsPageImg.png" alt="blogs-trainer-photo" />
            </div>

        </div>
    )
}