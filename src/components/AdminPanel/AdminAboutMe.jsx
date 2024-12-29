import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AdminAboutMe = () => {
  const [formData, setFormData] = useState({
    fullname: "Tuna",
    professionalTitle: "Certified Personal Trainer",
    location: "Tbilisi, Georgia",
    contact: "+995 595 264 972",
    story:
      "Hi, I'm Tuna, a personal trainer dedicated to helping people transform through fitness. My journey began when I overcame my own struggles with body confidence and health. Now, I use my experience to empower others to achieve their fitness goals...",
    certifications: [
      "*ACE (American Council on Exercise) Certified Personal Trainer",
      "*NASM (National Academy of Sports Medicine) Certified Personal Trainer",
      "*BSc Fitness and Personal Training",
      "*Precision Nutrition - Level 1",
      "*Youth Strength & Conditioning Coach",
      "*ISSA (International Sports Sciences Association) Certified Fitness Trainer",
    ],
    profilePicture: null,
    successStories: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfilePictureUpload = (e) => {
    // Handle profile picture upload
  };

  const handleSuccessStoryUpload = (e) => {
    // Handle success story image upload
  };

  const removeProfilePicture = () => {
    // Handle profile picture removal
  };

  const addExperience = () => {
    // Handle adding new certification/experience
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">About me</h1>
      <p className="text-gray-400 mb-8">Add info for your clients</p>

      {/* Profile Picture Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Your Profile Picture</h2>
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700">
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <button className="bg-[#CCFF00] text-black px-4 py-2 rounded-full flex items-center gap-2">
            <FaPlus /> Upload New
          </button>
          <button className="border border-[#CCFF00] text-[#CCFF00] px-4 py-2 rounded-full">
            Remove Profile Picture
          </button>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-white mb-2">Input your Fullname</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            className="w-full bg-gray-800 rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Professional Title</label>
          <input
            type="text"
            name="professionalTitle"
            value={formData.professionalTitle}
            onChange={handleInputChange}
            className="w-full bg-gray-800 rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full bg-gray-800 rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full bg-gray-800 rounded-lg p-3"
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
          className="w-full bg-gray-800 rounded-lg p-3"
        />
      </div>

      {/* Certification Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Certification</h2>
        <div className="bg-gray-800 rounded-lg p-4">
          {formData.certifications.map((cert, index) => (
            <p key={index} className="mb-2 text-gray-300">
              {cert}
            </p>
          ))}
          <button className="border border-[#CCFF00] text-[#CCFF00] px-4 py-2 rounded-full mt-4 flex items-center gap-2">
            <FaPlus /> Add Experience
          </button>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">Client Success Stories</h2>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex gap-4 mb-4">
            {formData.successStories.map((story, index) => (
              <div
                key={index}
                className="w-24 h-24 bg-gray-700 rounded-lg overflow-hidden"
              >
                <img
                  src={story}
                  alt={`Success story ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-gray-700 rounded-lg p-4">
            <FaPlus className="text-[#CCFF00]" />
            <span>Upload photos of your client's success stories</span>
          </button>
        </div>
      </div>

      {/* Update Profile Button */}
      <button className="bg-[#CCFF00] text-black px-8 py-3 rounded-full">
        Update Profile
      </button>
    </div>
  );
};

export default AdminAboutMe;
