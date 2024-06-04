import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ForumCard from "./ForumCard";

const Forum = () => {
    const axiosPublic = useAxiosPublic();
    const {data: blogData = []} = useQuery({
        queryKey: ['blogData'],
        queryFn:async ()=>{
            const res = await axiosPublic.get('/blog')
            return res.data;
        }
      
    })

    console.log(blogData);
    return (
        <div>
             <Helmet>
                <title>GYM EDGE || Forum </title>
            </Helmet>
            <div className="container mx-auto mt-10 mb-10 grid md:grid-cols-3 gap-5">
                {
                    blogData.slice(0,6).map(blog => <ForumCard key={blog._id} blog={blog}></ForumCard>)
                }
            </div>
        </div>
    );
};

export default Forum;