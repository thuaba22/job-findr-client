import { RotatingLines } from "react-loader-spinner";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyJobs = () => {
  const [myJobItems, setMyJobItems] = useState([]);

  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch applied jobs data when the component loads
    fetch(`http://localhost:5000/jobs/byUser/${auth.user.displayName}`)
      .then((response) => response.json())
      .then((data) => {
        setMyJobItems(data);
        setLoading(false);
      });
  }, [auth.user.displayName]);

  const deleteCartItem = (jobId) => {
    console.log(`Deleting item with ID: ${jobId}`);

    fetch(
      `http://localhost:5000/jobs/byUser/${auth.user.displayName}/${jobId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire(
            "Deleted!",
            "Your item has been removed from the cart.",
            "success"
          );
          const updatedCart = myJobItems.filter((job) => job._id !== jobId);
          setMyJobItems(updatedCart);
        } else {
          console.error("Item not found in the cart.");
        }
      })
      .catch((error) => {
        console.error("Error deleting the item from the cart:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20 w-[90%] mx-auto mb-20">
        <div className="overflow-x-auto">
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
                {myJobItems.map((job) => (
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
                      <div>
                        <AiFillDelete onClick={() => deleteCartItem(job._id)} />
                      </div>
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
