// components/InterviewCard.js
'use client'
import { PhoneCall } from 'lucide-react';
import { useState, useEffect } from "react";

export default function InterviewCard() {
  // Default gender is taken from interviewer object
  const interviewer = {
    gender: 'female', // change to 'male' to test
  };

  const [gender, setGender] = useState(interviewer.gender); // Set initial gender from interviewer
  const [name, setName] = useState(""); // Default name
  const [profilePic, setProfilePic] = useState(""); // Default profile picture

  // Function to handle gender and set profile details accordingly
  const handleGenderChange = (selectedGender = "female") => {
    setGender(selectedGender);
    if (selectedGender === "female") {
      setName("Sarah");
      setProfilePic("/sarah.jpg"); 
    } else {
      setName("Adam");
      setProfilePic("./OIP.jpg"); 
    }
  };

  // Automatically set gender, name, and profilePic on component load
  useEffect(() => {
    handleGenderChange(gender); // Set initial values based on gender
  }, [gender]); // Run when gender changes

  return (
    <div className="w-full bg-[var(--purpleshade)] p-4 rounded-2xl shadow-sm flex justify-between items-center space-x-4">
      <div>
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mt-4">
          <img
            src={profilePic} // Dynamically set the image based on gender
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="text-xs text-gray-500">{gender === "male" ? "Recruiter" : "Recruiter"}</p>
            <p className="font-semibold text-sm">{name}</p>
          </div>
        </div>
      </div>

      <div className="text-sm text-center">
        <p className="text-gray-500 text-xs">Time</p>
        <p className="font-semibold">11:30 AM – 12:45 AM</p>
        <p className="text-gray-500">14 hours left</p>
      </div>

      <div className="text-sm text-center">
        <p className="text-gray-500 text-xs">Company</p>
        <div className="flex items-center justify-center space-x-1 font-semibold">
          <img src="./paypal-logo.png" alt="PayPal" className="w-10 h-10" />
          <span>PayPal</span>
        </div>
      </div>

      <div className="flex space-x-5">
        <button className="custom-button">
          View details
        </button>
        <button className="bg-green-500 p-2 rounded-full">
          <PhoneCall size={30} color="white" />
        </button>
      </div>
    </div>
  );
}
