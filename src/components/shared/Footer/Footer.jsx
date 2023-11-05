const Footer = () => {
  return (
    <div className="container pt-20 bg-[#f0f6fe]">
      <div className="w-[90%] mx-auto">
        <div className="flex mb-10 items-center justify-center gap-10 flex-col md:flex-row">
          <div className="">
            <p className="text-[25px]">
              Join our email subscription now to get updates <br /> on new jobs
              and notifications.
            </p>
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-[#1967d2] hover:bg-[#1967d2] text-white absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-10 mb-10">
          <footer className="footer grid grid-cols-1 md:grid-cols-4 gap-4">
            <nav className="col-span-1">
              <div className="flex items-center">
                <img
                  className="w-[10%]"
                  src="https://i.postimg.cc/TwSY3Z5R/tie.png"
                  alt=""
                />
                <h1 className="text-md md:text-3xl font-semibold text-[#1967d2]">
                  Job<span className="font-bold">Findr</span>
                </h1>
              </div>
              <div className="ml-2 text-[16px] space-y-2 mt-3">
                <p>
                  <span className="font-bold">Address : </span>65 Sunset CA
                  90026, USA
                </p>
                <p>
                  <span className="font-bold">Email : </span>example@max.com
                </p>
                <p>
                  <span className="font-bold">Call : </span>555-555-1234
                </p>
              </div>
            </nav>

            <nav className="col-span-1">
              <header className="text-[#1967d2] text-[20px] uppercase">
                For Candidate
                <hr className="border-2 border-black w-1/4 mt-3 mb-4" />
              </header>
              <a className="link link-hover">User Dashboard</a>
              <a className="link link-hover">Alert resume</a>
              <a className="link link-hover">Candidates</a>
              <a className="link link-hover">Blog List</a>
              <a className="link link-hover">Blog single</a>
            </nav>
            <nav className="col-span-1">
              <header className="text-[#1967d2] text-[20px] uppercase">
                For Employeers
                <hr className="border-2 border-black w-1/4 mt-3 mb-4" />
              </header>
              <a className="link link-hover">Post Jobs</a>
              <a className="link link-hover">Blog Grid</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs details</a>
              <a className="link link-hover">Jobs Listing</a>
            </nav>

            <nav className="col-span-1">
              <header className="text-[#1967d2] text-[20px] uppercase">
                Services
                <hr className="border-2 border-black w-1/4 mt-3 mb-4" />
              </header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>

            <nav className="col-span-1">
              <header className="text-[#1967d2] text-[20px] uppercase">
                Company
                <hr className="border-2 border-black w-1/4 mt-3 mb-4" />
              </header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
          </footer>
        </div>
        <hr />
        <div className="pt-10 pb-10">
          <footer className="footer items-center text-black">
            <aside className="">
              <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
