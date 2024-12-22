import { useState, useCallback, useEffect } from "react";
import { supabase } from "../../services/supabase";

export default function EditServiceModal({ isEditOpen, setIsEditOpen, item, setShowEdit }) {
  const [priceServicesEdit, setPriceServicesEdit] = useState({
    name: "",
    singlePrice: "",
    fivePrice: "",
    tenPrice: "",
  });

  // Effect to initialize the form with current service data
  useEffect(() => {
    if (item) {
      setPriceServicesEdit({
        name: item.name || "",
        singlePrice: item.sessions_single || "",
        fivePrice: item.sessions_five || "",
        tenPrice: item.sessions_ten || "",
      });
    }
  }, [item]);

  function handleCloseEdit(){
    setIsEditOpen(false)
    setShowEdit(-1)
  }

  // Function to handle the service update
  async function handleEditService(){
        // Basic field validation
        if (!priceServicesEdit.name || !priceServicesEdit.singlePrice || !priceServicesEdit.fivePrice || !priceServicesEdit.tenPrice) {
          alert("Please fill in all fields.");
          return;
        }
    
        try {
          const { data, error } = await supabase
            .from("prices")
            .update({
              name: priceServicesEdit.name,
              sessions_single: priceServicesEdit.singlePrice,
              sessions_five: priceServicesEdit.fivePrice,
              sessions_ten: priceServicesEdit.tenPrice,
            })
            .eq("id", item.id); // Update based on item id
            window.location.reload()
    
          if (error) {
            throw new Error(error.message);
          }
    
          console.log("Service updated:", data);
    
          // Reset form and close modal on success
          setPriceServicesEdit({
            name: "",
            singlePrice: "",
            fivePrice: "",
            tenPrice: "",
          });
          setIsEditOpen(false);
        } catch (error) {
          console.error("Error updating service:", error.message);
          alert("An error occurred while updating the service.");
        }
  }

  // Function to handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setPriceServicesEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  return (
    isEditOpen && (
      <div className="w-[70%] min-h-[580px] fixed top-[80px] left-[20%] z-10 px-[23px] py-[40px] bg-[#323232] rounded-[24px]">
        <div className="bg-[#121212] w-full h-[100%] px-[23px] py-[40px]">
          {/* Header */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-white text-[30px] font-bold leading-10">Services</h2>
              <p className="text-white text-[18px] leading-7 pt-[10px]">Edit services you provide</p>
            </div>
            <img onClick={handleCloseEdit} src="/close.png" alt="close" className="w-[54px] h-[54px] cursor-pointer" />
          </div>

          {/* Line */}
          <div className="w-[100%] h-[1px] bg-[#6F6F6F] mt-[20px] mb-[40px] m-auto"></div>

          {/* Input fields for service */}
          <div className="flex gap-[12px] items-center">
            <div className="w-[8px] h-[8px] rounded-[50%] bg-white"></div>
            <p className="text-white">Input Service Title</p>
          </div>
          <div className="flex w-full mt-[12px] pl-[20px]">
            <input
              type="text"
              name="name"
              className="w-[100%] rounded-[8px] bg-[#323232] text-white outline-none py-[13px] pl-[10px]"
              value={priceServicesEdit.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Price fields */}
          <div className="flex gap-[12px] items-center mt-[30px]">
            <div className="w-[8px] h-[8px] rounded-[50%] bg-white"></div>
            <p className="text-white">Edit Price</p>
          </div>
          <div className="flex flex-col w-full mt-[12px] pl-[20px]">
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px] rounded-t-[8px]"
              placeholder="Enter Single Session Price"
              name="singlePrice"
              value={priceServicesEdit.singlePrice}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px]"
              placeholder="Enter Five Session Price"
              name="fivePrice"
              value={priceServicesEdit.fivePrice}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px] rounded-b-[8px]"
              placeholder="Enter Ten Session Price"
              name="tenPrice"
              value={priceServicesEdit.tenPrice}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Edit service button */}
          <div className="mt-[30px] w-full flex justify-center">
            <button
              onClick={handleEditService}
              className="flex gap-[10px] justify-center items-center p-[10px] text-[#D7FD44] border border-[#D7FD44] rounded-[24px] w-[194px] h-[42px]"
            >
              + Edit Service
            </button>
          </div>
        </div>
      </div>
    )
  );
}
