import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { MdLogout } from "react-icons/md";
import useAuth from "../Hook/useAuth";
import {   FaHome, } from "react-icons/fa";



import useRoll from "../Hook/useRoll";
import TrainerMenu from "./SideBarMenu/TrainerMenu";
import AdminMenu from "./SideBarMenu/AdminMenu";
import MemberMenu from "./SideBarMenu/MemberMenu";


const SideBar = () => {


  const [role,isLoading]  =  useRoll();

  console.log('admin', role,isLoading);

    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    const {logOut} = useAuth()

    return (
        <div className="mb-10"> 
           <button
        title="Side navigation"
        type="button"
        className={`visible fixed right-0 border border-dashed  top-0   z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r  border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
       <Link to={'/'}> <img src={logo} alt="" className="mt-2 ml-6" /> </Link>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto "
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link to={'/'} className="flex items-center gap-3 rounded p-3 ml-4 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaHome className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaHome>  Home </Link>
              </li>
             
             
            

              {/* trainer dashboard route */}
           
              {role === 'admin' && <AdminMenu></AdminMenu>}
              {role === 'trainer' && <TrainerMenu></TrainerMenu>}
              {role === 'member' && <MemberMenu></MemberMenu>}
          



              
              
            
            </ul>
          </div>
          
        </nav>
        <div className="mb-5 ml-6  ">
      
       <Link to={'/login'}> <button onClick={()=>logOut()} className="flex items-center gap-2"> <MdLogout></MdLogout> Log Out</button></Link>
        </div>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
        </div>
    );
};

export default SideBar;