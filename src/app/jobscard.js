export default function JobCard({
    jobs = [], // Default to an empty array if jobs is undefined
    setSelectedJob,
    setDetailsOpen,
    setModalPosition,
    setJobToApply,
    setIsModalOpen,
    title,
    defaultApplied = false,
  }) {
    // Check if jobs is an array before mapping
    if (!Array.isArray(jobs)) {
      return <div>Error: Invalid jobs data.</div>;
    }
  
    return (
      <div className="max-h-[530px] flex flex-col overflow-y-auto border border-gray-200 box-border">
        {/* Top Bar */}
        <div className="purpleshade imptext p-4 rounded-t-lg">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
  
        {/* Job Cards */}
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-start p-4 border border-gray-200 bg-white "
          >
            {/* Left side: Job Info */}
            <div className="flex gap-4 w-full">
              <div className="text-2xl imptext font-bold">{job.salary}</div>
              <div className="flex flex-col w-full">
                <div className="capitalize font-medium">{job.title}</div>
                <div className="text-sm textcolor">{`Nomad • ${job.location}`}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">{job.type}</span>
                  <span className="border-l h-4 mx-2 border-[var(--foreground)]"></span>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Right side: Buttons */}
            <div className="flex gap-2 ml-auto mt-auto">
              <button
                onClick={() => {
                  setSelectedJob(job);
                  setDetailsOpen(true);
                }}
                className="border px-4 py-1 font-semibold rounded-[15px] hover:bg-[var(--foreground)] hover:text-white"
              >
                Details
              </button>
  
              {job.applied || defaultApplied ? (
                <span className="border px-4 py-1 font-semibold rounded-[15px] bg-[var(--foreground)] opacity-70 text-white w-full inline-block text-center">
                  Applied
                </span>
              ) : (
                <button
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
                    setJobToApply(job);
                    setIsModalOpen(true);
                  }}
                  className="border px-4 py-1 font-semibold rounded-[15px] hover:bg-[var(--foreground)] hover:text-white w-full inline-block text-center"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  