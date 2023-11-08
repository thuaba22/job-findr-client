import { useState } from "react";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddJobs = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const [formData, setFormData] = useState({
    jobBanner: "",
    title: "",
    name: `${auth.user.displayName}`,
    jobType: "",
    description: "",
    salaryRange: "",
    applicants: 0,
    postingDate: new Date(),
    deadline: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Jobs Added Successfully!"); // Show a success toast message
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white p-24">
        <h2 className="text-3xl font-extrabold">Add a Job</h2>
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
                  // defaultValue={auth.user.displayName}
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
                  placeholder="Salary range(ex. $220 - $420)"
                  className="input input-bordered w-full"
                  required
                  value={formData.salaryRange}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">
                  Job Posting Date
                </span>
              </label>
              <label className="input-group">
                <DatePicker
                  selected={formData.postingDate}
                  className="border-2"
                  showIcon
                  // dateFormat="Pp"
                  onChange={(date) => handleDateChange(date, "postingDate")}
                  isClearable
                  placeholderText="I have been cleared!"
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
                <DatePicker
                  selected={formData.deadline}
                  className="border-2"
                  showIcon
                  // dateFormat="Pp"
                  onChange={(date) => handleDateChange(date, "deadline")}
                  isClearable
                  placeholderText="I have been cleared!"
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
            value="Add Jobs"
            className="btn bg-[#1967d2] hover:bg-[#1967d2] text-white btn-block"
            required
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddJobs;
