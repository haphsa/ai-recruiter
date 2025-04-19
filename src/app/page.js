
'use client';

import { useState } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

import KPI from './kpi';
import Filters from './Filters';



export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;
const totalPages = 2;

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Nextverse Tech',
      location: 'Remote',
      posted: '2d ago',
      salary: '$2000',
      type: 'Full-time',
      tags: ['React', 'JavaScript', 'CSS'],
      applied: false,
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CyberNova',
      location: 'Lahore',
      posted: '5d ago',
      salary: '$7500',
      type: 'Full-time',
      tags: ['Node.js', 'Express', 'MongoDB'],
      applied: false,
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'CyberNova',
      location: 'Lahore',
      posted: '5d ago',
      salary: '$7500',
      type: 'Full-time',
      tags: ['Node.js', 'Express', 'MongoDB'],
      applied: false,
    },
    {
      id: 4,
      title: 'Backend Developer',
      company: 'CyberNova',
      location: 'Lahore',
      posted: '5d ago',
      salary: '$7500',
      type: 'Full-time',
      tags: ['Node.js', 'Express', 'MongoDB'],
      applied: false,
    },
  ]);
  
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [jobToApply, setJobToApply] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const jobsposted="+23";
  const TotalApplicants="+45";
  const Interviewedno="+7";



  return (
    <div className="tab-dashboard">
      <div className='flex flex-col flex-[0.8] gap-5'>
        {/* stats box */}
        <div className=" flex  justify-between gap-5">
          {/* Job stats box */}
          <KPI
            title="Jobs Posted"
            value={jobsposted}
            percentage="24%"
            comparison="vs last week"
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award w-6 h-6 text-gray-600"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                <circle cx="12" cy="8" r="6"/>
              </svg>
            )}
            bgClass="purpleshade"

          />
           <KPI
            title="Total Applicants"
            value={TotalApplicants}
            percentage="14%"
            comparison="vs last week"
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-6 h-6 text-gray-600"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            )}
            
            bgClass="blueshade"
            direction="down"
          />
          <KPI
            title="Interviewed"
            value={Interviewedno}
            percentage="26%"
            comparison="vs last week"
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle w-6 h-6 text-gray-600"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>
              </svg>
            )}
            
            
            bgClass="pinkshade"
          />

         
         
          
          
          
          
        
                  
        
          
        </div>
        
        {/*candidate table*/}
<div className="bg-[#FFFFFF] w-full rounded-xl shadow-md">
  <div className='flex justify-between p-3'>
    <h2 className="text-lg font-semibold">Posted Jobs</h2>
    <button className="p-1 hover:bg-gray-100 rounded-full">
      {/* Three dots vertical*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    </button>
  </div>
  
  <div className="overflow-x-auto">
    <div className="w-full overflow-x-auto border border-gray-200 shadow-sm max-w-full">
      
      {/* Set a fixed height and enable scrolling */}
      <div className="max-h-[400px] overflow-y-auto">
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {[
              {
                salary: "$120K",
                jobTitle: "Web Developer",
                department: "Development",
                availability: "Immediate",
                jobType: "Full-time",
                location: "Remote",
                postedAt: "Apr 10, 2025",
                expiresAt: "May 10, 2025",
              },
              {
                salary: "$120K",
                jobTitle: "Web Developer",
                department: "Development",
                availability: "Immediate",
                jobType: "Full-time",
                location: "Remote",
                postedAt: "Apr 10, 2025",
                expiresAt: "May 10, 2025",
              },
              {
                salary: "$95K",
                jobTitle: "UX Designer",
                department: "Design",
                availability: "2 weeks notice",
                jobType: "Contract",
                location: "New York",
                postedAt: "Apr 14, 2025",
                expiresAt: "May 14, 2025",
              },
              {
                salary: "$105K",
                jobTitle: "QA Automation",
                department: "Tech",
                availability: "Immediate",
                jobType: "Full-time",
                location: "Austin",
                postedAt: "Apr 1, 2025",
                expiresAt: "Apr 30, 2025",
              },
              {
                salary: "$110K",
                jobTitle: "Analytics",
                department: "Data Science",
                availability: "1 month notice",
                jobType: "Contract",
                location: "San Francisco",
                postedAt: "Mar 25, 2025",
                expiresAt: "Apr 25, 2025",
              },
              {
                salary: "$98K",
                jobTitle: "Product Manager",
                department: "Product",
                availability: "Immediate",
                jobType: "Full-time",
                location: "Remote",
                postedAt: "Apr 5, 2025",
                expiresAt: "May 5, 2025",
              },
              {
                salary: "$100K",
                jobTitle: "Marketing Specialist",
                department: "Marketing",
                availability: "2 weeks notice",
                jobType: "Part-time",
                location: "Chicago",
                postedAt: "Apr 3, 2025",
                expiresAt: "May 3, 2025",
              }
            ]
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((job, index) => (
                <tr key={index} className="hover:bg-white/40 transition">
                  <td className="px-4 py-3">{job.salary}</td>
                  <td className="px-4 py-3">{job.jobTitle}</td>
                  <td className="px-4 py-3">{job.department}</td>
                  <td className="px-4 py-3">{job.availability}</td>
                  <td className="px-4 py-3">{`${job.jobType} - ${job.location}`}</td>
                  <td className="px-4 py-3">{job.postedAt}</td>
                  <td className="px-4 py-3">{job.expiresAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-4 px-4 py-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 text-sm border rounded disabled:opacity-50 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#7e5ca0] text-white hover:bg-[#6b4b8c]'
          }`}
        >
          Prev
        </button>
        <span className="text-sm text-gray-700">Page {currentPage}</span>
        <button
  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
    </div>
  </div>
</div>




      </div>
      <div className="flex-[0.3]"><Filters/></div>
  

      
     

    </div>
  );
}
