import { NavLink } from "react-router-dom";

export default function AdminMenuMB(){
    const adminMenuItems = [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Blogs", path: "/admin/blogs" },
        { name: "About Me", path: "/admin/aboutme" },
        { name: "Services", path: "/admin/services" },
      ];

    return(
      <div className="flex mb:hidden w-full h-[70px] items-center text-white bg-[#323232] outline-0 border-0 border-transparent z-10 relative md:hidden">
        <div className="absolute w-full bg-white h-[1px] top-0 outline-0 border-0 border-transparent"></div>
        <nav className="w-full justify-evenly items-center flex text-[3vw] ">
          {
            adminMenuItems.map((item)=>{
              return(
                <NavLink 
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-[46px] font-bold ${
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
    )
}