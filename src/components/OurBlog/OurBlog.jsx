const OurBlog = () => {
  return (
    <div className="bg-[#0C023E] container lg:h-[750px] mb-20 pt-24 pb-10 md:pb-20 lg:pb-0">
      <p className="text-center font-semibold text-[18px] mb-6 text-white">
        Our Blogs
      </p>
      <h2 className="text-center text-white font-bold text-5xl">
        Latest Article
      </h2>
      {/* blog card */}
      <div className="grid w-[90%] text-white mx-auto mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-2">
        {/* first one */}
        <div>
          <div className="card h-[250px] relative rounded-lg card-compact bg-base-100">
            <figure>
              <img
                className="h-full absolute bottom-6 w-[90%] rounded-lg"
                src="https://i.postimg.cc/4ys0W8mS/bg10.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
          <p className="text-[16px] mt-6 mb-4 font-semibold">
            March 05, 2023 By <span className="text-white">Mark Petter</span>
          </p>
          <p className="text-[18px] font-semibold">
            How to convince recruiters.
          </p>
        </div>
        {/* second  */}
        <div>
          <div className="card h-[250px] relative rounded-lg card-compact bg-base-100">
            <figure>
              <img
                className="h-full absolute bottom-6 w-[90%] rounded-lg"
                src="https://i.postimg.cc/9zH4770V/bg11.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
          <p className="text-[16px] mt-6 mb-4 font-semibold">
            March 05, 2023 By <span className="text-white">David Wish</span>
          </p>
          <p className="text-[18px] font-semibold">
            How to convince recruiters.
          </p>
        </div>
        {/* third */}
        <div>
          <div className="card h-[250px] relative rounded-lg card-compact bg-base-100">
            <figure>
              <img
                className="h-full absolute bottom-6 w-[90%] rounded-lg"
                src="https://i.postimg.cc/wB5pk4VS/bg12.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
          <p className="text-[16px] mt-6 mb-4 font-semibold">
            March 05, 2023 By <span className="text-white">Mike Doe</span>
          </p>
          <p className="text-[18px] text-white font-semibold">
            How to convince recruiters.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default OurBlog;
