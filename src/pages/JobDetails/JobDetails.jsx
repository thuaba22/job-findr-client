import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { AiFillEnvironment } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { useEffect } from "react";

const JobDetails = () => {
  const jobs = useLoaderData();
  const auth = useContext(AuthContext);
  const [isApplied, setIsApplied] = useState(false);
  const [formData, setFormData] = useState({
    resumeLink: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const appliedKey = `applied_${jobs._id}_${auth.user.email}`;
  useEffect(() => {
    // Check if the user has applied when the component mounts
    const appliedStatus = localStorage.getItem(appliedKey) === "true";
    setIsApplied(appliedStatus);
  }, [appliedKey]);

  const applyJobs = async (event) => {
    if (!auth.user) {
      toast.warning("Log in to apply to the jobs");
      return;
    }

    console.log("Applied Jobs:", {
      user: auth.user.email,
      jobs: jobs,
    });

    const currentTime = Date.now();
    const deadlineTime = new Date(jobs.deadline).getTime();

    if (currentTime > deadlineTime) {
      toast.error("The application deadline has passed.");
      return;
    }

    // Check if the logged-in user is the job owner (employer)
    if (auth.user.email === jobs.email) {
      toast.warning("Employers cannot apply for their own jobs.");
      return;
    }

    event.preventDefault();
    const { resumeLink } = formData;

    console.log("Form Data:", formData);

    fetch("http://localhost:5000/jobs/appliedJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: auth.user.email,
        name: auth.user.displayName,
        // jobId: jobs._id,
        jobs,
        resumeLink,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setIsApplied(true);
          localStorage.setItem(appliedKey, "true");
          toast("You've successfully applied to the job");
          // Show a success toast message
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container w-[90%] mx-auto">
        <div className="mt-10 rounded-lg relative">
          <span className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 text-white py-1 px-2 rounded">
            {jobs.jobType}
          </span>
          <img className="w-full rounded-lg" src={jobs.jobBanner} alt="" />
          {isApplied ? (
            <button className="absolute top-0 right-0 mt-2 mr-2 bg-gray-400 text-white px-4 py-2 rounded">
              Applied
            </button>
          ) : (
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-[#1967d2] text-white px-4 py-2 rounded"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply Now
            </button>
          )}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Do you want to apply for the job?
              </h3>
              <p className="py-4">Upload Your Resume</p>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={auth.user.displayName}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={auth.user.email}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Resume link</span>
                </label>
                <input
                  type="text"
                  placeholder="Resume link"
                  onChange={handleInputChange}
                  name="resumeLink"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    onClick={applyJobs}
                    className="btn bg-[#1967d2] text-white hover:bg-[#1967d2]"
                  >
                    Submit
                  </button>
                  <button className="btn ml-2">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <img
            className="absolute w-[-75%] rounded-lg shadow transform -translate-x-1/2 -bottom-16 left-1/2"
            src={jobs.companyLogo}
            alt=""
          />
        </div>
      </div>
      <div className="text-center space-y-4 mt-24">
        <h2 className="text-3xl font-semibold">{jobs.title}</h2>

        <p className="flex justify-center items-center gap-2">
          <AiFillEnvironment className="text-[#1967d2]" /> 1363-1385 Sunset Blvd
          Los Angeles, CA 90026, USA
        </p>
        <p>
          {jobs.salaryRange} / <span className="text-[#1967d2]">Month</span>
        </p>
        <p>
          Application ends:{" "}
          <span className="text-[#1967d2]">{jobs.deadline}</span>
        </p>
        <p>
          Number of applicants:{" "}
          <span className="text-[#1967d2]">{jobs.applicants}</span>
        </p>
      </div>
      <div className="container w-[90%] mt-20 p-10 space-y-4 text-white rounded-lg bg-[#0C023E] mx-auto h-[300]">
        <h1 className="text-3xl">Company Description:</h1>
        <p>{jobs.description}</p>
        <p>Posted By: {jobs.name}</p>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default JobDetails;
