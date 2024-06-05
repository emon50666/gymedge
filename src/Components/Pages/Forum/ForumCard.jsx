import { useState } from "react";

import { Link } from "react-router-dom";
import { TiArrowUpThick } from "react-icons/ti";
const ForumCard = ({blog}) => {
    const {title,image,_id} = blog;
    const [count, setCount] = useState(0);
    const [isUpvoted, setIsUpvoted] = useState(false);

const handelCountVote = () =>{
    if (isUpvoted) {
        setCount(count - 1);
      } else {
        setCount(count + 1);
      }
      setIsUpvoted(!isUpvoted);

}
    

    return (
        <div>
           <div>
            <img src={image} alt="" className="w-full mb-5 h-[200px] rounded-lg hover:scale-110 transition duration-500 cursor-pointer " />
            <Link to={`/blog-details/${_id}`}><h2 className="font-bold underline hover:text-orange-400 mb-5 text-2xl">{title.slice(0,20) + '[..]'} </h2></Link>
           </div>
      <div>
      <button onClick={handelCountVote} className="flex items-center gap-1 btn border text-orange-500 bg-white font-bold text-base border-orange-500">
       <TiArrowUpThick></TiArrowUpThick>  Upvote {count}
      </button>
      </div>
        </div>
    );
};

export default ForumCard;