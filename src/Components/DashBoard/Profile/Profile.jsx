
import useAuth from "../../Hook/useAuth";
import useRoll from "../../Hook/useRoll";


const Profile = () => {
    const {user,loading} = useAuth();
    const [role,isLoading] = useRoll()

    if(isLoading || loading){
       return(
      <div className="text-center">
          <span className="loading min-h-screen  justify-center loading-spinner text-warning"></span>
      </div>
       )
    }

    return (
        <div>
            <div className=" items-center mt-32 text-gray-700 shadow-lg pb-10 shadow-orange-200/40 border border-dashed pt-10 border-orange-300 rounded-md text-center">
                
                <img src={user?.photoURL} className="w-[100px] justify-center mx-auto mb-3 rounded-full " />
                <button className="btn bg-orange-500 capitalize text-white font-black mt-3 mb-3 hover:bg-orange-600"> {role} </button>
                <h1 className="font-black "> {user?.displayName} </h1>
                <h1 className="font-bold ">{user?.email} </h1>
               
                <h2 className="font-semibold "> {user?.metadata?.lastSignInTime} </h2>

            </div>
        </div>
    );
};

export default Profile;