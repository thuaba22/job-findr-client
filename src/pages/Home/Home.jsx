import { ToastContainer } from "react-toastify";
import JobByCategory from "../../components/JobByCategory/JobByCategory";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "./Banner";
import "react-toastify/dist/ReactToastify.css";
import WorkProcess from "../../components/WorkProcess/WorkProcess";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <WorkProcess></WorkProcess>
      <Footer></Footer>
    </div>
  );
};

export default Home;
