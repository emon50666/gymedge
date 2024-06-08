import { BsWatch } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";


const AllTrainerCard = ({ applie }) => {
    const { name, image, time, skill,age,day,_id} = applie;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-full h-[300px] " /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl"> {name} </h2>
                    <div className="flex justify-around ">
                        <p className="font-semibold flex items-center gap-2"> <BsWatch className="text-orange-500"></BsWatch>  Hour: {time} </p>
                        <p className="font-semibold flex items-center gap-2"> <GiSkills className="text-orange-500"></GiSkills> Skill : {skill} </p>
                    </div>
                    <div className="flex justify-around  text-start">
                        <p className="font-semibold flex items-center gap-2"> <BsWatch className="text-orange-500"></BsWatch>  Age: {age} </p>
                        <p className="font-semibold flex items-center gap-2"> <GiSkills className="text-orange-500"></GiSkills>  Day : {day} </p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/trainer-Details/${_id}`}>
                        <button className="btn bg-orange-500 underline text-white font-bold w-full mt-3 text-lg hover:bg-orange-600"> Know More </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTrainerCard;