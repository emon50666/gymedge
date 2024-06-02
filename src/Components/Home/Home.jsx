import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import About from "../Pages/About/About";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>GYM EDGE || Home </title>
            </Helmet>
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;