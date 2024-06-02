import { FaRunning } from 'react-icons/fa';
import about_image from '../../../assets/about.png'
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";

const About = () => {
    return (
        <div>
            <div className="md:flex gap-5 mb-10 mt-10">
            <div className='bg-orange-500 rounded-r-lg md:w-1/2'>
              <div>
              <img src={about_image} alt="" className='px-5' />
              </div>
                </div>
                <div className='md:ml-10 px-2 md:w-1/2'>
                    <h1 className=" text-3xl mt-3 md:text-4xl font-bold">ABOUT <span className='text-orange-500'>G</span>YM <span className='text-gray-500'>EDGE</span> </h1>
                    <span className='border-b-4 border-orange-500 w-[60px] mt-2 flex '></span>
                    <div className='mt-7'>
                        <h2 className='font-semibold text-2xl flex items-center gap-3'> <GiWeightLiftingUp className='text-orange-500  text-5xl border border-orange-500 rounded-full p-2'></GiWeightLiftingUp> Weight Lifting</h2>
                        <p className='mt-2 text-gray-500 text-base '>Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates.</p>
                    </div>
                    <div className='mt-7'>
                        <h2 className='font-semibold text-2xl flex items-center gap-3'> <FaRunning className='text-orange-500 text-5xl border border-orange-500 rounded-full p-2 '></FaRunning>Running</h2>
                        <p className='mt-2 text-gray-500 text-base '>Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet…</p>
                    </div>
                    <div className='mt-7'>
                        <h2 className='font-semibold text-2xl flex items-center gap-3'> <MdOutlineSportsGymnastics className='text-orange-500  text-5xl border border-orange-500 rounded-full p-2'></MdOutlineSportsGymnastics> Youga</h2>
                        <p className='mt-2 text-gray-500 text-base  '>Yoga, is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace and salvation.</p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default About;