import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import Catagory from "./Catagory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading 
    title="From 11:00am to 10:00pm"
    heading="ORDER ONLINE"
    >

      </SectionHeading>
      <Catagory></Catagory>
    </div>
  );
};

export default Home;