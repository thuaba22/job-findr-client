import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hover: { scale: 1.1 }, // Increase scale on hover
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto h-[600px] rounded-[80px] bg-[#f0f6fe]"
    >
      <div className="pt-[100px] px-4 md:px-[125px] pb-[50px] flex items-center justify-between flex-col md:flex-row">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-6xl">
            Your <span className="text-[#1967d2] underline">Dream Job</span> in
            one place
          </h2>
          <p>Find jobs that match your interests with us.</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Job Title, Keywords, Company"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-[#1967d2] text-white hover:bg-[#1967d2] absolute top-0 right-0 rounded-l-none">
              Find Job
            </button>
          </div>
          <p>
            <span className="font-bold">Popular Searches:</span> Developer ,
            Designer , Architect , Engineer , PHP , Banking , Ios , Freelance ,
            Writing , Accountancy...
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover" // Apply hover animation
            className="w-[32%] md:w-[64%]"
            src="https://i.postimg.cc/vHJTwdrs/r-img1.png"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
