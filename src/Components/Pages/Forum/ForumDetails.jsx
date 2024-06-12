// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

import { useLoaderData } from "react-router-dom";


const ForumDetails = () => {
   

   const blog = useLoaderData()
   const {title} =  blog;

    return (
        <div>
         <h2>{title} </h2>

          
        </div>
    );
};

export default ForumDetails;