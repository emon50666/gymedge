import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";


const AllClassCard = ({ classAdd }) => {


  const axiosPublic = useAxiosPublic();
  const { data: applied = [] } = useQuery({
    queryKey: ['applied'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applied`)
      return res.data;
    }

  })

  console.log(applied);


  const { name, image, category, description } = classAdd ;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <div className="absolute ">
          <p className="relative bg-orange-500  p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
        </div>
        <figure><img src={image} className="w-full h-[200px] " /></figure>
        <div className="card-body">
          <h2 className="card-title">{name?.slice(0, 27) + '[..]'} </h2>
          <p className="text-sm text-gray-500"> {description?.slice(0, 120) + '...'} </p>
          <div className="card-actions justify-end">

          </div>
          {/* applied trainer  */}
          <div className="flex gap-2">
        {
         Array.isArray(applied) && applied.length > 0 && applied?.map(applie => <>
          <Link to={`/trainer-Details/${applie._id}/${applie.email}`}><img src={applie.image}  className="w-7 h-7 rounded-full" /></Link>
          </>)
        }
      </div>
        </div>
        


      
     
      </div>
    </div>
  );
};

export default AllClassCard;