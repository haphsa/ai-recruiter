import React, { useState } from 'react';
import DetailsPanel from './jobs/details'; // Assuming your details component is inside jobs directory
import ApplyModal from './jobs/ApplyModal';


export default function JobTable({ title = 'Hiring Pipeline', itemsPerPage = 5, applied = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null); // State to manage the selected job for details panel
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // State to manage the visibility of the details panel
 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [applicationDetails, setApplicationDetails] = useState({ date: '', time: '' });
 

  const handleApplyClick = (e, job) => {
    const rect = e.target.getBoundingClientRect();
    setModalPosition({ top: rect.bottom, left: rect.left + rect.width / 2 });
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setApplicationDetails({ date: '', time: '' });
  };

  const handleChange = (e) => {
    setApplicationDetails({ ...applicationDetails, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    console.log('Applied for:', selectedJob);
    console.log('Details:', applicationDetails);
    handleModalClose();
  };


  const jobs = [
    {
      salary: "$120K",
      jobTitle: "Web Developer",
      department: "Development",
      availability: "Immediate",
      location: "USA",
      jobType: "Remote",
      postedAt: "Apr 10, 2025",
      expiresAt: "May 10, 2025",
    },
    {
      salary: "$120K",
      jobTitle: "Web Developer",
      department: "Development",
      availability: "Immediate",
      location: "Pakistan",
      jobType: "Remote",
      postedAt: "Apr 10, 2025",
      expiresAt: "May 10, 2025",
    },
    {
      salary: "$95K",
      jobTitle: "UX Designer",
      department: "Design",
      availability: "2 weeks notice",
      location: "New York",
      jobType: "Hybrid",
      postedAt: "Apr 14, 2025",
      expiresAt: "May 14, 2025",
    },
    {
      salary: "$105K",
      jobTitle: "QA Automation",
      department: "Tech",
      availability: "Immediate",
      location: "Austin",
      jobType: "Onsite",
      postedAt: "Apr 1, 2025",
      expiresAt: "Apr 30, 2025",
    },
    {
      salary: "$110K",
      jobTitle: "Analytics Specialist",
      department: "Data Science",
      availability: "1 month notice",
      location: "Berlin",
      jobType: "Hybrid",
      postedAt: "Apr 3, 2025",
      expiresAt: "May 3, 2025",
    },
    {
      salary: "$130K",
      jobTitle: "Product Manager",
      department: "Product",
      availability: "Immediate",
      location: "Toronto",
      jobType: "Hybrid",
      postedAt: "Apr 6, 2025",
      expiresAt: "May 6, 2025",
    },
    {
      salary: "$98K",
      jobTitle: "Content Strategist",
      department: "Marketing",
      availability: "2 weeks notice",
      location: "London",
      jobType: "Remote",
      postedAt: "Apr 9, 2025",
      expiresAt: "May 9, 2025",
    },
    {
      salary: "$112K",
      jobTitle: "DevOps Engineer",
      department: "Engineering",
      availability: "Immediate",
      location: "Singapore",
      jobType: "Onsite",
      postedAt: "Apr 5, 2025",
      expiresAt: "May 5, 2025",
    },
    {
      salary: "$125K",
      jobTitle: "Data Analyst",
      department: "Analytics",
      availability: "1 month notice",
      location: "San Francisco",
      jobType: "Hybrid",
      postedAt: "Apr 7, 2025",
      expiresAt: "May 7, 2025",
    },
    {
      salary: "$100K",
      jobTitle: "Recruiter",
      department: "HR",
      availability: "Immediate",
      location: "Dubai",
      jobType: "Remote",
      postedAt: "Apr 8, 2025",
      expiresAt: "May 8, 2025",
    },
    {
      salary: "$102K",
      jobTitle: "Graphic Designer",
      department: "Creative",
      availability: "2 weeks notice",
      location: "Paris",
      jobType: "Hybrid",
      postedAt: "Apr 11, 2025",
      expiresAt: "May 11, 2025",
    },
    {
      salary: "$140K",
      jobTitle: "Machine Learning Engineer",
      department: "AI Lab",
      availability: "Immediate",
      location: "Zurich",
      jobType: "Onsite",
      postedAt: "Apr 12, 2025",
      expiresAt: "May 12, 2025",
    },
    {
      salary: "$108K",
      jobTitle: "Technical Writer",
      department: "Documentation",
      availability: "1 month notice",
      location: "Melbourne",
      jobType: "Remote",
      postedAt: "Apr 13, 2025",
      expiresAt: "May 13, 2025",
    },
    {
      salary: "$150K",
      jobTitle: "Cloud Architect",
      department: "Infrastructure",
      availability: "Immediate",
      location: "Seattle",
      jobType: "Hybrid",
      postedAt: "Apr 14, 2025",
      expiresAt: "May 14, 2025",
    },
    {
      salary: "$90K",
      jobTitle: "Copywriter",
      department: "Marketing",
      availability: "2 weeks notice",
      location: "Madrid",
      jobType: "Remote",
      postedAt: "Apr 15, 2025",
      expiresAt: "May 15, 2025",
    },
    {
      salary: "$88K",
      jobTitle: "Customer Support Specialist",
      department: "Support",
      availability: "Immediate",
      location: "Mexico City",
      jobType: "Remote",
      postedAt: "Apr 16, 2025",
      expiresAt: "May 16, 2025",
    },
    {
      salary: "$135K",
      jobTitle: "Solutions Engineer",
      department: "Sales Engineering",
      availability: "1 month notice",
      location: "Chicago",
      jobType: "Hybrid",
      postedAt: "Apr 17, 2025",
      expiresAt: "May 17, 2025",
    },
    {
      salary: "$115K",
      jobTitle: "Business Analyst",
      department: "Strategy",
      availability: "Immediate",
      location: "Boston",
      jobType: "Onsite",
      postedAt: "Apr 18, 2025",
      expiresAt: "May 18, 2025",
    },
    {
      salary: "$120K",
      jobTitle: "Cybersecurity Analyst",
      department: "Security",
      availability: "Immediate",
      location: "Washington D.C.",
      jobType: "Hybrid",
      postedAt: "Apr 19, 2025",
      expiresAt: "May 19, 2025",
    },
    {
      salary: "$125K",
      jobTitle: "Full Stack Developer",
      department: "Engineering",
      availability: "2 weeks notice",
      location: "Copenhagen",
      jobType: "Remote",
      postedAt: "Apr 20, 2025",
      expiresAt: "May 20, 2025",
    },
    {
      salary: "$94K",
      jobTitle: "HR Generalist",
      department: "HR",
      availability: "Immediate",
      location: "Bangkok",
      jobType: "Onsite",
      postedAt: "Apr 21, 2025",
      expiresAt: "May 21, 2025",
    },
    {
      salary: "$110K",
      jobTitle: "Project Manager",
      department: "Operations",
      availability: "1 month notice",
      location: "Los Angeles",
      jobType: "Hybrid",
      postedAt: "Apr 22, 2025",
      expiresAt: "May 22, 2025",
    },
    {
      salary: "$118K",
      jobTitle: "Backend Engineer",
      department: "Development",
      availability: "Immediate",
      location: "Oslo",
      jobType: "Remote",
      postedAt: "Apr 23, 2025",
      expiresAt: "May 23, 2025",
    },
    {
      salary: "$100K",
      jobTitle: "SEO Specialist",
      department: "Marketing",
      availability: "2 weeks notice",
      location: "Amsterdam",
      jobType: "Onsite",
      postedAt: "Apr 24, 2025",
      expiresAt: "May 24, 2025",
    },
    {
      salary: "$145K",
      jobTitle: "Tech Lead",
      department: "Engineering",
      availability: "Immediate",
      location: "Sydney",
      jobType: "Hybrid",
      postedAt: "Apr 25, 2025",
      expiresAt: "May 25, 2025",
    },
    {
      salary: "$132K",
      jobTitle: "IT Manager",
      department: "IT",
      availability: "1 month notice",
      location: "Jakarta",
      jobType: "Onsite",
      postedAt: "Apr 26, 2025",
      expiresAt: "May 26, 2025",
    },
    {
      salary: "$92K",
      jobTitle: "Social Media Manager",
      department: "Marketing",
      availability: "Immediate",
      location: "Istanbul",
      jobType: "Remote",
      postedAt: "Apr 27, 2025",
      expiresAt: "May 27, 2025",
    },
    {
      salary: "$128K",
      jobTitle: "Mobile Developer",
      department: "Development",
      availability: "Immediate",
      location: "Vancouver",
      jobType: "Hybrid",
      postedAt: "Apr 28, 2025",
      expiresAt: "May 28, 2025",
    },
    {
      salary: "$137K",
      jobTitle: "Data Engineer",
      department: "Data Science",
      availability: "2 weeks notice",
      location: "Helsinki",
      jobType: "Onsite",
      postedAt: "Apr 29, 2025",
      expiresAt: "May 29, 2025",
    },
    {
      salary: "$145K",
      jobTitle: "AI Researcher",
      department: "Research",
      availability: "Immediate",
      location: "Tokyo",
      jobType: "Remote",
      postedAt: "Apr 30, 2025",
      expiresAt: "May 30, 2025",
    }
  ];
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const handleDetailsClick = (job) => {
    setSelectedJob(job); // Set selected job data
    setIsDetailsOpen(true); // Open the details panel
  };

  



  return (
    <div className="bg-white w-full rounded-xl shadow-md">
      <div className="flex justify-between p-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          {/* Three dots vertical (kebab menu) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-200 shadow-sm max-w-full">
        <table className="w-full table-auto text-left text-sm min-w-[900px]">
          <thead>
            <tr className="purpleshade">
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Salary</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Position</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Department</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Availability</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Location</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Posted At</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]">Expires At</th>
              <th className="px-4 py-3 font-medium text-[#7e5ca0]"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {paginatedJobs.map((job, index) => (
              <tr key={index} className="hover:bg-white/40 transition">
                <td className="px-4 py-3">{job.salary}</td>
                <td className="px-4 py-3">{job.jobTitle}</td>
                <td className="px-4 py-3">{job.department}</td>
                <td className="px-4 py-3">{job.availability}</td>
                <td className="px-4 py-3">{`${job.jobType} - ${job.location}`}</td>
                <td className="px-4 py-3">{job.postedAt}</td>
                <td className="px-4 py-3">{job.expiresAt}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-5">
                    <div
                      className="custom-button border-1px border-[#7e5ca0] p-2 rounded cursor-pointer"
                      onClick={() => handleDetailsClick(job)}
                    >
                      Details
                    </div>
                    {job.applied || applied ? (
  <span className="border px-4 py-1 font-semibold rounded-[15px] bg-[var(--foreground)] opacity-70 text-white w-full inline-block text-center">
    Applied
  </span>
) : (
  <button
    onClick={(e) => handleApplyClick(e, job)}
    className="custom-button border px-4 py-1 font-semibold rounded-[15px] hover:bg-[var(--foreground)] hover:text-white w-full inline-block text-center justify-center"
  >
    Apply
  </button>
)}


                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-3 px-4 py-2 mt-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm border rounded bg-[#7e5ca0] text-white hover:bg-[#6b4b8c] disabled:opacity-50"
        >
          Prev
        </button>
        
        <span className="text-sm text-gray-700">Page {currentPage}</span>
<button
  onClick={() => setCurrentPage((prev) => prev + 1)}
  disabled={currentPage === totalPages}
  className={`px-3 py-1 text-sm border rounded disabled:opacity-50 ${
    currentPage === totalPages
      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
      : 'bg-[#7e5ca0] text-white hover:bg-[#6b4b8c]'
  }`}
>
  Next
</button>

      </div>

      {/* Pass the state to the DetailsPanel component */}
      <DetailsPanel
        open={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)} 
        job={selectedJob} // Pass the selected job data
      />
    
    <ApplyModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onApply={handleApply}
        handleChange={handleChange}
        applicationDetails={applicationDetails}
        position={modalPosition}
      />


    </div>
  );
}
