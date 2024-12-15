import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminAutLayout() {
  const [navigateAdmin, setNavugateAdmn] = useState(false)
      
  const [autState, setAutState] = useState(() => {
    const savedAutState = localStorage.getItem("autState");
    return savedAutState ? JSON.parse(savedAutState) : { username: "", password: "" };
  });

  
useEffect(()=>{
    localStorage.setItem("autState", JSON.stringify(autState))
}, [autState])

    useEffect(()=> {
      setNavugateAdmn(localStorage.getItem("autState"))
    },[navigateAdmin])

    if(!navigateAdmin){
      return <Navigate to={"/admin"} />
    }
     

  return <Outlet />; // Render Outlet when admin is authenticated
}