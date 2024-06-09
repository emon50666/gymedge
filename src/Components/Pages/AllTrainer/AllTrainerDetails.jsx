import { BsWatch } from 'react-icons/bs';
import callToAction from '../../../assets/calltoaction.png';
import { Link, useLoaderData } from 'react-router-dom';
import { GiSkills } from 'react-icons/gi';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hook/useAuth';

const AllTrainerDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    
    const { data: slots = [], isLoading, error } = useQuery({
        queryKey: ['slots', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/slots/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email  // Ensure the query runs only if email is available
    });

    const applied = useLoaderData();
    const { name, image, time, skill } = applied;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Failed to load slots.</div>;
    }

    return (
        <div className='mt-10 mb-1'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-2 mb-4'>
                        <img src={image} className='w-full md:w-[340px] rounded-lg' alt="Trainer" />
                        <h2 className='font-semibold text-3xl'>{name}</h2>
                        <div className="flex gap-10 mt-3">
                            <p className="font-semibold flex items-center gap-2">
                                <BsWatch className="text-orange-500" /> {time}
                            </p>
                            <p className="font-semibold flex items-center gap-2">
                                <GiSkills className="text-orange-500" /> Skill: {skill}
                            </p>
                        </div>
                    </div>
                    <div className=' px-2 '>
                        <h1 className='text-3xl font-semibold mb-4'>Available slots</h1>
                        <div className='pt-5 md:pt-0'>
                            {
                                Array.isArray(slots) && slots.length > 0 ? (
                                    slots.map((slot, index) => (
                                        <button className='btn mr-2' key={index}> {slot.name} - {slot.time} </button>
                                    ))
                                ) : (
                                    <p>No slots available</p>
                                )
                            }
                        </div>
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
                            You’ll have the opportunity to guide and motivate others on their health journey. Help shape lives, achieve your career goals, and make a lasting impact in the fitness community.
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <Link to={'/become-A-Trainer'} className="bg-orange-500 underline text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-orange-700 transition duration-300">
                            Become a Trainer
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllTrainerDetails;
