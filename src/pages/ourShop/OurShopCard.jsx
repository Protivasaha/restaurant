import { useContext } from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import { AuthContext } from "../../providers/AuthProvider";

import usePublic from "../../hooks/usePublic";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const OurShopCard = ({food}) => {
  const [, refetch] = useCart()
  const axiosPublic = usePublic()
  const {user} = useContext(AuthContext)
    const {name, price, image, recipe, _id} = food;
    const handleSingleFood =() =>{
      const foodData = {
       email: user?.email, 
        foodId: _id,
      name,
      image,
      price,
      recipe
      }
     axiosPublic.post('/carts', foodData) 
     .then(res=>{
      if(res.data.acknowledged){
        Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} add to cart successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
      }
      console.log(res)
     })
    console.log(foodData) 
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="bg-rose-400 p-2 rounded text-white absolute right-0 top-0 mt-2 mr-2">${price}</p>
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={handleSingleFood}>
      <PrimaryButton
      title="Add to Cart"
      ></PrimaryButton>
      </button>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;