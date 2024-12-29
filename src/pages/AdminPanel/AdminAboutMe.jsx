import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useGetallAboutMe } from "../../hooks/useGetallAboutMe";
import { supabase } from "../../services/supabase";

const defaultExperience = [
  "*ACE (American Council on Exercise) Certified Personal Trainer",
  "*NASM (National Academy of Sports Medicine) Certified Personal Trainer",
  "*BSc Fitness and Personal Training",
  "*Precision Nutrition - Level 1",
  "*Youth Strength & Conditioning Coach",
  "*ISSA (International Sports Sciences Association) Certified Fitness Trainer",
];

const AdminAboutMe = () => {
  const { data, isLoading, isError } = useGetallAboutMe();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    fullname: "",
    professionalTitle: "",
    location: "",
    contact: "",
    story: "",
    experience: defaultExperience,
    image: null,
    successStories: [],
  });

  useEffect(() => {
    if (data?.about?.[0]) {
      setFormData({
        id: data.about[0].id,
        fullname: data.about[0].fullname || "",
        professionalTitle: data.about[0].professionalTitle || "",
        location: data.about[0].location || "",
        contact: data.about[0].contact || "",
        story: data.about[0].story || "",
        experience: Array.isArray(data.about[0].experience)
          ? data.about[0].experience
          : defaultExperience,
        image: data.about[0].image || null,
        successStories: Array.isArray(data.about[0].successStories)
          ? data.about[0].successStories
          : [],
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfilePictureUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;
      const filePath = `profile-pictures/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("about")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true,
          contentType: file.type,
        });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("about").getPublicUrl(filePath);

      setFormData((prev) => ({
        ...prev,
        image: publicUrl,
      }));

      if (formData.id) {
        const { error: updateError } = await supabase
          .from("about")
          .update({ image: publicUrl })
          .eq("id", formData.id);

        if (updateError) throw updateError;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(error.message || "Failed to upload image");
    }
  };

  const removeProfilePicture = async () => {
    try {
      if (formData.image) {
        const urlParts = formData.image.split("/");
        const filePath = `profile-pictures/${urlParts[urlParts.length - 1]}`;

        const { error: removeError } = await supabase.storage
          .from("about")
          .remove([filePath]);

        if (removeError) throw removeError;

        setFormData((prev) => ({
          ...prev,
          image: null,
        }));

        if (formData.id) {
          const { error: updateError } = await supabase
            .from("about")
            .update({ image: null })
            .eq("id", formData.id);

          if (updateError) throw updateError;
        }
      }
    } catch (error) {
      console.error("Error removing image:", error);
      alert(error.message || "Failed to remove image");
    }
  };

  const handleSuccessStoryUpload = async (e) => {
    try {
      const files = Array.from(e.target.files);
      const newStories = [];

      for (const file of files) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${fileExt}`;
        const filePath = `success-stories/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("about")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: true,
            contentType: file.type,
          });

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("about").getPublicUrl(filePath);

        newStories.push(publicUrl);
      }

      const updatedStories = [...formData.successStories, ...newStories];
      setFormData((prev) => ({
        ...prev,
        successStories: updatedStories,
      }));

      if (formData.id) {
        const { error: updateError } = await supabase
          .from("about")
          .update({ successStories: updatedStories })
          .eq("id", formData.id);

        if (updateError) throw updateError;
      }
    } catch (error) {
      console.error("Error uploading success stories:", error);
      alert(error.message || "Failed to upload success stories");
    }
  };

  const removeSuccessStory = async (index) => {
    try {
      const storyUrl = formData.successStories[index];
      const urlParts = storyUrl.split("/");
      const filePath = `success-stories/${urlParts[urlParts.length - 1]}`;

      const { error: removeError } = await supabase.storage
        .from("about")
        .remove([filePath]);

      if (removeError) throw removeError;

      const updatedStories = formData.successStories.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({
        ...prev,
        successStories: updatedStories,
      }));

      if (formData.id) {
        const { error: updateError } = await supabase
          .from("about")
          .update({ successStories: updatedStories })
          .eq("id", formData.id);

        if (updateError) throw updateError;
      }
    } catch (error) {
      console.error("Error removing success story:", error);
      alert(error.message || "Failed to remove success story");
    }
  };

  const handleExperienceChange = (index, value) => {
    setFormData((prev) => {
      const newExperience = [...prev.experience];
      newExperience[index] = value;
      return {
        ...prev,
        experience: newExperience,
      };
    });
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, "*"],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("about").upsert({
        id: formData.id,
        fullname: formData.fullname,
        professionalTitle: formData.professionalTitle,
        location: formData.location,
        contact: formData.contact,
        story: formData.story,
        experience: formData.experience || [],
        image: formData.image,
        successStories: formData.successStories,
      });

      if (error) throw error;
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error.message || "Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading profile data</div>;
  }

  return (
    <div className="px-[20%] py-[5rem] my-[-2px] max-w-full mx-auto bg-[#121212] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2">About me</h1>
      <p className="text-gray-400 mb-8">Add info for your clients</p>

      {/* Profile Picture Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Your Profile Picture</h2>
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700">
            {formData.image && (
              <img
                src={formData.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <label className="bg-[#CCFF00] text-black px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer">
            <FaPlus /> Upload New
            <input
              type="file"
              className="hidden"
              onChange={handleProfilePictureUpload}
              accept="image/*"
            />
          </label>
          {formData.image && (
            <button
              onClick={removeProfilePicture}
              className="border border-[#CCFF00] text-[#CCFF00] px-4 py-2 rounded-full"
            >
              Remove Profile Picture
            </button>
          )}
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-white mb-2">Input your Fullname</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            className="w-full bg-[#323232] rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Professional Title</label>
          <input
            type="text"
            name="professionalTitle"
            value={formData.professionalTitle}
            onChange={handleInputChange}
            className="w-full bg-[#323232] rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full bg-[#323232] rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full bg-[#323232] rounded-lg p-3"
          />
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <label className="block text-white mb-2">Share your story</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleInputChange}
          rows={4}
          className="w-full bg-[#323232] rounded-lg p-3"
          placeholder="Hi, I'm Tuna, a personal trainer dedicated to helping people transform through fitness..."
        />
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Experience</h2>
        <div className="bg-[#323232] rounded-lg p-4">
          {(formData.experience || []).map((exp, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={exp}
                onChange={(e) => handleExperienceChange(index, e.target.value)}
                className="flex-1 bg-[#323232] rounded p-2"
              />
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500 px-2"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addExperience}
            className="border border-[#CCFF00] text-[#CCFF00] px-4 py-2 rounded-full mt-4 flex items-center gap-2"
          >
            <FaPlus /> Add Experience
          </button>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Client Success Stories</h2>
        <div className="bg-[#323232] rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4">
            {formData.successStories.map((story, index) => (
              <div key={index} className="relative group">
                <img
                  src={story}
                  alt={`Success Story ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
                <button
                  onClick={() => removeSuccessStory(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
            <label className="relative group cursor-pointer bg-[#323232] rounded h-32 flex items-center justify-center border-2 border-dashed border-[#CCFF00]">
              <div className="flex flex-col items-center gap-2 text-[#CCFF00]">
                <FaPlus size={24} />
                <span>Add Success Story</span>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleSuccessStoryUpload}
                accept="image/*"
                multiple
              />
            </label>
          </div>
        </div>
      </div>

      {/* Update Profile Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="bg-[#CCFF00] text-black px-8 py-3 rounded-full disabled:opacity-50"
      >
        {isSubmitting ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
};

export default AdminAboutMe;
