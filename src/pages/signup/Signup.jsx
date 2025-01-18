import { Link } from "react-router-dom";
import login from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"
import "../login/Login"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex flex-row-reverse bg-img">
      <div>
<img src={login} alt="" />
      </div>
      <div>
        <h1 className="text-center text-xl mt-10 font-bold">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label htmlFor="" className="text-xl">Name</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="name" {...register("name", { required: true, minLength: 1 , maxLength: 20 })} />
        {
            errors.name && <p>Name min length 1 charecter</p>
        }
        {
            errors.name && <p>Name max length 20 charecter</p>
        }
      </div>
      <div>
        <label htmlFor="" className="text-xl">Email</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="" className="text-xl">Password</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("password")} />
      </div>
      

     

      <input className=" flex justify-center btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value="SignUp" />
    </form>
    <p className="mt-5">Already Registerd <Link className="text-orange-400" to="/login">Go to in Login</Link></p>
    <p className="text-center mt-5 text-xl">or Signin with</p>
    <div className="flex gap-5 mt-5 justify-center">
    
      <button>
      <CiFacebook className="text-3xl"/>
      </button>
      <button>
      <FaGoogle className="text-2xl"/>
      </button>
      <button>
      <IoLogoGithub className="text-2xl"/>
      </button>
    </div>
      </div>
    </div>
  );
};

export default Signup;