import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const ForumDetails = () => {
    const axiosPublic = useAxiosPublic();
    const {data:_id} = useQuery({
        queryKey: ['blogData'],
        queryFn:async ()=>{
        const res = await axiosPublic.get(`/blog/${_id}`)
            return res.data;
        }
    })

    return (
        <div>
          blog details page
          
        </div>
    );
};

export default ForumDetails;