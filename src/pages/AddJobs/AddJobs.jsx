import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const AddJobs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#FFFFCC] text-[#800000] p-24">
        <h2 className="text-3xl font-extrabold">Add a Job</h2>
        <form>
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
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">Job Type</span>
              </label>
              <label className="input-group">
                <select className="select select-primary w-full">
                  <option disabled selected>
                    Job Type
                  </option>
                  <option>Remote</option>
                  <option>OnSite</option>
                  <option>Hybrid</option>
                  <option>PartTime</option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
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
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[#800000]">Rating</span>
              </label>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  value="1"
                  // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="2"
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="3"
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="4"
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="5"
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#800000]">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn bg-[#800] hover:bg-[#800000] text-white btn-block"
            required
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddJobs;
