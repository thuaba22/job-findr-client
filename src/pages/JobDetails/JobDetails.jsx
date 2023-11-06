import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { AiFillEnvironment } from "react-icons/ai";
const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container w-[90%] mx-auto">
        <div className="mt-10 rounded-lg relative">
          <span className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 text-white py-1 px-2 rounded">
            {jobs.jobType}
          </span>
          <img className="w-full rounded-lg" src={jobs.jobBanner} alt="" />
          <button className="absolute top-0 right-0 mt-2 mr-2 bg-[#1967d2] text-white px-4 py-2 rounded">
            Apply Now
          </button>

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
