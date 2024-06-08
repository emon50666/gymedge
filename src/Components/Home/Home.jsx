import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import About from "../Pages/About/About";
import Feature from "../Pages/Feature/Feature";
import Testomonial from "../Pages/Testomonial/Testomonial";
import Team from "../Pages/Team/Team";
import NewsLetter from "../Pages/NewsLetter/NewsLetter";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>GYM EDGE || Home </title>
            </Helmet>
           
           <Banner></Banner>
           <Feature></Feature>
           <About></About>
           <Testomonial></Testomonial>
           <NewsLetter></NewsLetter>
           <Team></Team>
          
        </div>
    );
};

export default Home;