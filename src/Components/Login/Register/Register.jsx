import { Link } from "react-router-dom";


const Register = () => {


    const handeRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const password = form.password.value;
        const loginInfo = { name,email,photo, password };
        console.log(loginInfo);


    }

    return (
        <div>
            <div className="bg-black/50 pt-10 pb-10">
            <div className="flex flex-col max-w-md p-6 m-auto   bg-white/55 justify-center shadow-2xl shadow-white/40 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text--400 text-center">
		<h1 className="my-3 text-4xl font-bold">Create A Account</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form onSubmit={handeRegister} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2 font-semibold  text-md">Name </label>
				<input type="text" name="name" id="name" placeholder="mak joh" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50 " />
			</div>
            <div>
				<label htmlFor="email" className="block mb-2 font-semibold  text-md">Email </label>
				<input type="email" name="email" id="email" placeholder="demo@gmail.com" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50 " />
			</div>
            <div>
				<label htmlFor="url" className="block mb-2 font-semibold  text-md">Photo Url </label>
				<input type="url" name="photo" id="photo" placeholder="Photo Url" className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:border-gray-300 dark:bg-gray-50 " />
			</div>
			<div>
            <label htmlFor="password" className="block mb-2 font-semibold   text-md">Password </label>
				<input type="password" name="password" id="password" placeholder="12345***" className="w-full px-3 py-2 border rounded-md  bg-gray-200 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full  btn btn-primary bg-orange-500 px-8 py-3 font-semibold rounded-md border-none dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center font-bold">You have an account ?
				<span className="ml-2 text-violet-600 hover:underline"><Link to={'/login'}>LogIn</Link>.</span>
			</p>
		</div>
	</form>
</div>
            </div>
        </div>
    );
};

export default Register;