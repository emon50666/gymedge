import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

import useAxiosPublic from "../../Hook/useAxiosPublic";
import AllTrainerCard from "./AllTrainerCard";


const AllTrainer = () => {
    const axiosPublic = useAxiosPublic()

    const {data:applieds = []} = useQuery({
        queryKey: ['applied'],
        queryFn:async ()=>{
            const res = await axiosPublic.get('/applied')
            return res.data;
        }
    })
    console.log(applieds);

    return (
        <div className="text-center mt-10 mb-10">
             <Helmet>
                <title>GYM EDGE || All Trainer </title>
            </Helmet>
            


            <div className=" container mx-auto grid md:grid-cols-3 gap-5">
            {
                 Array.isArray(applieds) && applieds.length > 0 &&
                applieds?.map(applie => <AllTrainerCard key={applie._id} applie={applie}></AllTrainerCard>)
            }
            </div>
        </div>
    );
};

export default AllTrainer;