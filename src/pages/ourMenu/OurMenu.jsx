import CoverImage from "../shared/CoverImage";
import SectionHeading from "../../Components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuCatagory from "./MenuCatagory";
import bannerImg from "../../assets/home/chef-service.jpg";
import coverImg from "../../assets/menu/banner3.jpg"


const OurMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(food=> food.category === "popular");
  const dessert = menu.filter(food=> food.category === "dessert");
  const pizza = menu.filter(food=> food.category === "pizza");
  const salad = menu.filter(food=> food.category === "salad");
  const soup = menu.filter(food=> food.category === "soup");

  console.log(popular, dessert, pizza, salad, soup)
  return (
    <div>
      <CoverImage
      title="Our Menu"
      bannerImg={coverImg}
      ></CoverImage>
      <SectionHeading
        title="Don't Miss"
        heading="Today's Offer"
      ></SectionHeading>
     <MenuCatagory
     item={popular}
     ></MenuCatagory>
     <MenuCatagory
     title="Dessert"
     bannerImg={bannerImg}
     item={dessert}
     ></MenuCatagory>
     <MenuCatagory
     title="Pizza"
     bannerImg={bannerImg}
     item={pizza}
     ></MenuCatagory>
     <MenuCatagory
     title="Salad"
     bannerImg={bannerImg}
     item={salad}
     ></MenuCatagory>
     <MenuCatagory
     title="Soup"
     bannerImg={bannerImg}
     item={soup}
     ></MenuCatagory>
    </div>
  );
};

export default OurMenu;