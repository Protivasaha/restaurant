import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Menu from "./Menu";
import Reviews from "./Reviews";

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
      <SectionHeading 
    title="Check it out"
    heading="FROM OUR MENU"
    >

      </SectionHeading>
      <Menu></Menu>
      <SectionHeading
      title="---What Our Clients Say---"
      heading="TESTIMONIALS"
      ></SectionHeading>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;