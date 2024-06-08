import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const NewsLetterEmail = () => {


    const axiosPublic = useAxiosPublic()

    const {data:news = []} = useQuery({
        queryKey: ['news'],
        queryFn:async ()=>{
            const res = await axiosPublic.get(`/news`)
           
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
                            <th>Email</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            news.map((news,index) =>
                                <tr key={news._id} className="">
                                <th> {index + 1} </th>
                                <td> {news.name} </td>
                                <td> {news?.email} </td>
                                <td> {news?._id} </td>

                                
                            </tr>
                             )
                        }

                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsLetterEmail;