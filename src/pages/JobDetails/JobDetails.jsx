import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <Navbar></Navbar>
      <h3 className="text-3xl text-center">{jobs.title}</h3>
    </div>
  );
};

export default JobDetails;
