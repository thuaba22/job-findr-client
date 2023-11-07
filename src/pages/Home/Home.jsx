import JobByCategory from "../../components/JobByCategory/JobByCategory";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "./Banner";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import OurBlog from "../../components/OurBlog/OurBlog";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <WorkProcess></WorkProcess>
      <OurBlog></OurBlog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
