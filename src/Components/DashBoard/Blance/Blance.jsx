import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Blance = () => {
    const axiosPublic = useAxiosPublic();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payments');
            return res.data;
        }
    });

    const total = payments.reduce((sum, item) => sum + item.price, 0);




    const {data:news = []} = useQuery({
        queryKey: ['news'],
        queryFn:async ()=>{
            const res = await axiosPublic.get(`/news`)
           
            return res.data;
        }
        
    })


    return (
        <div>
            <h2 className="font-bold text-3xl  mt-3">Total Balance: ${total}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>


                        {payments && payments.map((payment, index) => (
                            <tr key={payment._id} >
                                <th> {index + 1} </th>
                                <td> {payment.price} </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Blance;
