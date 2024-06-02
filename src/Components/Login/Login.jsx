import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
const {signIn,error,setError,googleLogin} = useAuth();
const navigate = useNavigate()
    const handelLogin = event =>{
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo);
        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            toast.success('Login Successfully')
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })

    }

  

    return (
        <div>
            <Helmet>
                <title>GYM EDGE || Login </title>
            </Helmet>
              <div>
            <div className="bg-black/50 pt-10 pb-10">
            <div className="flex flex-col max-w-md p-6 m-auto   bg-white/55 justify-center shadow-2xl shadow-white/40 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text--400 text-center">
		<h1 className="my-3 text-4xl font-bold">Login</h1>
		<p className="text-sm dark:text-gray-600">Login in to access your account</p>
	</div>
	<form onSubmit={handelLogin} className="space-y-12">
		<div className="space-y-4">
			
            <div>
				<label htmlFor="email" className="block mb-2 font-semibold  text-md">Email </label>
				<input type="email" name="email" id="email" placeholder="demo@gmail.com" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50 " />
			</div>
           
			<div>
            <label htmlFor="password" className="block mb-2 font-semibold   text-md">Password </label>
				<input type="password" name="password" id="password" placeholder="12345***" className="w-full px-3 py-2 border rounded-md  bg-gray-200 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
        
          <p className="mb-0 text-center">  Login Social Account ?</p>
          <button onClick={()=>googleLogin()} className="flex justify-center mx-auto items-center">
            <FcGoogle className="text-3xl"></FcGoogle>
            </button>
          
            
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full  btn btn-primary bg-orange-500 px-8 py-3  rounded-md border-none text-white font-bold"> Login</button>
			</div>
			<p className="px-6 text-sm text-center font-bold">Dont have an account ?
				<span className="ml-2 text-violet-600  hover:underline"><Link to={'/register'}>Register</Link>.</span>
			</p>
		</div>

        <p className="text-red-600 text-center"> {error.slice(9)}  </p>
	</form>
</div>
<Toaster />
            </div>
        </div>
        </div>
    );
};

export default Login;