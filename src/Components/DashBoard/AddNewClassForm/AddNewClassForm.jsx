import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../Hook/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from './../../Hook/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';


const AddNewClassForm = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()
    const [imagePrevew, setImagePrevew] = useState()


  
    const {mutateAsync} = useMutation({
        mutationFn: async (addClassData)=>{
            const {data } = await axiosPublic.post( '/blog',addClassData)
            return data ;
        },
        onSuccess:()=>{
            console.log(' data save');
        }
       
        
    })

    const handelAddClass = async (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const category = form.category.value
        



        const admin = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        try {
            const image_url = await imageUpload(image)

            const addClassData = { name, image: image_url,description, category, admin, date: new Date() }
            console.table(addClassData);

            // post request on server
            await mutateAsync(addClassData)
            toast.success('Class Add SuccessFully.')

        }
        catch (error) {
            console.log(error);
        }
    }




    // handel image change 
    const handelImage = image =>{
        setImagePrevew(URL.createObjectURL(image))
      

    }

    return (
        <div className=" ">


            <form onSubmit={handelAddClass}>
                <div className="flex-1">

                    <div>
                        <label htmlFor="name" className="block mb-2    text-sm">Class Name </label>
                        <input type="text" name="name" id="name" placeholder="Class Name" className="w-full px-3 py-2 border border-dotted rounded-md  border-orange-500  " />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="image"

                            className="block mb-2    text-sm">
                            Class Name </label>
                        <input type="file" name="image"
                            onChange={e => handelImage(e.target.files[0])}
                            id="image"

                            className="w-full border-dotted  px-3 py-2 border rounded-zmd  border-orange-500  "
                            
                    
                        />
                      
                       <div className="absolute ml-48 md:ml-52  top-[230px] md:top-[190px]  ">
                       {
                            imagePrevew && <img src={imagePrevew} className="w-10" />
                        }
                       </div>
                    </div>
                    
                    <div className="mt-3">
                        <label htmlFor="description" className="block mb-2    text-sm">Class Details </label>
                        <textarea type="text" name="description" id="description" placeholder="Class Details" className="w-full  px-3 py-2 border border-dotted rounded-md  border-orange-500  " />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="category" className="block mb-2    text-sm">Class Category </label>
                        <select type="select" name="category" id="category" className="w-full  px-3 py-2 border border-dotted rounded-md  border-orange-500  ">
                            <option disabled selected>Select Class Category</option>
                            <option>Weight Lifting</option>
                            <option>Running</option>
                            <option>Youga</option>
                            <option>Bodybuilding</option>
                            <option>Pilates</option>
                        </select>
                    </div>
                    <button className="btn btn-outline bg-orange-500 text-white text-base mt-3 w-full">Add Class</button>
                </div>

            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddNewClassForm;