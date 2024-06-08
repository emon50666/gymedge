// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

import { useLoaderData } from "react-router-dom";


const ForumDetails = () => {
    // const axiosPublic = useAxiosPublic();
    // const {data:_id} = useQuery({
    //     queryKey: ['blogData'],
    //     queryFn:async ()=>{
    //     const res = await axiosPublic.get(`/blog/${_id}`)
    //         return res.data;
    //     }
    // })

   const blog = useLoaderData()
   const {title} =  blog;

    return (
        <div>
         <h2>{title} </h2>

          
        </div>
    );
};

export default ForumDetails;