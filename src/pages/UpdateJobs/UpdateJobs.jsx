import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const UpdateJobs = () => {
  const { jobId } = useParams();
  const auth = useContext(AuthContext);

  const [formData, setFormData] = useState({
    jobBanner: "",
    title: "",
    name: `${auth.user.displayName}`,
    jobType: "",
    description: "",
    salaryRange: "",
    applicants: 0,
    postingDate: "", // Input field for posting date
    deadline: "", // Input field for deadline
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch(
      ` https://job-findr-server-1z54vlrfa-thuabas-projects.vercel.app/jobs/${jobId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFormData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [jobId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      ` https://job-findr-server-1z54vlrfa-thuabas-projects.vercel.app/jobs/${jobId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast(data.message);

        // Redirect the user to the product details page after the update
        // window.location = `/my-jobs`;
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div>
      <PageTitle title="JobFindr | UpdateJobs"></PageTitle>

      <Navbar></Navbar>
      <div className="bg-white p-24">
        <h2 className="text-3xl font-extrabold">Update a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">Job Banner</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="jobBanner"
                  placeholder="Picture URL"
                  className="input input-bordered w-full"
                  required
                  value={formData.jobBanner}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered w-full"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">Job Type</span>
              </label>
              <label className="input-group">
                <select
                  name="jobType"
                  className="select select-primary w-full"
                  value={formData.jobType}
                  onChange={handleInputChange}
                >
                  <option disabled value="">
                    Job Type
                  </option>
                  <option value="Remote">Remote</option>
                  <option value="OnSite">OnSite</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="PartTime">PartTime</option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex items-center mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">Salary range</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="salaryRange"
                  placeholder="Salary range (e.g., $220 - $420)"
                  className="input input-bordered w-full"
                  required
                  value={formData.salaryRange}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">Posting Date</span>
              </label>
              <label className="input-group">
                <input
                  type="text" // Use a date input field
                  name="postingDate"
                  className="input input-bordered w-full"
                  required
                  value={formData.postingDate}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="md:flex items-center mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">
                  Applicants Number
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="applicants"
                  placeholder="Applicants Number"
                  className="input input-bordered w-full"
                  required
                  value={formData.applicants}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">
                  Application Deadline
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text" // Use a date input field
                  name="deadline"
                  className="input input-bordered w-full"
                  required
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#800000]">
                  Job Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Job Description"
                  className="input input-bordered w-full"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Jobs"
            className="btn bg-[#1967d2] hover:bg-[#1967d2] text-white btn-block"
            required
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateJobs;
