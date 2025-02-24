import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/contact";
import OurMenu from "../pages/ourMenu/ourMenu";
import OurShop from "../pages/ourShop/ourShop";
import Signup from "../pages/signup/Signup";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/dashboard/cart/Cart";
import UserProfile from "../Layout/UserProfile";
import ToDo from "../pages/dashboard/todo/todo";
    
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "ourMenu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "ourShop",
                element: <OurShop></OurShop>
            },
          
        ]
    },
    {
        path:"/dashboard",
        element: <DashBoard></DashBoard>,
        children: [

            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path:"userProfile",
                element:<UserProfile></UserProfile>
            },
            {
                path:"todo",
                element:<ToDo></ToDo>
            }
            
        ]
    }
]);
export default router;