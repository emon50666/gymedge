import { BsWatch } from 'react-icons/bs';
import callToAction from '../../../assets/calltoaction.png'
import { Link, useLoaderData } from 'react-router-dom';
import { GiSkills } from 'react-icons/gi';

const AllTrainerDetails = () => {

    const applied = useLoaderData();

    const { name, image,time,skill } = applied;

    return (
        <div className='mt-10 mb-1'>
            <div className='container mx-auto'>
                <div className='md:flex'>
                    <div className='flex-1'>
                        <img src={image} className='md:w-[340px] rounded-lg ' />
                        <h2 className='font-bold text-4xl'>{name} </h2>
                        <div className="flex gap-10 mt-3 ">
                            <p className="font-semibold flex items-center gap-2"> <BsWatch className="text-orange-500"></BsWatch>   {time} </p>
                            <p className="font-semibold flex items-center gap-2"> <GiSkills className="text-orange-500"></GiSkills> Skill : {skill} </p>
                        </div>
                    </div>
                    <div className='flex-1 text-center'>
                      
                        <button type="submit" className="px-6 py-2 capitalize bg-orange-500 text-white rounded-md hover:bg-orange-700">
                        available slot
          </button>

                    </div>
                </div>
            </div>





            <section className="relative bg-cover mt-10 bg-center py-16" style={{ backgroundImage: `url(${callToAction})` }}>
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