import { supabase } from "./supabase";

export const getAllServices = async () => {
  let { data: services, error } = await supabase.from("services").select("*");

  return { services, error };
};

export const getAllSuccessStories = async () => {
  let { data: successStory, error } = await supabase
    .from("successStory")
    .select("*");

  return { successStory, error };
};
