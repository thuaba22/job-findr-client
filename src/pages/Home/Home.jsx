import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h2 className="text-3xl">This is home</h2>
      <Footer></Footer>
    </div>
  );
};

export default Home;
