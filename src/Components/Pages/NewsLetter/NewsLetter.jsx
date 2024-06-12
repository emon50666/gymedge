import toast, { Toaster } from 'react-hot-toast';
import news_letter from '../../../assets/newsletter.png';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const NewsLetter = () => {
    const axiosPublic = useAxiosPublic();

    const handelNessLetter = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        
        const userInfo = { name, email };

        try {
            const response = await axiosPublic.post('/news', userInfo);
            if (response.data.insertedId) {
                toast.success('Thanks For Subscribe');
            } else {
                toast.error(response.data.message || 'Subscription failed');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='mt-20 mb-20'>
            <div className='md:flex justify-center '>
                <div className='flex-1 bg-orange-500  px-5 pt-10 md:pt-32 '>
                    <h1 className='text-3xl font-black text-white px-5'>Subscribe Our News Letter</h1>
                    <p className="text-sm px-5 text-white mt-3">Stay updated with the latest fitness tips, exclusive offers, and inspirational stories from Gym Edge. Join our community today and receive personalized content directly to your inbox. Don’t miss out on our expert advice and special promotions! Sign up now to start your journey towards a healthier, more active lifestyle.</p>
                    <div className='mt-8 px-2 pb-10'>
                        <form onSubmit={handelNessLetter}>
                            <input type="text" name='name' placeholder="Name" className="input border-none input-bordered input-warning w-full max-w-xs" required />
                            <input type="email" name='email' placeholder="Email" className="input border-none mt-2 mb-2 input-bordered input-warning w-full max-w-xs" required />
                            <button className="btn btn-outline relative  lg:right-[99px]   font-bold text-base border-none bg-black text-white">Subscribe</button>
                        </form>
                    </div>
                    <Toaster />
                </div>
                <div className='flex-1'>
                    <img src={news_letter} alt="" className=' ' />
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default NewsLetter;
