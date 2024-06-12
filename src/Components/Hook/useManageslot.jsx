import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";


const useManageslot = () => {


    const axiosPublic = useAxiosPublic()
    // applied data
    const {data: applied = []} =  useQuery({
        queryKey: ['applied'],
        queryFn: async ()=>{
    
            const res = await axiosPublic.get(`/applied`)
        
            
            console.log(res.data);
            return res.data
            
    
        }
    })
    // console.log(trainerEmail);
    
    // slot data 
    const {data: slots = [],refetch} =  useQuery({
        queryKey: ['slots',],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/slots`)
            console.log(res.data);
            return res.data
    
        }
    })

   return [applied,slots,refetch]
};

export default useManageslot;