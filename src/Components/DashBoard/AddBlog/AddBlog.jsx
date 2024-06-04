import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { imageUpload } from "../../../api/utils";
import { toast,Toaster } from "react-hot-toast";



const AddBlog = () => {


    const axiosPublic = useAxiosPublic();
    const {mutateAsync} = useMutation({
        mutationFn: async (AddBlogData)=>{
            const {data } = await axiosPublic.post( '/blog',AddBlogData)
            return data ;
        },
        onSuccess:()=>{
            console.log('blog data save');
        }
       
        
    })

    const handelAddBlog = async (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const category = form.category.value
        const description = form.description.value;
        
       

        try {
            const image_url = await imageUpload(image)

            const AddBlogData = {title,image:image_url,category,description,date:new Date()}
        console.table(AddBlogData)

            // post request on server
            await mutateAsync(AddBlogData)
            toast.success('Blog Add SuccessFully.')

        }
        catch (error) {
            console.log(error);
        }
            
        }


    return (
        <div className="mt-10">
             <form onSubmit={handelAddBlog}>
                <div className="  text-center">
                <input type="text" name="title" required placeholder="Blog Title" className="input  mb-2 input-bordered border border-orange-500 w-full max-w-xs" /> <br />

                <input type="file" required name="image" className="input mb-2 pt-2 input-bordered  border border-orange-500 w-full max-w-xs" /> <br />

                <select name="category" className="select select-bordered mb-2 w-full border border-orange-500 max-w-xs">
                <option disabled selected> Blog Category</option>
                <option disabled selected>Select Class Category</option>
                            <option>Weight Lifting</option>
                            <option>Running</option>
                            <option>Youga</option>
                            <option>Bodybuilding</option>
                            <option>Pilates</option>
                </select> <br />
                
                <textarea name="description" placeholder="Description" className="textarea  border border-orange-500 textarea-bordered textarea-lg w-full max-w-xs" ></textarea> <br />
                <button  className="btn btn-outline md:w-2/6 mt-3  bg-orange-500 font-semibold text-base text-white">Post Now</button>

                
                </div>
               
               
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddBlog;