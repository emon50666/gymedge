import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Register = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { createUser,updateUserProfile,loading,setLoading } = useAuth();


    const handelRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.files[0];
        const password = form.password.value;
        console.log(name,email,image,password)

        const formData = new FormData();
        formData.append('image', image)

        try {
            setLoading(true)
        //  upload image and get api
        const {data} = await axios.post(  `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
            formData
        )
        console.log(data.data.display_url );

        // user register
        const result = await createUser(email,password)
        const user =  result.user
        console.log(user)



        // update profile
       await updateUserProfile(name,data.data.display_url)
       const userInfo = {
        displayName: name,
        email: user.email,
        }
       await axiosPublic.post('/users', userInfo)
        
            toast.success('account create successfully')
            navigate('/')

        } catch (error) {
            console.error( error);
            toast.error(error.message)
           
        }
       
    };

    return (
        <div>
            <Helmet>
                <title>GYM EDGE || Register</title>
            </Helmet>
            <div className="bg-black/50 pt-10 pb-10">
                <div className="flex flex-col max-w-md p-6 m-auto bg-white/55 justify-center shadow-2xl shadow-white/40 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Create An Account</h1>
                        <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                    </div>
                    <form onSubmit={handelRegister} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-semibold text-md">Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-semibold text-md">Email</label>
                                <input type="email" name="email" id="email" placeholder="demo@gmail.com" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50" required />
                            </div>
                            <div>
                                <label htmlFor="file" className="block mb-2 font-semibold text-md">Photo</label>
                                <input type="file" name="image" id="image" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 font-semibold text-md ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button
                                disabled={loading}
                                type="submit" className="w-full btn btn-primary bg-orange-500 px-8 py-3 rounded-md border-none text-white font-bold">{loading ? <ImSpinner9 className="animate-spin "></ImSpinner9>: 'Register Now'} </button>
                            </div>
                            <p className="px-6 text-sm text-center font-bold">You have an account?
                                <span className="ml-2 text-violet-600 hover:underline">
                                    <Link to={'/login'}>Log In</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;
