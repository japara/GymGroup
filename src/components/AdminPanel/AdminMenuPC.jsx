import { NavLink } from "react-router-dom";

export default function AdminMenuPC(){
    const adminMenuItems = [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Add Blogs", path: "/admin/blogs" },
        { name: "About Me", path: "/admin/aboutme" },
        { name: "Services", path: "/admin/services" },
      ];

    return(
        <div className="hidden md:flex w-full bg-[#121212] pb-[54px] justify-center z-10 translate-y-[-2px] h-[48px]">
            <div className="w-[520px]  m-auto bg-[#222222] rounded-[20px]">
                <nav className="w-full flex justify-between items-center items-center h-[48px] mt-[2px] ">
                {
                    adminMenuItems.map((item)=>{
                    return(
                        <NavLink 
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                        `px-4 py-2 rounded-[46px] font-bold h-[48px] flex items-center ${
                            isActive
                            ? "bg-[#D7FD44] text-black"
                            : "text-[#C4C4C4] hover:bg-[#D7FD44] hover:text-black"
                        }`
                        }
                        >
                        {item.name}
                        </NavLink>
                    )
                    })
                }
                </nav>
            </div>

        </div>

    )
}