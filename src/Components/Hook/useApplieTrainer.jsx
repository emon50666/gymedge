import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useApplieTrainer = () => {

    const axiosPublic = useAxiosPublic()

    const {data: applied = []} =  useQuery({
        queryKey: ['applied'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/applied')
            return res.data

        }
    })

    return [applied]
};

export default useApplieTrainer;