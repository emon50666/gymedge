import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBookedATrainer = () => {
    const axiosPublic = useAxiosPublic()
    // applied data
    const {data: payments = []} =  useQuery({
        queryKey: ['payments'],
        queryFn: async ()=>{
    
            const res = await axiosPublic.get(`/payments`)
            console.log(res.data);
            return res.data
            
    
        }
    })
    return [payments]
    
};

export default useBookedATrainer;