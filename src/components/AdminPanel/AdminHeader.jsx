import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminHeader(){
    const [searchInput, setSearchInput] = useState(false)
    const [signOut, setSignOut] = useState(false)

    const navigate = useNavigate()
    // search input function
    const handleShowSearchInput = ()=> {
        setSearchInput(!searchInput)
    } 
    function handleSingOut(){
        localStorage.removeItem("autAdminState")
        navigate("/admin")
    }

    return(
       <div className="w-[100%] bg-[#121212] pt-[48px]  flex items-center justify-between px-[4%] md:px-[1%] md:pt-[39px]" onClick={function hiddenSearchInput(){
        if(searchInput){
            setSearchInput(false)
        }
       }}>
            <div className="flex gap-x-[8px] max-w-[50%] items-center">

                <h2 className="text-[12px] h-full flex items-center w-[84px]  mb-[24px] font-[700] text-left  text-transparent bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text md:text-[24px] md:w-[154px]">
                    TRANSFORM
                    WITH TUNA
                </h2>
                <img src="/logo.png" alt="logo" className="h-[32px] md:h-[58px] " />

            </div>
            {
                    signOut && 
                    <div className="absolute p-[12px] top-[10px] right-[300px] rounded-[20px] bg-[#194a7a] text-white">
                        <h3>Are you sure you want to leave?</h3>
                        <div className="flex justify-between">
                            <button className="ml-[30px] px-[10px] rounded-[8px] bg-[#92ba92]" onClick={handleSingOut}>Yes</button>
                            <button className="mr-[30px] px-[10px] rounded-[8px] bg-[#92ba92]" onClick={()=>setSignOut(false)}>No</button>
                        </div>
                    </div>
                }

            <div className="flex gap-x-[18px] h-full pb-[14px] max-w-[50%]">
                <img onClick={handleShowSearchInput} src="/search.png" alt="search"  className="w-[24px] h-[24px]"/>

                {
                    searchInput? (
                        <input type="text" className="rounded-[10px] bg-[#C7C7C7] w-[80%] mr-[10px]"/>
                    ): (
                        <>
                            <img src="/alarm.png" alt="alarm" className="w-[24px] h-[24px]" />
                            <img onClick={()=> setSignOut(true)} src="https://ylzgfzyvohnqdlzlxrfw.supabase.co/storage/v1/object/public/about/07fdde54bff13b985ad05048ff2154ce.jfif" alt="profile-photo" className="w-[24px] h-[24px] rounded-[50%] cursor-pointer" />
                        </>
                    )
                }

            </div>
       </div>

    )
}