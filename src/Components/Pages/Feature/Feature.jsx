
import { SiOpenaigym } from "react-icons/si";
import { RiGuideFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { MdOutlineFlightClass } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
const Feature = () => {
    return (
        <div>
             <h1 className=" text-3xl text-center mt-3 md:text-4xl font-bold">Our <span className='text-gray-500'>A</span>ll <span className='text-orange-500'>Features</span> </h1>
             <span className='border-b-4 text-center m-auto border-orange-500 w-[60px] mt-2 flex '></span>
            <div className="grid md:grid-cols-3 px-4 gap-3 mb-20 ">
            <div className='mt-7 shadow-lg p-5 rounded-lg  shadow-orange-300/25 border border-orange-500 '>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <SiOpenaigym className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></SiOpenaigym> Personaliz Workout </h2>
                <p className='mt-2 text-gray-500 text-base '>Get customized workout plans tailored to your fitness goals and level. Whether you aim to build muscle, lose weight, or improve endurance, our expert-designed plans will guide you every step of the way.</p>
            </div>
            <div className='mt-7 shadow-lg p-5 rounded-lg shadow-orange-300/25'>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <RiGuideFill className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></RiGuideFill> Nutrition Guidance</h2>
                <p className='mt-2 text-gray-500 text-base '>Achieve your fitness goals faster with personalized nutrition plans. Our in-house dietitians provide meal plans and dietary advice based on your preferences and nutritional needs.</p>
            </div>
            <div className='mt-7 shadow-lg p-5 rounded-lg shadow-orange-300/25 border border-orange-500 '>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <GiProgression className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></GiProgression> Progress Tracking</h2>
                <p className='mt-2 text-gray-500 text-base '>Monitor your fitness journey with our comprehensive progress tracking tools. Log your workouts, track your weight and measurements, and see your improvements over time.</p>
            </div>


            <div className='mt-7 shadow-lg p-5 rounded-lg  shadow-orange-300/25 border border-orange-500 '>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <MdOutlineFlightClass className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></MdOutlineFlightClass> Virtual Classes</h2>
                <p className='mt-2 text-gray-500 text-base '>Access a variety of live and on-demand virtual fitness classes from the comfort of your home. Choose from yoga, HIIT, strength training, and more, led by professional trainers.</p>
            </div>
            <div className='mt-7 shadow-lg p-5 rounded-lg shadow-orange-300/25'>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <FaHeadphonesSimple className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></FaHeadphonesSimple> Community Support</h2>
                <p className='mt-2 text-gray-500 text-base '>AJoin a vibrant community of fitness enthusiasts. Share your progress, exchange tips, and stay motivated with support from fellow members and trainers through our online forums and social media groups.</p>
            </div>
            <div className='mt-7 shadow-lg p-5 rounded-lg shadow-orange-300/25 border border-orange-500 '>
                <h2 className='font-semibold text-[20px]  flex items-center text-center  gap-3'> <GrUserExpert className='text-orange-500   text-5xl border border-orange-500 rounded-full p-2'></GrUserExpert>Expert Advice</h2>
                <p className='mt-2 text-gray-500 text-base '>Get access to expert advice from certified trainers and health professionals. Our team is available to answer your questions and provide insights to help you stay on track and achieve your fitness goals.</p>
            </div>

            </div>
        </div>
    );
};

export default Feature;