import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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




    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


















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


            <div>
            <BarChart
      width={500}
      height={300}
      data={news}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey={news} fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {news.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 60]} />
        ))}
      </Bar>
   
    </BarChart>

            </div>
        </div>
    );
};

export default Blance;
