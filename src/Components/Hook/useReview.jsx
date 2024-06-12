import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useReview = () => {
    const axiosPublic = useAxiosPublic();

    // applied data
    const {data: reviews = []} =  useQuery({
        queryKey: ['reviews'],
        queryFn: async ()=>{
    
            const res = await axiosPublic.get(`/reviews`)
            console.log(res.data);
            return res.data
            
    
        }
    })

    return [reviews]
};

export default useReview;