// LoginPage.js
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const user = {
    role: 'jobseeker', // change to 'jobseeker' to test
  };
  // Function to handle button click for Recruiter
  const handleRecruiterLogin = () => {
   
    router.push("/?role=recruiter");
    router.push("/"); 
  };

  // Function to handle button click for Job Seeker
  const handleJobSeekerLogin = () => {
    router.push("/?role=jobseeker");
    router.push("/dashboard-jobseeker"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="space-y-4">
        <div
          onClick={handleRecruiterLogin}
          className="custom-button flex items-center justify-center w-full p-4 text-lg cursor-pointer"
        >
          Recruiter Login
        </div>
        <div
          onClick={handleJobSeekerLogin}
          className="custom-button flex items-center justify-center w-full p-4 text-lg cursor-pointer"
        >
          Job Seeker Login
        </div>
      </div>
    </div>
  );
}
