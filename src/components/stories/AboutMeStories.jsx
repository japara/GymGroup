import Arrow from "./Arrow";

export default function AboutMeStories({mobile}){


  return(
    <div className="p-10 lg:w-[97%] m-auto">
        {/* about me title */}
        <div className="md:max-h-[70px] h-[30px] flex items-center gap-4">
            <Arrow count={mobile? 2 : 4} direction="right" />
            <h2 className="mt-4 bg-gradient-to-b from-[#C4C4C4] to-[#7E7E7E] bg-clip-text text-transparent font-bold uppercase mb-[1rem] max-md:text-[14px] md:text-[2rem] md:mb-[24px] md:mt-7">
                about me
            </h2>
        </div>

        {/* about me description */}

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">

            <div className="max-w-[80%]">
                <p className="text-[#C4C4C4] md:text-[20px] pb-4">
                    I’m Tuna, a passionate personal trainer dedicated to helping others transform their lives through fitness. My journey began when I struggled with body confidence and health issues. Through hard work and discipline, I discovered the power of exercise and healthy living.
                </p>

                <p className="text-[#C4C4C4] md:text-[20px] pb-4">
                    Now, I specialize in personalized training programs tailored to your unique goals—whether it’s weight loss, strength training, or simply feeling healthier and happier. I believe in creating sustainable routines that fit seamlessly into your lifestyle.
                </p>

                <p className="text-[#C4C4C4] md:text-[20px]">
                    Fitness is about both body and mind. I’m here to guide, support, and challenge you on your journey to becoming the best version of yourself. Let’s work together to achieve your goals and embrace a stronger, healthier you!
                </p>
            </div>

            <div className="flex  flex-col">
                <img className="w-[100px] h-[100px] md:w-[200px] m-auto md:h-[200px]" src="http://localhost:5173/Stories3Plus.png" alt="blogs-trainer-photo" />
            </div>
        </div>
        
    </div>
  )
}