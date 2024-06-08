import { FaBlogger, FaMoneyBill, FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoPencilOutline } from "react-icons/io5";
import { MdClass } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
             <li className="px-3">
                <Link to={'addNewClass'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <MdClass className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></MdClass>  Add New Class </Link>
              </li>
              <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaBlogger className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaBlogger>  Add New Forums </Link>
              </li>
              <li className="px-3">
                <Link to={'news-letter'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <SlEnvolopeLetter className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></SlEnvolopeLetter>  All Newsletter subscribers </Link>
              </li>
              <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaUsersGear className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaUsersGear>  All Trainers </Link>
              </li>

              <li className="px-3">
                <Link to={'applied-Trainer'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <IoPencilOutline  className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></IoPencilOutline>  Applied Trainers </Link>
              </li>

              <li className="px-3">
                <Link to={'manage-user-role'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaUsers  className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaUsers>  Manage User Role </Link>
              </li>
              <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaMoneyBill  className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaMoneyBill>  Balance </Link>
              </li>
        </div>
    );
};

export default AdminMenu;