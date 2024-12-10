import { usegetAllBlogs } from "../../hooks/usegetAllBlogs"
import BlogsContentLoad from "../../skeletons/BlogsContentLoad";

export default function BlogsContent(){

    const { data, isLoading, isError, error } = usegetAllBlogs();
    
    console.log(data)

    if (isLoading) {
        return <BlogsContentLoad />
      }
    
      if (isError) {
        return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
      }


    return(
        <div className="w-[90%] m-auto mb-[30px] translate-y-[-58px] flex flex-col md:flex-row md:gap-x-[80px] md:mb-[0px] ">

            {/* personal trenet information */}
            
            <div className="w-full flex gap-[24px] justify-center md:flex-col md:justify-start">
                
                <div>
                    <p className="mb-[15px] font-semibold text-lg leading-6 text-[white]">Contributor</p>

                    <div>
                        <img className="max-w-[122px] max-h-[82px]  " src="http://localhost:5173/Blog-Tuna.png" alt="photo-blogs-personal-trener" />

                        <div>
                            <p className="text-[#C4C4C4] mt-[14px] ">Tuna</p>
                            <span className="text-[#C4C4C4] ">1 Month ago</span>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#737373] mt-[12px]"></div>
                </div>

                <div className="flex flex-col gap-[18px] ">
                    <p className="text-[#C4C4C4] font-medium text text-lg text-nowrap">Reading time</p>
                    <div className="flex gap-x-[8px]">
                        <img className="w-[24px] h-[24px]" src="http://localhost:5173/clock.png" alt="clock" />
                        <p className="text-nowrap text-[#C4C4C4] font-medium text text-lg ">5 minutes</p>
                    </div>
                </div>

            </div>

            {/* main content */}
            <div className="mt-[24px] md:translate-y-[-30px]">

                <div>
                    <p className="text-[#D7FD44] font-semibold text-[15px] md:text-lg pb-[32px] ">
                        your private space for personalized fitness guidance and inspiration. Whether you’re just beginning your fitness journey or striving to reach new heights, this blog is designed to provide tailored workout routines, nutrition advice, and lifestyle tips that fit your unique goals. Here, you'll find expert advice on strength training, weight loss, recovery, and much more, all backed by real-life success stories and proven methods.
                    </p>
                    <div className="h-[1px] bg-[#737373] mt-[12px] mb-[24px] "></div>
                </div>

                {/* st */}

                {
                    data?.blog.map(function getBlogs(item){
                        return(
                            <div key={item.id}>
                                <h3 className="text-[22px] md:text-3xl font-bold text-white  mb-[30px] ">{item.title}</h3>
                                <p className="font-medium text-[15px] md:text-[18px] text-[#C4C4C4] pb-[30px]">{item.description}</p>
                                
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}