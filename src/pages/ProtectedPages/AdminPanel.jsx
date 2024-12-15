import { useEffect, useState } from "react"
import { supabase } from "../../services/supabase";
import {  useNavigate } from "react-router-dom";

export default function AdminPanel(){

    const navigate = useNavigate()
    
    const [autState, setAutState] = useState(() => {
        const savedAutState = localStorage.getItem("autState");
        return savedAutState ? JSON.parse(savedAutState) : { username: "", password: "" };
      });

    useEffect(()=>{
        localStorage.setItem("autState", JSON.stringify(autState))
    }, [autState])
    

    async function HandleLogin(){
        const { error } = await supabase.auth.signInWithPassword({
            username: autState.username, 
            password: autState.password,
        });

        if (autState.username == "admin" && autState.password == "admin") {
            console.log("Login successful");
            localStorage.setItem("autState", JSON.stringify(autState))
            navigate("/admin/dashboard")
        } else{
            console.log(error)
        }
    }

    return(
        <section className="w-full h-[100svh] bg-[#0d4771] flex justify-center items-center text-[13px] md:text-[16px] ">
            <div className="w-[70%] border-black m-auto  max-w-[400px] p-[30px] ">
                <div className="flex flex-col bg-[#00202e] p-[12px] rounded-t-[20px] md:pt-[20px] ">
                    <label className="text-white pb-[12px]" htmlFor="username">Username</label>
                    <input value={autState.username} onChange={(e)=> setAutState({...autState, username: e.target.value})} className="bg-[#00202e] outline-0 text-white" type="text" placeholder="Username" id="username" required />
                </div>

                <div className="flex flex-col bg-[#00202e] p-[12px] md:pt-[10px]">
                    <label className="text-white pb-[12px]" htmlFor="password">Password</label>
                    <input value={autState.password} onChange={(e)=> setAutState({...autState, password: e.target.value})} className="bg-[#00202e] outline-0 text-[white]" type="password" placeholder="Password" id="password" required />
                </div>
                <div className="flex flex-col bg-[#00202e] p-[12px] rounded-b-[20px] md:pt-[10px] md:pb-[20px] ">
                    <button onClick={HandleLogin} className="text-white w-[120px] m-auto">Login</button>
                </div>
            </div>
        </section>
    )
}