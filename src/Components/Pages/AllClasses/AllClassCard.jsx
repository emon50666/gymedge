

const AllClassCard = ({classAdd}) => {
    const {name,image,category,description} = classAdd;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="absolute ">
            <p className="relative bg-orange-500  p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
  <figure><img src={image}  className="w-full h-[200px] " /></figure>
  <div className="card-body">
    <h2 className="card-title">{name?.slice(0,27) + '[..]'} </h2>
    <p className="text-sm text-gray-500"> {description?.slice(0,120)+ '...'} </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};

export default AllClassCard;