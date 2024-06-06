import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const AllTrainer = () => {
    const axiosPublic = useAxiosPublic()

    const {data:applieds = []} = useQuery({
        queryKey: ['applied'],
        queryFn:async ()=>{
            const res = await axiosPublic.get('/applied')
            return res.data;
        }
    })

    return (
        <div className="text-center mt-10 mb-10">
             <Helmet>
                <title>GYM EDGE || All Trainer </title>
            </Helmet>
            <h2 className="text-4xl"> all trainer page</h2>
            <Link to={'/become-A-Trainer'}><button  className="btn bg-orange-500 text-white"> Become A Trainer </button></Link>


            <div>
            {
                applieds.map(applie => <li key={applie._id}> {applie.name} {applie.age}  </li>)
            }
            </div>
        </div>
    );
};

export default AllTrainer;