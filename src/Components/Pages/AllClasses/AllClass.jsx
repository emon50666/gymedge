import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllClassCard from "./AllClassCard";


const AllClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: jymAddClass = []} = useQuery({
        queryKey: ['jymAllClass'],
        queryFn:async ()=>{
            const res = await axiosPublic.get('/jymAllClass')
            return res.data;
        }
      
    })

    console.log(jymAddClass);


    return (
        <div>
             <Helmet>
                <title>GYM EDGE || All Class </title>
            </Helmet>
            <div className="container mx-auto mt-10 mb-10 grid md:grid-cols-3 gap-5">
                {
                  Array.isArray(jymAddClass) && jymAddClass.length > 0 && jymAddClass.map(classAdd => <AllClassCard key={classAdd._id} classAdd={classAdd}></AllClassCard>)
                }
            </div>
            
        </div>
    );
};

export default AllClass;