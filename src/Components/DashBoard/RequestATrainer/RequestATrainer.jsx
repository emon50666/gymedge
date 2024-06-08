
import { toast,Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
const RequestATrainer = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    
    
    const modalHandler = async () => {
      
        console.log('I want to be a trainer');
      
        try {
          const currentUser = {
            email: user?.email,
            role: 'guest',
            status: 'Requested',
          };
          
          // Await the axios PUT request and destructure the response
          const { data } = await axiosPublic.put('/users', currentUser);
      
          // Check the modifiedCount from the response data
          if (data.modifiedCount > 0) {
            toast.success('Trainer request success');
          } else {
            toast.success('Please wait for admin approval');
          }
          console.log(data);
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      };

    return (
        <div>
          <div className="mt-32  ">
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_6" className="btn"> I Want To Trainer</label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                     <button onClick={modalHandler} className="btn bg-orange-500 text-center text-white "> Yes
                     
                      </button>
                    
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                      </div>
                    </div>
                    <Toaster></Toaster>
                  </div>
                  
                </div>
        </div>
    );
};

export default RequestATrainer;