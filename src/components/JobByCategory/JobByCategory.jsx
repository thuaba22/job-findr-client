import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JobByCategory = () => {
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      if (activeTab === "All Jobs") {
        setFilteredJobs(jobs);
      } else {
        const filtered = jobs.filter((job) => job.jobType === activeTab);
        setFilteredJobs(filtered);
      }
    }
  }, [activeTab, jobs]);

  return (
    <div className="mt-10 mb-10">
      <h2 className="text-5xl text-center text-[#1967d2]">
        Choose Your Desired Category
      </h2>
      <hr className="border-2 border-black w-1/4 mx-auto mt-3 mb-4" />
      <div className="flex flex-col md:flex-row justify-center mt-10 mb-5 gap-5">
        <button
          className={`btn bg-[#1967d2] hover:bg-[#1967d2] text-white ${
            activeTab === "All Jobs" && "bg-[#111] text-white"
          }`}
          onClick={() => handleTabClick("All Jobs")}
        >
          All Jobs
        </button>
        <button
          className={`btn bg-[#1967d2] hover:bg-[#1967d2] text-white ${
            activeTab === "OnSite" && "bg-[#111] text-white"
          }`}
          onClick={() => handleTabClick("OnSite")}
        >
          OnSite
        </button>
        <button
          className={`btn bg-[#1967d2] hover:bg-[#1967d2] text-white ${
            activeTab === "Remote" && "bg-[#111] text-white"
          }`}
          onClick={() => handleTabClick("Remote")}
        >
          Remote
        </button>
        <button
          className={`btn bg-[#1967d2] hover:bg-[#1967d2] text-white ${
            activeTab === "PartTime" && "bg-[#111] text-white"
          }`}
          onClick={() => handleTabClick("PartTime")}
        >
          PartTime
        </button>
        <button
          className={`btn bg-[#1967d2] hover:bg-[#1967d2] text-white ${
            activeTab === "Hybrid" && "bg-[#111] text-white"
          }`}
          onClick={() => handleTabClick("Hybrid")}
        >
          Hybrid
        </button>
      </div>
      <div className="container mt-10 w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.jobId}
            className="card bg-[#f0f6fe] border"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#17171d] text-[18px]">
                  {job.title}
                </h2>
                <div className="badge badge-accent badge-outline">
                  {job.jobType}
                </div>
              </div>
              <p className="text-[#3c3c3c] text-[15px]">
                Posted by: {job.name}
              </p>
              <p className="text-[#3c3c3c] text-[15px]">
                Posting Date: {job.postingDate}
              </p>
              <p className="text-[#3c3c3c] text-[15px]">
                Application Deadline: {job.deadline}
              </p>
              <p className="text-[#3c3c3c] text-[15px]">
                Salary Range: {job.salaryRange}
              </p>
              <p className="text-[#3c3c3c] text-[15px]">
                Job Applicants: {job.applicants}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#1967d2] hover:bg-[#1967d2] text-white">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobByCategory;
