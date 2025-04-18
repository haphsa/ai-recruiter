'use client';
import { Video, CalendarClock } from "lucide-react";
import { useState, useMemo } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import JobCard from '../jobscard';
import Filters from '../jobs/filters';
import Jobs from '../jobstable';
import InterviewCard from "../interviewcard";

import { ArrowUpRight } from "lucide-react";
import { TroubleshootRounded } from "@mui/icons-material";

export default function Home() {
  const initialJobData = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Nextverse Tech',
      location: 'Remote',
      posted: '2d ago',
      salary: 2000,
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
      salary: 7500,
      type: 'Full-time',
      tags: ['Node.js', 'Express', 'MongoDB'],
      applied: false,
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Designify',
      location: 'Karachi',
      posted: '3d ago',
      salary: 1500,
      type: 'Part-time',
      tags: ['Figma', 'Adobe XD'],
      applied: false,
    },
  ];

  const [filters, setFilters] = useState({
    jobType: {
      fullTime: true,
      partTime: false,
      contractual: false,
    },
    salaryRange: [0, 5000],
  });

  const [jobs, setJobs] = useState(initialJobData);
  const [selectedJob, setSelectedJob] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [jobToApply, setJobToApply] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReset = () => {
    setFilters({
      jobType: {
        fullTime: true,
        partTime: false,
        contractual: false,
      },
      salaryRange: [0, 5000],
    });
  };

  const handleApply = () => {
    console.log('Filters applied:', filters);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesType =
        (filters.jobType.fullTime && job.type === 'Full-time') ||
        (filters.jobType.partTime && job.type === 'Part-time') ||
        (filters.jobType.contractual && job.type === 'Contractual');
      const matchesSalary =
        job.salary >= filters.salaryRange[0] &&
        job.salary <= filters.salaryRange[1];
      return matchesType && matchesSalary;
    });
  }, [filters, jobs]);

  return (
    <div className="dashboard-j archivo">
      
      
      
      {/* Right dashboard content */}
      <div className="flex flex-col flex-[1] gap-2 ">
      
        {/* Stats + Calendar */}
        <div className=" flex flex-[0.8] gap-5">
          <div className='flex flex-col gap-2'>
        <div className=" flex flex-[1]   justify-between gap-5">
     
          {/* Job stats box */}
          <div className="blueshade flex-[1] rounded-2xl p-6 w-full max-w-sm shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold"> Jobs Applied</p>
                <div className="flex items-center mt-1">
                  <h2 className="text-5xl font-semibold">+17</h2>
                  <div className='pl-2'>
                  <div className="flex items-center text-red-600 text-sm font-medium px-2 py-1 bg-white rounded-full ml-2 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 mr-1" style={{ transform: 'scaleY(-1)' }} />
                    31%
                  </div>


                    <p className="text-sm  mt-1 pl-2 text-gray-600 font-thin">vs last week</p></div>
                  
                </div>
                
              </div>
              <div className="">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-end mt-6 space-x-3 h-32">
              {Array.from({ length: 5 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col justify-end items-center space-y-1">
                  {Array.from({ length: 3 }).map((_, barIdx) => {
                    // Generate different heights for bars (10px to 40px)
                    const height = Math.floor(Math.random() * 30) + 10;

                    // Styles for each bar
                    let style = {
                      height: `${height}px`,
                      width: "35px",
                      borderRadius: "0.375rem",
                    };

                    // Add patterns to style
                    if (barIdx === 0) {
                      style = {
                        ...style,
                        backgroundImage: `
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%),
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%)
                        `,
                        backgroundPosition: "0px 0px, 5px 5px",
                        backgroundSize: "10px 10px",
                        backgroundColor: "transparent",
                        border: "",
                      };
                    } else if (barIdx === 1) {
                      style = {
                        ...style,
                        backgroundImage:
                          "linear-gradient(45deg, #54526e 25%, transparent 25%, transparent 50%, #54526e 50%, #54526e 75%, transparent 75%, transparent 100%)",
                        backgroundSize: "10px 10px",
                      };
                    } else {
                      style = {
                        ...style,
                        background: "linear-gradient(to top,rgb(122, 125, 130), #54526e)", // fallback
                      };
                    }

                    return <div key={barIdx} style={style}></div>;
                  })}
                </div>
              ))}
            </div>


          </div>
          {/* Job stats box */}
          <div className="pinkshade flex-[1] rounded-2xl p-6 w-full max-w-sm shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold">Interviews attended</p>
                <div className="flex items-center mt-1">
                  <h2 className="text-5xl font-semibold">+19</h2>
                  <div className='pl-2'>
                  <div className="flex items-center text-green-600 text-sm font-medium px-2 py-1 bg-white rounded-full ml-2 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    14%
                  </div>

                    <p className="text-sm  mt-1 pl-2 text-gray-600 font-thin">vs last week</p></div>
                  
                </div>
                
              </div>
              <div className="">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-messages-square-icon lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-end mt-6 space-x-3 h-32">
              {Array.from({ length: 5 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col justify-end items-center space-y-1">
                  {Array.from({ length: 3 }).map((_, barIdx) => {
                    // Generate different heights for bars (10px to 40px)
                    const height = Math.floor(Math.random() * 30) + 10;

                    // Styles for each bar
                    let style = {
                      height: `${height}px`,
                      width: "35px",
                      borderRadius: "0.375rem",
                    };

                    // Add patterns to style
                    if (barIdx === 0) {
                      style = {
                        ...style,
                        backgroundImage: `
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%),
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%)
                        `,
                        backgroundPosition: "0px 0px, 5px 5px",
                        backgroundSize: "10px 10px",
                        backgroundColor: "transparent",
                        border: "",
                      };
                    } else if (barIdx === 1) {
                      style = {
                        ...style,
                        backgroundImage:
                          "linear-gradient(45deg, #54526e 25%, transparent 25%, transparent 50%, #54526e 50%, #54526e 75%, transparent 75%, transparent 100%)",
                        backgroundSize: "10px 10px",
                      };
                    } else {
                      style = {
                        ...style,
                        background: "linear-gradient(to top,rgb(122, 125, 130), #54526e)", // fallback
                      };
                    }

                    return <div key={barIdx} style={style}></div>;
                  })}
                </div>
              ))}
            </div>


          </div>
          
          
          
          
        
                  
        
          
        </div>
        <div className=" flex flex-[1]   justify-between gap-5">
     
          {/* Job stats box */}
          <div className="pinkshade flex-[1] rounded-2xl p-6 w-full max-w-sm shadow-md">
            <div className="flex justify-between items-start">
              <div className=''>
                <p className="text-sm font-bold"> Interview Follow Ups</p>
                <div className="flex items-center mt-1">
                  <h2 className="text-5xl font-semibold">+17</h2>
                  <div className='pl-2'>
                  <div className="flex items-center text-red-600 text-sm font-medium px-2 py-1 bg-white rounded-full ml-2 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 mr-1" style={{ transform: 'scaleY(-1)' }} />
                    31%
                  </div>


                    <p className="text-sm  mt-1 pl-2 text-gray-600 font-thin">vs last week</p></div>
                  
                </div>
                
              </div>
              <div className="">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-end mt-6 space-x-3 h-32">
              {Array.from({ length: 5 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col justify-end items-center space-y-1">
                  {Array.from({ length: 3 }).map((_, barIdx) => {
                    // Generate different heights for bars (10px to 40px)
                    const height = Math.floor(Math.random() * 30) + 10;

                    // Styles for each bar
                    let style = {
                      height: `${height}px`,
                      width: "35px",
                      borderRadius: "0.375rem",
                    };

                    // Add patterns to style
                    if (barIdx === 0) {
                      style = {
                        ...style,
                        backgroundImage: `
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%),
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%)
                        `,
                        backgroundPosition: "0px 0px, 5px 5px",
                        backgroundSize: "10px 10px",
                        backgroundColor: "transparent",
                        border: "",
                      };
                    } else if (barIdx === 1) {
                      style = {
                        ...style,
                        backgroundImage:
                          "linear-gradient(45deg, #54526e 25%, transparent 25%, transparent 50%, #54526e 50%, #54526e 75%, transparent 75%, transparent 100%)",
                        backgroundSize: "10px 10px",
                      };
                    } else {
                      style = {
                        ...style,
                        background: "linear-gradient(to top,rgb(122, 125, 130), #54526e)", // fallback
                      };
                    }

                    return <div key={barIdx} style={style}></div>;
                  })}
                </div>
              ))}
            </div>


          </div>
          {/* Job stats box */}
          <div className="blueshade flex-[1] rounded-2xl p-6 w-full max-w-sm shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold">Interviews Pending</p>
                <div className="flex items-center mt-1">
                  <h2 className="text-5xl font-semibold">+19</h2>
                  <div className='pl-2'>
                  <div className="flex items-center text-green-600 text-sm font-medium px-2 py-1 bg-white rounded-full ml-2 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    14%
                  </div>

                    <p className="text-sm  mt-1 pl-2 text-gray-600 font-thin">vs last week</p></div>
                  
                </div>
                
              </div>
              <div className="">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-messages-square-icon lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-end mt-6 space-x-3 h-32">
              {Array.from({ length: 5 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col justify-end items-center space-y-1">
                  {Array.from({ length: 3 }).map((_, barIdx) => {
                    // Generate different heights for bars (10px to 40px)
                    const height = Math.floor(Math.random() * 30) + 10;

                    // Styles for each bar
                    let style = {
                      height: `${height}px`,
                      width: "35px",
                      borderRadius: "0.375rem",
                    };

                    // Add patterns to style
                    if (barIdx === 0) {
                      style = {
                        ...style,
                        backgroundImage: `
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%),
                          radial-gradient(rgb(84, 82, 110) 30%, transparent 30%)
                        `,
                        backgroundPosition: "0px 0px, 5px 5px",
                        backgroundSize: "10px 10px",
                        backgroundColor: "transparent",
                        border: "",
                      };
                    } else if (barIdx === 1) {
                      style = {
                        ...style,
                        backgroundImage:
                          "linear-gradient(45deg, #54526e 25%, transparent 25%, transparent 50%, #54526e 50%, #54526e 75%, transparent 75%, transparent 100%)",
                        backgroundSize: "10px 10px",
                      };
                    } else {
                      style = {
                        ...style,
                        background: "linear-gradient(to top,rgb(122, 125, 130), #54526e)", // fallback
                      };
                    }

                    return <div key={barIdx} style={style}></div>;
                  })}
                </div>
              ))}
            </div>


          </div>
          
          
          
          
        
                  
        
          
        </div>

        </div>

         
          <div className='flex flex-col gap-3 w-full'>
             {/* Calendar */}
             <div className="bg-white rounded-xl pl-10 pr-8 pt-10 pb-6 h-full flex flex-col">
  <div className="flex flex-row items-center justify-between">
    <p className="font-semibold mb-2">October 2026</p>
    <div className="flex space-x-2">
      <ArrowBackIos style={{ fontSize: '24px' }} />
      <ArrowForwardIos style={{ fontSize: '24px' }} />
    </div>
  </div>

  <div className="grid grid-cols-7 text-2sm pt-8 flex-grow">
    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
      <div key={day} className="font-semibold pb-6">{day}</div>
    ))}
    {Array(35).fill(null).map((_, i) => {
      const day = i - 1;
      return (
        <div
          key={i}
          className={`w-12 h-12 rounded-full flex justify-center items-center text-sm relative
            ${day === 14 ? 'purpleshade font-bold text-black' : ''}`}
        >
          {day > 0 && day <= 31 ? day : ''}
        </div>
      );
    })}
  </div>
</div>

              

                      </div>
          
        </div>
        <div className="w-full pt-2">
        <InterviewCard />
        </div>
        {/* Filtered Jobs List */}
        <div className=' flex-[0.8]  pt-5'>
          <Jobs title="Applied Jobs" itemsPerPage={5} applied={true} />
              </div>
     
      </div>
      <div className="flex-[0.3]">
      <Filters  />


      </div>
    </div>
  );
}
