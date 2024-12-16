import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function AdminPanelLayout() {
  const [isadmin, setIsAdmin] = useState(false)
  const [adminState, setAdminState] = useState(() => {
    // Only read localStorage once, during the initial render
    const savedAdminState = localStorage.getItem("auTAdminState");
    return savedAdminState ? JSON.parse(savedAdminState) : { username: "", password: "" };
  });
  const navigate = useNavigate()
  useEffect(() => {
    // Store the admin state in localStorage only when it changes
    if (adminState.username || adminState.password) {
      localStorage.setItem("auTAdminState", JSON.stringify(adminState));
    }
  }, []); // Run this effect only when `adminState` changes

  useEffect(()=>{
    if(adminState.username == "admin" && adminState.password == "admin"){
        setIsAdmin(true)
    }else{
        navigate('/admin')
        setIsAdmin(false)
    }
  }, [isadmin])

return <Outlet />;
}