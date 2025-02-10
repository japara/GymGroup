import React, { useEffect, useState } from "react";
import StoriesHero from "../components/stories/StoriesHero";
import AboutMeStories from "../components/stories/AboutMeStories";
import Certifitacion from "../components/stories/Certification";
import SuccessStory from "../components/Home/SuccessStory";

function Stories() {
  const [mobile, setMoobile] = useState(()=>{
      if(window.innerWidth > 768){
          return false
      }
      return true
  });

  useEffect(()=>{
      window.addEventListener("resize", ()=>{
          if(window.innerWidth < 768){
              setMoobile(true)
          }else{
              setMoobile(false)
          }
      })
  
  }, [mobile]);

  return(
    <main>
      <StoriesHero />
      <section className="mt-[80px] "> 
        <AboutMeStories mobile={mobile} setMoobile={setMoobile} />
        <Certifitacion mobile={mobile} setMoobile={setMoobile} />
      </section>
      <SuccessStory />
    </main>
  )
}

export default Stories;
