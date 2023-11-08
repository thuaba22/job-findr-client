import { RotatingLines } from "react-loader-spinner";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const MyJobs = () => {
  const [myAddedJobs, setMyAddedJobs] = useState([]);
  const auth = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch applied jobs data when the component loads
    fetch(`http://localhost:5000/jobs/byUser/${auth.user.displayName}`)
      .then((response) => response.json())
      .then((data) => {
        setMyAddedJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      });
  }, [auth.user.displayName]);

  useEffect(() => {
    // Filter jobs based on the search query
    const filtered = myAddedJobs.filter((job) =>
      job.jobType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, myAddedJobs]);

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
                  {/* <th>Provided CV:</th> */}
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job._id}>
                    <td>{job.name}</td>
                    <td>{job.title}</td>
                    <td>{job.jobType}</td>
                    <td>{job.postingDate}</td>
                    <td>{job.deadline}</td>
                    <td>{job.salaryRange}</td>
                    {/* <td>{job.resumeLink}</td> */}
                    <td>
                      <Link to={`/jobDetails/${job._id}`}>
                        <button className="btn bg-[#1967d2] text-white hover:bg-[#1967d2] btn-xs">
                          Details
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/updtateJobs/${job._id}`}>
                        <AiFillEdit />
                      </Link>
                    </td>
                    <td>
                      <AiFillDelete />
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

export default MyJobs;
