import Arrow from "./Arrow";

export default function Certifitacion({mobile}){

    const certificationArr= [
        {
            id:1,
            description: "ACE (American Council on Exercise) Certified Personal Trainer"
        },
        {
            id:2,
            description: "ANASM (National Academy of Sports Medicine) Certified Personal Trainer"
        },
        {
            id:3,
            description: "BSc Fitness and Personal Training"
        },
        {
            id:21,
            description: "Precision Nutrition - Level 1"
        },
        {
            id:22,
            description: "Youth Strength & Conditioning Coach"
        },
        {
            id:23,
            description: "ISSA (International Sports Sciences Association) Certified Fitness Trainer"
        },
    ]
    
    return(
        <div className="p-10 lg:w-[97%] m-auto">
            {/* certification me title */}
            <div className="md:max-h-[70px] h-[30px] flex items-center gap-4">
                <Arrow count={mobile? 2 : 4} direction="right" />
                <h2 className="mt-4 bg-gradient-to-b from-[#C4C4C4] to-[#7E7E7E] bg-clip-text text-transparent font-bold uppercase mb-[1rem] max-md:text-[14px] md:text-[2rem] md:mb-[24px] md:mt-7">
                    Certification
                </h2>
            </div>

            {/*certtification content */}
            <div className="mt-[40px] grid gap-x-7 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    certificationArr.map((item)=>{
                        return(
                            
                            // render certification from array
                            <div key={item.id}>
                                <div className="flex text-white items-center gap-x-2 ">
                                    <img src="http://localhost:5173/Yes.png" alt="Yes" />
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}