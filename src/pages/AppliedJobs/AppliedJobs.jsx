import { useState, useEffect } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { FaDownload } from "react-icons/fa";
import { usePDF } from "react-to-pdf";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const auth = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  useEffect(() => {
    // Make an API request to fetch applied jobs data when the component loads
    fetch(
      ` https://job-findr-server-1z54vlrfa-thuabas-projects.vercel.app/jobs/appliedJobs/${auth.user.email}`
    )
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
      <PageTitle title="JobFindr | AppliedJobs"></PageTitle>

      <Navbar />
      <div className="mt-20 w-[90%] mx-auto mb-20">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search by Job Type"
              value={searchQuery}
              onChange={handleSearch}
              className="input input-bordered input-info ml-2 mt-2 mb-4 w-full max-w-xs"
            />
            <FaDownload
              onClick={() => toPDF()}
              className="text-3xl text-[#1967d2]"
            ></FaDownload>
          </div>
          {loading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          ) : (
            <table ref={targetRef} className="table mt-10">
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
