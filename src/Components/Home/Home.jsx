import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import About from "../Pages/About/About";
import Feature from "../Pages/Feature/Feature";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>GYM EDGE || Home </title>
            </Helmet>
           
           <Banner></Banner>
           <Feature></Feature>
           <About></About>
        </div>
    );
};

export default Home;