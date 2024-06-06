
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRoll = () => {
    const {user,loading} = useAuth();
    const axiosPublic = useAxiosPublic();
   

    // fetch user info using logged in user email

    const {data:role = '',isLoading} = useQuery({
        queryKey: ['role'],
        enabled: !loading && !!user?.email,
        queryFn: async () =>{
            const {data} = await axiosPublic(`/users/${user?.email}`)
            return data.role

        }
    })


    return [role,isLoading];
   
};

export default useRoll;