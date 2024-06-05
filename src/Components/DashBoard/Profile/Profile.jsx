
import useAuth from "../../Hook/useAuth";


const Profile = () => {
    const {user} = useAuth();
    return (
        <div>
            <div className=" items-center mt-32 text-gray-700 shadow-lg pb-10 shadow-orange-200/40 border border-dashed pt-10 border-orange-300 rounded-md text-center">
                
                <img src={user?.photoURL} className="w-[100px] justify-center mx-auto mb-3 rounded-full " />
                <h1 className="font-black "> {user?.displayName} </h1>
                <h1 className="font-bold ">{user?.email} </h1>
               
                <h2 className="font-semibold "> {user?.metadata?.lastSignInTime} </h2>

            </div>
        </div>
    );
};

export default Profile;