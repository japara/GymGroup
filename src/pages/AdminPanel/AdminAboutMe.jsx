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

  console.log(data);

  // Initializing formData only when data is available
  const [formData, setFormData] = useState({
    id: null,
    story: "",
    experience: defaultExperience,
    image: null,
    successStories: [],
  });

  useEffect(() => {
    if (data?.about?.[0]) {
      const { id, story, experience, image, successStories } = data.about[0];
      setFormData({
        id: id || null,
        story: story || "",
        experience: Array.isArray(experience) ? experience : defaultExperience,
        image: image || null,
        successStories: Array.isArray(successStories) ? successStories : [],
      });
    }
  }, [data]);

  // Update form data
  const handleInputChange = (e) => {};

  // Profile picture upload
  const handleProfilePictureUpload = async (e) => {};

  // Remove profile picture
  const removeProfilePicture = async () => {};

  // Upload success stories
  const handleSuccessStoryUpload = async (e) => {};

  // Remove success story
  const removeSuccessStory = async (index) => {};

  // Manage experiences
  const handleExperienceChange = (index, value) => {};

  const removeExperience = (index) => {};

  const addExperience = () => {};

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("about").upsert({
        id: formData.id,
        story: formData.story,
        experience: formData.experience,
        image: formData.image,
        successStories: formData.successStories,
      });
      if (error) throw error;
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading profile data</div>;

  return (
    <div className="px-[20%] py-[5rem] my-[-2px] max-w-full mx-auto bg-[#121212] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2">About Me</h1>
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

      {/* Story Section */}
      <div className="mb-8">
        <label className="block text-white mb-2">Share Your Story</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleInputChange}
          rows={4}
          className="w-full bg-[#323232] rounded-lg p-3"
        />
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Experience</h2>
        <div className="bg-[#323232] rounded-lg p-4">
          {formData.experience.map((exp, index) => (
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
