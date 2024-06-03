import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

import logo from '../../assets/logo.png'

const Navbar = () => {
  const {user,logOut} = useAuth();
  return (
    
    <div className="">
  
      <div className="navbar bg-base-100 container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm gap-7 font-bold text-base dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <Link to={'/'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">Home</li></Link>
          <Link to={'/allTrainer'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">All Trainer</li></Link>
          <Link to={'/allClass'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">All Classes</li></Link>
          <Link to={'/forum'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150 ">Community Forums</li></Link>
          </ul>
        </div>
       <Link><img src={logo} alt="" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-7 font-bold text-base  menu-horizontal px-1">
         
          <Link to={'/'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">Home</li></Link>
          <Link to={'/allTrainer'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">All Trainer</li></Link>
          <Link to={'/allClass'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150">All Classes</li></Link>
          <Link to={'/forum'}><li className="hover:text-orange-500 hover:border-t hover:border-orange-500 delay-150 ">Community Forums</li></Link>
    
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
          {
            user && user.photoURL ? (
              <img referrerPolicy="no-referrer" src={user.photoURL}  />
            ) : (
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfhfRCjTlu-H5p0BfBD_GI6QopG5FIKVPYg&s" alt="Default Profile" />
            )
           }
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          
          <Link to={'/dashBoard'}> <li className="font-semibold  mt-2 mb-5">Dashboard</li> </Link>
          <Link to={'/login'}> <button onClick={()=> logOut()}  className="  w-full mr-4 pt-2 pb-2 pl-6 pr-6 bg-orange-400 rounded-full text-white font-bold hover:bg-white hover:text-orange-500 delay-200 hover:border hover:border-orange-400 ">LogOut</button></Link>
        </ul>
      </div> : <>
      
        
         <Link to={'/register'}><button className="pt-2 pb-2 pl-6 pr-6 bg-orange-400 rounded-full text-white font-bold hover:bg-white hover:text-orange-500 delay-200 hover:border hover:border-orange-400">Sign Up</button></Link>
    
       
      </>
      }
      </div>
         </div>
    
    
    </div>
  );
};

export default Navbar;