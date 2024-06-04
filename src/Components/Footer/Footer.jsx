import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
      <footer className="footer bg-black footer-center p-10  text-gray-400  rounded">
  <nav className="grid grid-flow-col gap-4">
    <Link to={'/forum'} className="link link-hover">Blog</Link>
    <Link to={'/allClass'} className="link link-hover">Gym Class</Link>
    <Link to={'/allTrainer'} className="link link-hover">Gym Trainer</Link>
   
  </nav> 
  <nav>
    <div className="grid grid-flow-col text-3xl gap-4">
      <Link to={'https://www.facebook.com/profile.php?id=100080623072389'}><FaFacebook></FaFacebook></Link>
     <Link to={'https://www.instgram.com/'}> <FaInstagram></FaInstagram></Link>
      <Link to={'https://www.instgram.com/'}><FaLink></FaLink></Link>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;