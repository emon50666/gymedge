
import {  useParams } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MemberShip from "../MemberShip/MemberShip";


// import useSlot from "../../Hook/useSlot";


const TrainerBooking = () => {

    const [trainerEmail,setTrainerEmail] = useState(null);
   


const {id} = useParams()
console.log(id);
   


const axiosPublic = useAxiosPublic();

// applied data
const {data: applied = []} =  useQuery({
    queryKey: ['applied'],
    queryFn: async ()=>{

        const res = await axiosPublic.get(`/applied/${id}`)
        setTrainerEmail(res?.data?.email)
        
        console.log(res.data);
        return res.data
        

    }
})
// console.log(trainerEmail);

// slot data 
const {data: slots = []} =  useQuery({
    queryKey: ['slots',trainerEmail],
    queryFn: async ()=>{
        const res = await axiosPublic.get(`/slots/${trainerEmail}`)
        // console.log(res.data);
        return res.data

    }
})
  



// jym Class data
// const {data: jymAllClass = []} =  useQuery({
//     queryKey: ['jymAllClass'],
//     queryFn: async ()=>{
//         const res = await axiosPublic.get(`/jymAllClass/`)
//         console.log(res.data);
//         return res.data

//     }
// })

 

    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="text-center shadow-lg">
                <h2 className="font-bold text-3xl"> {applied.name} </h2>
               <div>
                {
                  slots &&  slots.map(slot => <>
                    <h2 className="font-semibold text-2xl mt-2 pb-2 text-orange-500 capitalize"> {slot.name} - {slot.time} </h2>
                    <h2 className="font-semibold pb-3">{slot.class}</h2>
                    </>)
                }
               </div>

               {/* class data map */}
               <div>
                
               </div>

             
                
            </div>
            <MemberShip></MemberShip>

        </div>
    );
};

export default TrainerBooking;
