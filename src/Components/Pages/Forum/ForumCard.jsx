import { Link } from "react-router-dom";

const ForumCard = ({blog}) => {
    const {title,image,_id} = blog;
    return (
        <div>
           <div>
            <img src={image} alt="" className="w-full mb-5 h-[200px] rounded-lg hover:scale-110 transition duration-500 cursor-pointer " />
            <Link to={`/blog-details/${_id}`}><h2 className="font-bold underline hover:text-orange-400 mb-5 text-2xl">{title.slice(0,45) + '[..]'} </h2></Link>
           </div>
        </div>
    );
};

export default ForumCard;