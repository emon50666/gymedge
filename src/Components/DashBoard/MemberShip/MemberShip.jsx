import { Link } from "react-router-dom";


const MemberShip = () => {
    

   


    return (
        <div className="container mx-auto mt-10 mb-10">
        
      
         <div className="grid md:grid-cols-3 gap-5">
                <div className=" shadow-lg p-2 border rounded-lg border-orange-400 ">
                    <h2 className="font-bold text-2xl mb-2 ">  Basic MemberShip </h2>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to gym facilities during regular operating hours</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Use of cardio and strength training equipment</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to locker rooms and showers</p>
                    <Link to={'/checkout/basic'}><button   name="price" className="font-semibold btn bg-orange-500 text-white hover:bg-orange-600"> Join Now: <span className="font-bold text-lg"> $10</span> </button></Link>
                </div>
                <div className=" shadow-lg p-2 border rounded-lg border-orange-400 ">
                    <h2 className="font-bold text-2xl mb-2 ">  Standard Membership </h2>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to gym facilities during regular operating hours</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Use of cardio and strength training equipment</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to locker rooms and showers</p>
                    <Link to={'/checkout/standard'}>
                    <button name="price" className="font-semibold btn bg-orange-500 text-white hover:bg-orange-600"> Join Now: <span className="font-bold text-lg"> $50</span> </button></Link>
                </div>
                <div className=" shadow-lg p-2 border rounded-lg border-orange-400 ">
                    <h2 className="font-bold text-2xl mb-2 ">  Basic MemberShip </h2>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to gym facilities during regular operating hours</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Use of cardio and strength training equipment</p>
                    <p className="font-semibold text-base mb-2 border-b  p-1 border-black text-orange-500">Access to locker rooms and showers</p>
                   <Link to={'/checkout/premium'}> <button name="price" className="font-semibold btn bg-orange-500 text-white hover:bg-orange-600"> Join Now: <span className="font-bold text-lg"> $100</span> </button></Link>
                </div>
            </div>
         
         
            
        </div>
    );
};

export default MemberShip;