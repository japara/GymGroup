import { useState } from "react";
import { supabase } from "../../services/supabase";

export default function AddServicesModal({ isOpen, setIsOpen }) {
  const [priceServices, setPriceServices] = useState({
    name: "",
    singlePrice: "",
    fivePrice: "",
    tenPrice: ""
  });

  // handleAddService function
  async function handleAddService() {
    // Validate the fields to ensure all are filled
    if (!priceServices.name || !priceServices.singlePrice || !priceServices.fivePrice || !priceServices.tenPrice) {
      alert("Please fill in all fields.");
      return;
    }

    // Insert the new service into the "prices" table
    const { data, error } = await supabase
      .from("prices")
      .insert([
        {
          name: priceServices.name, 
          sessions_single:priceServices.singlePrice, 
          sessions_five:priceServices.fivePrice, 
          sessions_ten:priceServices.tenPrice     
        }
      ]);

    // Handle error or success
    if (error) {
      console.error("Error adding service:", error.message);
    } else {
      console.log("Service added:", data);
      // Reset the form after success
      setPriceServices({
        name: "",
        singlePrice: "",
        fivePrice: "",
        tenPrice: ""
      });
      // Close the modal
      setIsOpen(false);
      window.location.reload()
    }
  }

  return (
    isOpen && (
      <div className="w-[70%] min-h-[580px] sticky top-[-200px] left-[20%] z-10 px-[23px] py-[40px] bg-[#323232] rounded-[24px]">
        <div className="bg-[#121212] w-full h-[100%] px-[23px] py-[40px]">
          {/* Header */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-white text-[30px] font-bold leading-10">Services</h2>
              <p className="text-white text-[18px] leading-7 pt-[10px]">Add services you provide</p>
            </div>
            <img onClick={() => setIsOpen(false)} src="/close.png" alt="close" className="w-[54px] h-[54px] cursor-pointer" />
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
              className="w-[100%] rounded-[8px] bg-[#323232] text-white outline-none py-[13px] pl-[10px]"
              value={priceServices.name}
              onChange={(e) => setPriceServices({ ...priceServices, name: e.target.value })}
              required
            />
          </div>

          {/* Price fields */}
          <div className="flex gap-[12px] items-center mt-[30px]">
            <div className="w-[8px] h-[8px] rounded-[50%] bg-white"></div>
            <p className="text-white">Price</p>
          </div>
          <div className="flex flex-col w-full mt-[12px] pl-[20px]">
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px] rounded-t-[8px]"
              placeholder="Enter Single Session Price"
              value={priceServices.singlePrice}
              onChange={(e) => setPriceServices({ ...priceServices, singlePrice: e.target.value })}
              required
            />
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px]"
              placeholder="Enter Five Session Price"
              value={priceServices.fivePrice}
              onChange={(e) => setPriceServices({ ...priceServices, fivePrice: e.target.value })}
              required
            />
            <input
              className="w-[100%] bg-[#323232] text-white outline-none py-[13px] pl-[10px] rounded-b-[8px]"
              placeholder="Enter Ten Session Price"
              value={priceServices.tenPrice}
              onChange={(e) => setPriceServices({ ...priceServices, tenPrice: e.target.value })}
              required
            />
          </div>

          {/* Add service button */}
          <div className="mt-[30px] w-full flex justify-center">
            <button
              onClick={handleAddService}
              className="flex gap-[10px] justify-center items-center p-[10px] text-[#D7FD44] border border-[#D7FD44] rounded-[24px] w-[194px] h-[42px]"
            >
              + Add Service
            </button>
          </div>
        </div>
      </div>
    )
  );
}
