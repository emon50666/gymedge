
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const usePaymentInfo = () => {

   
   

   



const axiosPublic = useAxiosPublic();

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
const {data: slots = []} =  useQuery({
    queryKey: ['slots'],
    queryFn: async ()=>{
        const res = await axiosPublic.get(`/slots`)
        console.log(res.data);
        return res.data

    }
})
  



    return [applied,slots]
};

export default usePaymentInfo;