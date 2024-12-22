import { useState } from "react";
import { useGetAllPrices } from "../../hooks/useGetAllPrices";
import AddServicesModal from "./AddServicesModal";
import EditServiceModal from "./EditServiceModal";
import { supabase } from "../../services/supabase";
import ServicesAdminLoad from "../../skeletons/ServicesAdminLoad";


export default function ServicesAdminContent(){
  const[showPrice, setShowPrice] = useState(-1);
  const[showEdit, setShowEdit] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const {data, error, isLoading, isError} = useGetAllPrices();
  
  function handleShowPrice(index){
    if(showPrice == -1){
      setShowPrice(index)
    }else{
      setShowPrice(-1)
    }
  }

  function handleShowEdit(index){
    if(showEdit == -1){
      setShowEdit(index)
    }
    setIsEditOpen(true)
  }

  async function handleDelete(index) {
    const item = data?.prices[index]; // Get the item to delete based on the index
    
    if (!item) {
      console.log("Item not found.");
      return;
    }
  
    try {
      const { data: deletedData, error } = await supabase
        .from("prices")
        .delete()
        .eq("id", item.id); // Delete the item based on its unique id
      
      if (error) {
        console.error("Error deleting item:", error);
        return;
      }
      window.location.reload()
      console.log("Item deleted:", deletedData);
    } catch (error) {
      console.error("An error occurred while deleting:", error);
    }
  }
  

  if (isLoading) {
    return <ServicesAdminLoad />
  }

  if (isError) {
    return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
  }

  return (
    <div className="w-full flex flex-col px-[98px] relative">
      
      {/* add services */}
      <AddServicesModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      
      {/* all services */}
      <div className="flex justify-between">
          <div>
              <h2 className="text-white text-[30px] font-bold leading-10">Services</h2>
              <p className="text-white text-[18px] leading-7 pt-[10px]">Add services you provide</p>
          </div>
          <button onClick={()=>setIsOpen(!isOpen)} className="flex gap-[10px] justify-center items-center p-[10px] text-[#D7FD44] border border-[#D7FD44] rounded-[24px] w-[194px] h-[42px]">
              + Add Service
          </button>
      </div>


      <div className="w-full mt-[32px] mb-[98px]">
        {
          data?.prices.map(function getAllServices(item, index){
            return(
              <div key={item.id} className="mb-[32px] rounded-[20px] bg-[#222222] p-[16px] pl-[32px] w-full flex flex-col cursor-pointer">
                {/* edit service */}
                {
                  showEdit == index && <EditServiceModal isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} item={item} index={index} setShowEdit={setShowEdit}/>
                }

                <div onClick={()=>handleShowPrice(index)} className=" w-full">
                  <div className="flex w-full justify-between h-[100%] items-center">
                    <h3 className="text-[#C4C4C4] text-[20px] font-bold">{item.name}</h3>
                    <img src="/service-arrow.svg" alt="service-arrow" className={`${index == showPrice?"rotate-[-90deg]":"rotate-0"} transition-all duration-1000`} />
                  </div>
                </div>
                
                {/* show text*/}
                {
                  showPrice == index &&
                  <div className="w-full flex justify-between text-white text-[32px] transition-transform duration-1000">

                    <div className="flex flex-col justify-between pt-[14px]">
                      <h3 className="text-white capitalize">Price</h3>
                      <p className="text-[#ABABAB] text-[18px]">
                        <span>Single Session One-on-one training session (60 minutes)${item.sessions_single}</span> <br />
                        <span>5-Session Package5 one-on-one training sessions${item.sessions_five} (${item.sessions_five/5}/session)</span> <br />
                        <span>10-Session Package10 one-on-one training sessions${item.sessions_ten} (${item.sessions_ten/10}/session)</span>
                      </p>
                    </div>

                    <div className="mt-[12px] flex flex-col gap-[10px]">
                      <img src="/edit.png" alt="edit" className="w-[52px] h-[52px]" onClick={()=> handleShowEdit(index)}/>
                      <img src="/delete.png" alt="edit" className="w-[52px] h-[52px]" onClick={()=> handleDelete(index)}/>
                    </div>

                  </div>
                }
              </div>
            )
          })
        }
      </div>

    </div>
  );
};