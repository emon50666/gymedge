import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";


const AllTrainerDashboard = () => {
    const axiosPublic = useAxiosPublic();
 

    const { refetch, data: applied = [] } = useQuery({
        queryKey: ['applied'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/applied`);
            return res.data;
        }
    });

    // Delete user and trainer from admin dashboard
    const handelDeleteUser = (applie) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Delete This Trainer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/applied/${applie._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Trainer has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.error("Error deleting user:", err);
                        Swal.fire({
                            title: "Error!",
                            text: "There was an error deleting the user.",
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
                            <th></th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                           applied && applied.map((applie, index) =>
                                <tr key={applie._id} className="">
                                    <th> {index + 1} </th>
                                    <td> {applie.name} </td>
                                    <td> {applie._id} </td>
                                    <td>
                                        <button onClick={() => handelDeleteUser(applie)} className="">
                                            <MdAutoDelete className="text-2xl text-red-600"></MdAutoDelete>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainerDashboard;
