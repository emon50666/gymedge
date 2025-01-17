import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const AppliedTrainer = () => {
    const axiosPublic = useAxiosPublic()

    const {data:applied = []} = useQuery({
        queryKey: ['applied'],
        queryFn:async ()=>{
            const res = await axiosPublic.get(`/applied`)
           
            return res.data;
        }
        
    })
  
    return (
        <div>
          
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Skill</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        { 
                          applied &&  applied.map((applie,index) =>
                                <tr key={applie._id} className="">
                                <th> {index + 1} </th>
                                <td> {applie.name} </td>
                                <td> {applie?.skill + ' '} </td>
                                <td>
                                <Link to={`/trainer-Details/${applie._id}`}>
                                   <button className=" pl-3 pr-4 pt-1 pb-1 rounded-lg bg-orange-500 text-white"> Details </button>
                                   </Link>
                                </td>
                            </tr>
                             )
                        }

                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;