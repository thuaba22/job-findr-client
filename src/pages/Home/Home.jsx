import JobByCategory from "../../components/JobByCategory/JobByCategory";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "./Banner";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import OurBlog from "../../components/OurBlog/OurBlog";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle title="JobFindr | Home"></PageTitle>
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
