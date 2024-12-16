import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAut(){
    const navigate = useNavigate();
    
      const [adminState, setAdminState] = useState(() => {
        // Only read localStorage once, during the initial render
        const savedAdminState = localStorage.getItem("auTAdminState");
        return savedAdminState ? JSON.parse(savedAdminState) : { username: "", password: "" };
      });
    
      useEffect(() => {
        // Store the admin state in localStorage only when it changes
        if (adminState.username || adminState.password) {
          localStorage.setItem("auTAdminState", JSON.stringify(adminState));
        }
      }, [adminState]); // Run this effect only when `adminState` changes
      
      function handleClickAdmin(){
        if(adminState.username == "admin" && adminState.password == "admin") {
            navigate("/admin/dashboard")
        }
      }

    return(
        <div className="w-full bg-[#51588c] h-[100svh] flex items-center justify-center ">

            <div className="bg-[#194a7a] w-[230px] p-[12px] rounded-[30px] md:w-[320px] ">
                <div className="flex flex-col m-[10px] ">
                    <input type="text" value={adminState.username} placeholder="Username" onChange={(e)=> setAdminState({...adminState, username: e.target.value})}  className="bg-[#194a7a] text-white outline-0 text-[13px] md:text-[16px] placeholder:text-white placeholder:text-[13px] md:placeholder:text-[16px]" />
                </div>

                <div className="flex flex-col ml-[10px] ">
                    <input type="password" value={adminState.password} placeholder="Password" onChange={(e)=> setAdminState({...adminState, password: e.target.value})} className="bg-[#194a7a] text-white text-[13px] outline-0 md:text-[16px] placeholder:text-white placeholder:text-[13px] md:placeholder:text-[16px]" />
                </div>

                <div className="w-full flex justify-center mt-[20px] mb-[12px] ">
                    <button onClick={handleClickAdmin} className="w-[90px] p-[4px] bg-[#abc4ff] rounded-[12px] ">Sign In</button>
                </div>
            </div>


        </div>
    )
}