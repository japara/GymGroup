import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminPanel/AdminHeader";
import AdminMenuMB from "../../components/AdminPanel/AdminMenuMB";
import AdminMenuPC from "../../components/AdminPanel/AdminMenuPC";

export default function AdminPanelLayout() {

  const {pathname} = useLocation();
  const [isAdminAut, setIsAdminAut] = useState()
   useEffect(()=>{
    if(pathname == "/admin"){
      setIsAdminAut(false)
    }else{
      setIsAdminAut(true)
    }
   })

  const [isadmin, setIsAdmin] = useState(false)
  const [adminState, setAdminState] = useState(() => {
    // Only read localStorage once, during the initial render
    const savedAdminState = localStorage.getItem("autAdminState");
    return savedAdminState ? JSON.parse(savedAdminState) : { username: "", password: "" };
  });
  const navigate = useNavigate()
  useEffect(() => {
    // Store the admin state in localStorage only when it changes
    if (adminState.username || adminState.password) {
      localStorage.setItem("autAdminState", JSON.stringify(adminState));
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

return (
  <>
  {/* if pathname is "admin" hidden header element */}
    {
      isAdminAut && 
      <header>
        <AdminHeader />
        <AdminMenuPC />
    </header>
    }
    <Outlet />

      {/* if pathname is "admin" hidden menu element */}
      {
      isAdminAut && 
      <div>
        <AdminMenuMB />
      </div>
    }
  </>
);
}