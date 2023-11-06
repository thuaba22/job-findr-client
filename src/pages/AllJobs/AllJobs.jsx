import { useState, useEffect } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from API
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data); // Initially, set filteredJobs to all jobs
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    // Filter jobs based on the search query
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-20 w-[90%] mx-auto mb-20">
        <div className="overflow-x-auto">
          <input
            type="text"
            placeholder="Search by Job Title"
            value={searchQuery}
            onChange={handleSearch}
            className="input input-bordered input-info w-full max-w-xs"
          />
          <table className="table mt-10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Title</th>
                <th>Job Posting Date</th>
                <th>Application Deadline</th>
                <th>Salary Range</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.name}</td>
                  <td>{job.title}</td>
                  <td>{job.postingDate}</td>
                  <td>{job.deadline}</td>
                  <td>{job.salaryRange}</td>
                  <td>
                    <Link to={`/jobDetails/${job._id}`}>
                      <button className="btn bg-[#1967d2] text-white hover:bg-[#1967d2] btn-xs">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllJobs;
