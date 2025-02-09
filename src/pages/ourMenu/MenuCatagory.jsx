
import PrimaryButton from "../../Components/PrimaryButton";
import CoverImage from "../shared/CoverImage";
import MenuItem from "../shared/MenuItem";

const MenuCatagory = ({item, title, bannerImg}) => {
  return (
    <div>
    <div>
    {
      title && <CoverImage
      title={title}
      bannerImg={bannerImg}
      ></CoverImage>
    }
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
        {
      item.map(food=><MenuItem
      key={food._id}
      item={food}
      ></MenuItem>)
        }
    </div>
    <PrimaryButton
     title="Order Your Favourite Food"
    ></PrimaryButton>
    </div>
  );
};

export default MenuCatagory;