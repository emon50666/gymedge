import { Navigate } from "react-router-dom";
import useRoll from "../Hook/useRoll";

;

const AdminRoute = ({children}) => {
    const [role,isLoading] = useRoll()
    if(isLoading) return(
         <div className=" mt-32 text-center "><span className="loading  loading-spinner text-error"></span> </div>
    )
  if(role === 'admin') return children;
  
  return <Navigate to='/' state={{from:location}}replace></Navigate>
};

export default AdminRoute;