import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSlot = () => {



    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: slots = [], isLoading, error } = useQuery({
        queryKey: ['slots'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/slots/${user.email}`);
            return res.data;
        }
    });

    console.log(slots);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Failed to load slots.</div>;
    }



    return [slots]
};

export default useSlot;