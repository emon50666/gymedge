import { FaBlogger } from "react-icons/fa";
import { FcManager } from "react-icons/fc";

import { MdClass } from "react-icons/md";
import { Link } from "react-router-dom";

const TrainerMenu = () => {
    return (
        <div>
          
            <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                    <FcManager className="className=" flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FcManager>  Manage Slots </Link>
            </li>
            <li className="px-3">
                <Link to={'slot'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  " >
                  <MdClass  className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></MdClass>  Add New Slot </Link>
              </li>
              <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <FaBlogger className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></FaBlogger>  Add New Forums </Link>
              </li>
             

        </div>
    );
};

export default TrainerMenu;