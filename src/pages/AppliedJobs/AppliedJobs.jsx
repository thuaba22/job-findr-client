import { useState, useEffect } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const auth = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch applied jobs data when the component loads
    fetch(`http://localhost:5000/jobs/appliedJobs/${auth.user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setAppliedJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      });
  }, [auth.user.email]);

  useEffect(() => {
    // Filter jobs based on the search query
    const filtered = appliedJobs.filter((job) =>
      job.jobs.jobType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, appliedJobs]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20 w-[90%] mx-auto mb-20">
        <div className="overflow-x-auto">
          <input
            type="text"
            placeholder="Search by Job Type"
            value={searchQuery}
            onChange={handleSearch}
            className="input input-bordered input-info ml-2 mt-2 w-full max-w-xs"
          />
          {loading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          ) : (
            <table className="table mt-10">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Job Type</th>
                  <th>Job Posting Date</th>
                  <th>Application Deadline</th>
                  <th>Salary Range</th>
                  <th>Provided CV:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.jobs._id}>
                    <td>{job.jobs.name}</td>
                    <td>{job.jobs.title}</td>
                    <td>{job.jobs.jobType}</td>
                    <td>{job.jobs.postingDate}</td>
                    <td>{job.jobs.deadline}</td>
                    <td>{job.jobs.salaryRange}</td>
                    <td>{job.resumeLink}</td>
                    <td>
                      <Link to={`/jobDetails/${job.jobs._id}`}>
                        <button className="btn bg-[#1967d2] text-white hover:bg-[#1967d2] btn-xs">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppliedJobs;
