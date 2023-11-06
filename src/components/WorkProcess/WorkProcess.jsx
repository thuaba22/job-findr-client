const WorkProcess = () => {
  return (
    <div className="bg-[#f0f6fe] container md:h-[600px] mb-20 pt-24 pb-24">
      <p className="text-center font-semibold text-[18px] mb-6 text-[#1967d2]">
        Working Process
      </p>
      <h2 className="text-center text-black font-bold text-5xl">
        How It Works
      </h2>
      <div className="grid mt-8 w-[90%] mx-auto grid-cols-1 md:grid-cols-3 gap-2">
        <div className="card p-4 bg-[#fff]">
          <div className="flex justify-between items-center">
            <h1 className="text-[75px] text-[#3898e2] font-bold">01</h1>
            <div className="bg-[#3898e2] p-4 rounded-lg">
              <img src="https://i.postimg.cc/zvmTMx1j/icon1.png" alt="" />
            </div>
          </div>
          <p className="text-[18px] font-semibold text-black">
            Register Your Account
          </p>
          <p>
            You need to create an account to find the best and preferred job.
          </p>
        </div>
        <div className="card p-4 bg-[#fff]">
          <div className="flex justify-between items-center">
            <h1 className="text-[75px] text-[#bc84ca] font-bold">02</h1>
            <div className="bg-[#bc84ca] p-4 rounded-lg">
              <img src="https://i.postimg.cc/9F0J7nQ4/icon2.png" alt="" />
            </div>
          </div>
          <p className="text-[18px] font-semibold text-black">
            Register Your Account
          </p>
          <p>
            You need to create an account to find the best and preferred job.
          </p>
        </div>
        <div className="card p-4 bg-[#fff]">
          <div className="flex justify-between items-center">
            <h1 className="text-[75px] text-[#56d8b1] font-bold">03</h1>
            <div className="bg-[#56d8b1] p-4 rounded-lg">
              <img src="https://i.postimg.cc/Bv4Y7c0H/icon3.png" alt="" />
            </div>
          </div>
          <p className="text-[18px] font-semibold text-black">
            Register Your Account
          </p>
          <p>
            You need to create an account to find the best and preferred job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
