import Swal from "sweetalert2";
import useManageslot from "../../Hook/useManageslot";
import { MdOutlineAutoDelete } from "react-icons/md";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const ManageSlot = () => {

  const [,slots, refetch] = useManageslot();
  
  
  const axiosPublic = useAxiosPublic();
  

  // Delete user and trainer from admin dashboard
  const handleDeleteSlots = (slot) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/slots/${slot._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your slot has been deleted.",
                icon: "success"
              });
              refetch();
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the slot.",
                icon: "error"
              });
            }
            console.log(res.data);
          })
          .catch(err => {
            console.error("Error deleting slot:", err);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the slot.",
              icon: "error"
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {slots && slots.map(slot => (
              <tr key={slot._id} className="bg-base-200">
                <td>{slot.name}</td>
                <td>{slot.email}</td>
                <td>
                  <button onClick={() => handleDeleteSlots(slot)}>
                    <MdOutlineAutoDelete className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSlot;
