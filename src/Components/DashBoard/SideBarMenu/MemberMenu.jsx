
import { Link } from "react-router-dom";
import { IoIosGitPullRequest } from 'react-icons/io';


const MemberMenu = () => {
    return (
        <div className="ml-4">
            
          

              <li className="px-3">
                <Link to={'addBlog'} className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 " >
                  <IoIosGitPullRequest  className="className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm></IoIosGitPullRequest>  Request a Trainer </Link>
              </li>
        </div>
    );
};

export default MemberMenu;