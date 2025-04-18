// app/page.js or pages/index.js
'use client'
import { useState } from 'react';
import Filters from './filters';
import DetailsPanel from './details';
import SearchIcon from '@mui/icons-material/Search';
import ApplyModal from './ApplyModal';
import { padding } from '@mui/system';
import Jobs from '../jobstable';



export default function JobBoardPage() {
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [applicationDetails, setApplicationDetails] = useState({
    date: '',
    time: '',
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [filters, setFilters] = useState({
    jobType: {
      fullTime: true,
      partTime: false,
      contractual: false,
    },
    salaryRange: [0, 500],
  });

 
  const [jobToApply, setJobToApply] = useState(null); // job clicked for modal

  const handleReset = () => {
    setFilters({
      jobType: {
        fullTime: true,
        partTime: false,
        contractual: false,
      },
      salaryRange: [0, 500],
    });
  };

  const handleApply = () => {
    console.log('Filters applied:', filters);
  };

  const handleChange = (e) => {
    setApplicationDetails({
      ...applicationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const jobApply = () => {
    console.log('Applying to job with details:', applicationDetails);
    if (!jobToApply) return;
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobToApply.id ? { ...job, applied: true } : job
      )
    );
    setIsModalOpen(false);
    setJobToApply(null);
  };

  return (
    <div className="p-1 tab-jobs bg-[var(--background)]">
      <h1 className="text-2xl font-bold mb-1">Explore Jobs</h1>
      <div className="tab-jobs-main   pt-4">
        <div className="flex-[0.7]">
          {/* Controls */}
          <div className="flex items-center gap-4 mb-6 gap-4 bottomline">
            <div className="pl-1">
              <h1 className="imp-text">Job Board</h1>
            </div>
            <div className="flex flex-row gap-2 ml-auto items-right">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border px-2 py-1 rounded-[15px] "
              >
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
              </select>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border py-1 rounded-[15px] w-full pl-1"
                />
                <SearchIcon
                  sx={{
                    fontSize: 18,
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--foreground)',
                  }}
                />
              </div>
            </div>
          </div>

          <Jobs title="Active Jobs" itemsPerPage={20} />
        

        </div>
        <div className='pt-17 flex-[0.3]'><Filters
          filters={filters}
          setFilters={setFilters}
          onReset={handleReset}
          onApply={handleApply}
          
        /></div>
        
      </div>

      <DetailsPanel
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        job={selectedJob}
      />
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={jobApply}
        applicationDetails={applicationDetails}
        handleChange={handleChange}
        position={modalPosition}
      />
    </div>
  );
}
