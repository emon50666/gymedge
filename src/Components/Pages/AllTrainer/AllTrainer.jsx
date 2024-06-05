import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllTrainer = () => {

    

    return (
        <div className="text-center mt-10 mb-10">
             <Helmet>
                <title>GYM EDGE || All Trainer </title>
            </Helmet>
            <h2 className="text-4xl"> all trainer page</h2>
            <Link to={'/become-A-Trainer'}><button  className="btn bg-orange-500 text-white"> Become A Trainer </button></Link>

        </div>
    );
};

export default AllTrainer;