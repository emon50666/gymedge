import callToAction from '../../../assets/calltoaction.png'
import { Link } from 'react-router-dom';

const AllTrainerDetails = () => {
    return (
        <div className='mt-10 mb-10'>
            
            <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: `url(${callToAction})` }}>
      <div className="bg-black bg-opacity-65 absolute inset-0"></div>
      <div className="container mx-auto px-6 md:flex items-center justify-between relative z-10">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold leading-9">
          Join our team of dedicated professionals and share your passion.
          </h2>
          <p className="mt-4 text-lg">
          you’ll have the opportunity to guide and motivate others on their health journey. Help shape lives, achieve your career goals, and make a lasting impact in the fitness community
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Link to={'/become-A-Trainer'} 
            className="bg-orange-500 underline text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-orange-700 transition duration-300"
          >
            Become a Trainer
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default AllTrainerDetails;