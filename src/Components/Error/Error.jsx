import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center mt-32 space-y-6">
            <h1 className="text-3xl font-black">Opps Page Not Found !</h1>
           <Link to={'/'}> <button className="btn mt-5 bg-orange-500 text-white font-bold "> Back To Home </button></Link>
        </div>
    );
};

export default Error;