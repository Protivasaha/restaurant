import { Link } from "react-router-dom";
import login from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"
import "../login/Login"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import logo from "../../assets/logo.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)
  return (
    <div className="bg-img h-screen">
      <Link to="/" >
      <img className="w-16 ml-24" src={logo} alt="navlogo"/>
      </Link>
      <div className="flex flex-row-reverse justify-center items-center  gap-40">
<img src={login} alt="" />
      
      <div>
        <h1 className="text-center text-xl mt-10 font-bold">SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
      <div>
        <label htmlFor="" className="text-xl">Name</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="name" {...register("name", { required: true, minLength: 1 , maxLength: 20,  })} />
      
        </div>
        {
          errors.name && <p className="text-rose-400">Name min length 1 charecter and Name max length 20 charecter</p>
        }     
      <div>
        <label htmlFor="" className="text-xl">Email</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="email" {...register("email")} />
      </div>
      </div>
      <div>
        <label htmlFor="" className="text-xl">Password</label>
        <br/>
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("password", { required: true,
         minLength: {
          value: 6,
          message: "your password must be six charecter"},
         maxLength: {
          value: 20,
          messege: "your password must be 20 character"
         },
         pattern:
         {

         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
         message: " It must be contain at least one uppercase letter, one lowercase letter, one number, and one special character", }})} />
        {
          errors.password && <p className="text-rose-400">{errors.password.message}</p>
        }
      </div>
      <input className=" flex justify-center btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value="SignUp" />
    </form>
    <p className="mt-5">Already Registerd <Link className="text-orange-400" to="/login">Go to Login</Link></p>
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
    </div>
  );
};

export default Signup;