import { useGetallAboutMe } from "../../hooks/useGetallAboutMe";
import HomeAboutMeLoad from "../../skeletons/HomeAboutMeLoad";

export default function HomeAboutMe() {
   
    const { data, isLoading, isError, error } = useGetallAboutMe();

    if (isLoading) {
        return <HomeAboutMeLoad />
      }
    
      if (isError) {
        return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
      }

    return (
        <div className="w-full h-fit bg-[#121212] px-[37.5px] md:px-[5%] ">
            {/* About Me Title */}
            <h2 className="bg-gradient-to-b from-[#C4C4C4] to-[#7E7E7E] bg-clip-text text-transparent font-bold uppercase mb-[1rem] max-md:text-[14px] md:text-[2rem] md:mb-[24px]">
                about me
            </h2>

            {/* About Me Content */}
            {data?.about.filter(function filterAboutArray(item){return item.id == 1}).map(function getHomeAboutMeItem(item){
                return(
                    <div key={item.id} className="flex flex-col md:flex-row md:gap-x-[4.4%] xl:justify-start xl:gap-x-[0px] ">
                    <div className="flex w-[100%] w-full md:w-[45%]">
                        <img src={item.image} alt="foto" className="w-full max-w-[730px] max-h-[423px]" />
                    </div>

                    <div className="flex flex-col md:w-[55%] md:h-[423px] md:justify-between xl:w-[62%] xl:ml-[40px]">
                        <p className="text-[#C4C4C4] max-md:mt-[1rem] mb-[1rem] text-[12px] leading-4 md:text-[20px] md:leading-7 ">
                            {item.story}
                        </p>

                        <div className="md:w-full md:flex md:justify-end">
                            <button className="bg-[#B8D44A] px-[38.5px] py-[8.5px] rounded-[8px] gap-[10px] max-md:text-[14px] leading-4 max-w-[184px] md:text-[1rem]">
                                See More
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    );
}
