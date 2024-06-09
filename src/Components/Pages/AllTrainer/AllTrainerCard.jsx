import { BsWatch } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoMan } from "react-icons/io5";
import { Link } from "react-router-dom";
import { WiDayLightWind } from "react-icons/wi";
import PropTypes from 'prop-types';

const AllTrainerCard = ({ applie }) => {
    console.log(applie);
    const { name, image, time, skill = [], age, day, _id ,email} = applie || {};
    console.log(skill);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Trainer" className="w-full h-[300px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl"> {name} </h2>
                    <div className="flex justify-around">
                        <p className="font-semibold flex items-center gap-2"> <BsWatch className="text-orange-500" /> {time} </p>
                        <p className="font-semibold flex items-center gap-2"> <GiSkills className="text-orange-500" /> Skill: <ul>{skill + ' '}</ul> </p>
                        
                    </div>
                    <div className="flex justify-around text-start">
                        <p className="font-semibold flex items-center gap-2"> <IoMan className="text-orange-500" /> Age: {age} </p>
                        <p className="font-semibold flex items-center gap-2"> <WiDayLightWind className="text-orange-500" /> Day: {day + ' '} </p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/trainer-Details/${_id}/${email}`}>
                            <button className="btn bg-orange-500 underline text-white font-bold w-full mt-3 text-lg hover:bg-orange-600"> Know More </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllTrainerCard.propTypes = {
    applie: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        skill: PropTypes.arrayOf(PropTypes.string),
        age: PropTypes.number.isRequired,
        day: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default AllTrainerCard;
