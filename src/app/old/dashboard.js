
'use client';

import { useState } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';



export default function Home() {
  const [scoutingTags, setScoutingTags] = useState([
    'Web developers',
    'MERN developers',
    'AI expert',
    'Web Designer',
  ]);

  const candidates = [
    { name: 'Aisha Ishaq', role: 'MERN developer', experience: '3 yrs', status: 'first round', date: '01/03/2026' },
    { name: 'Abdullah Shafique', role: 'AI specialist', experience: '1 yrs', status: 'first HR interview', date: '21/04/2026' },
    { name: 'Aaron Smith', role: 'Software engineer', experience: '2 yrs', status: '1st technical interview', date: '02/02/2026' },
    { name: 'Anora Jills', role: 'social media manager', experience: '4 yrs', status: 'Final round', date: '11/03/2026' },
  ];

  return (
    <div className='tab-dashboard archivo'>
      <div><h1 className="text-2xl font-bold mb-6">Dashboard</h1></div>
      
      
      <div className="basis-[400px] tab-dashboard-2 pl-15 pr-15 h-[10px]">

      
        <div className="bio  custom-shadow">
          <div className="flex justify-between items-start gap=4 ">
            <div>
              <h2 className="text-xl font-semibold mb-2">DevX</h2>
              <p className="text-sm text-gray-700 pt-3">
                We're a forward-thinking tech company revolutionizing how talent meets opportunity.
                Our team builds smart, AI-driven recruitment solutions that streamline hiring and uncover
                the best-fit candidates faster. We value innovation, collaboration, and people who are
                excited to shape the future of work.
              </p>
            </div>
            <IconButton aria-label="edit" size="small" >
              <EditIcon sx={{ fontSize: 20, color: 'black' }} />
            </IconButton>
          </div>

          {/* Scouting Tags */}
          <div className='flex flex-col justify-end flex-grow mt-4 '>
          <h2 className='imp-text bottomline '>Scouting</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {scoutingTags.map((tag, index) => (
              <span
                key={index}
                className=" text-black px-3 py-1 rounded-full border border-black text-sm"
              >
                {tag}
              </span>
            ))}
            <button className="text-black px-3 py-1 rounded-full border border-black text-sm">+</button>
          </div>
          </div>
        </div>
       
        {/* Stats */}
        <div className=" flex flex-col gap-10 flex-[0.2] ">
          <div className="bg-[#799795] p-4 rounded-xl shadow text-left flex-[1] custom-shadow">
            <p className="text-7xl font-bold text-white">13</p>
            <p className="text-2xl mt-1 pl-4 font-bold">Jobs</p>
            <p className="text-2xl mt-1 pl-4 font-bold">Posted</p>
          </div>
          <div className="bg-[#799795] p-4 rounded-xl shadow text-left flex-[1] custom-shadow">
            <p className="text-7xl  font-bold text-white">08</p>
            <p className="text-2xl mt-1 pl-3 font-bold">Talent</p>
            <p className="text-2xl mt-1 pl-3 font-bold">Hired</p>
          </div>
          </div>
          
        {/*Calendar*/}
          <div className="bg-white p-4 rounded-xl flex-[.4] pl-15 pr-15 pt-10">
          <div className="flex flex-row items-center justify-between w-full ">
            <p className="font-semibold mb-2 pt-4">October 2026</p>
            
            <div  className='pr-7'>
              <span className="text-black text-xs ">
              <ArrowBackIos style={{ fontSize: '16px' }}  />
              </span>
              <span className="text-black text-xs ">
                <ArrowForwardIos  style={{ fontSize: '16px' }} />
              </span>
            </div>
          </div>

            <div className="grid grid-cols-7 text-sm pt-6 ">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                <div key={day} className="font-semibold items-center pb-6">{day}</div>
              ))}
              {Array(35).fill(null).map((_, i) => {
                const day = i - 1;
                return (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-sm relative
                      ${day === 14 ? 'bg-[#D3E0DE] font-bold text-black' : ''}`}
                  >
                    {day > 0 && day <= 31 ? day : ''}
                    {day === 14 && (
                      <div className="absolute w-full h-full rounded-full bg-[#D3E0DE] -z-10"></div>
                    )}
                  </div>
                );
                
              })}
            </div>
            <div className="mt-3 text-xs text-gray-700 flex items-center">
              <div className="flex flex-row gap-5 items-center">
                <VideocamOutlinedIcon sx={{ fontSize: 40, color: 'black' }} />
                <div>
                  <p className="font-bold">Zoom meeting</p>
                  <p>Interview with ABC</p>
                </div>
              </div>

              <div className="flex-grow" /> 

              <div className="font-bold mr-6 ">
                <p>21:00</p>
              </div>
            </div>


          </div>
        
      </div>
      
      
      {/* Candidate Table */}
      <div className="mt-8 pl-15 pr-15">
        <table className=" table-auto border-separate w-full text-left border-spacing-y-2  ">
        <thead>
          <tr className="text-sm text-black bg-transparent shadow-none">
            <th className="border-b border-black font-medium py-2"></th>
            <th className="border-b border-black font-medium py-2">Name</th>
            <th className="border-b border-black font-medium py-2">Role</th>
            <th className="border-b border-black font-medium py-2">Experience</th>
            <th className="border-b border-black font-medium py-2">Application Status</th>
            <th className="border-b border-black font-medium py-2">Date</th>
          </tr>
        </thead>

          <tbody>
            {candidates.map((c, index) => (
              <tr key={index} className="text-sm  text-(--var-(blackshade))">
                <td><input type="checkbox" className="ml-2" /></td>
                <td className="py-2 px-4">{c.name}</td>
                <td>{c.role}</td>
                <td>{c.experience}</td>
                <td>{c.status}</td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
