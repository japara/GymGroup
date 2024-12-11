import { supabase } from "./supabase";



export const apiGetServiceById = async () => {
  try {
    const { data, error } = await supabase.from("prices").select("*");

    if (error) {
      console.error("Error fetching services:", error);
      throw error;
    }

    // Ensure the data is returned in a consistent structure
    return { services: data };
  } catch (err) {
    console.error("Unexpected error:", err);
    throw err;
  }
};





