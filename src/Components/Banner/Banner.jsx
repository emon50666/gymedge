import { Link } from 'react-router-dom';
import banner_image from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${banner_image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="md:w-[700px] ">
      <h1 className="mb-7 text-5xl md:text-8xl capitalize font-bold"><span className='text-orange-500'>build your</span> strong body </h1>
      <p className="mb-7 text-2xl">Ready to change your <span className='text-orange-500'>physique</span>, but can't work out in the gym?</p>
      <Link to={'/allClass'}><button className="p-2 rounded-lg text-2xl text-orange-500 font-black border-2 border-orange-400 hover:bg-orange-500 hover:text-white">Join With Us</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;