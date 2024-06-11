import { Helmet } from "react-helmet";
import Select from 'react-select';
import { useState } from 'react';
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const AddNewSlot = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

  

  
 
    const [selectedDays, setSelectedDays] = useState([]);
 
    const [selectedClass, setSelectedClass] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const time = form.time.value;

        try {
            const addSlot = {
                name,
                time,
               class:selectedClass.map(clas => clas.value),
                day: selectedDays.map(day => day.value),
                email: user?.email,
                date: new Date()
            };
            console.log(addSlot);

            await axiosPublic.post('/slots', addSlot);  // Update the URL to your backend endpoint
            toast.success('Application submitted successfully!');
        } catch (error) {
            console.error('Error submitting application', error);
            toast.error('Failed to submit application');
        }
    };

    // Admin class show
    const { data: jymAllClass = [] } = useQuery({
        queryKey: ['jymAllClass'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jymAllClass`)
            return res.data;
        }
    });

    const classOptions = jymAllClass.map(jymClass => ({
        value: jymClass.name,
        label: jymClass.name
    }));




    //  slot day
    const { data: applied = [] } = useQuery({
        queryKey: ['applied'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/applied`)
            return res.data;
        }
    });



    
    const daysOptions = applied.map(applie => ({
        value: applie.day,
        label: applie.day
    }));


    return (
        <div>
            <Helmet>
                <title>GYM EDGE || Become A Trainer</title>
            </Helmet>
            <div>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-bold mb-6">Be a Trainer</h1>


                    <div className="flex gap-3 mb-3">
                      
                        <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                     
                        <input type="email" disabled defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     
                        <div className="flex flex-col">
                      

                            <label className="mb-1 font-semibold">Class Name:</label>
                            <Select
                                isMulti
                                name="class"
                                options={classOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                value={selectedClass}
                                onChange={setSelectedClass}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Slot Name:</label>
                       
                            <input type="text" name="name" placeholder="Slot Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Slot Time:</label>
                            <input
                                type="number"
                                name="time"
                                placeholder="Slot Time"
                                required
                                className="p-2 border border-gray-300 rounded-md"

                            />
                        </div>
                      
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Available Days a Week:</label>
                            <Select
                                isMulti
                                name="day"
                                options={daysOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                value={selectedDays}
                                onChange={setSelectedDays}
                            />
                        </div>
                        <div className="sm:col-span-2 flex justify-end">
                            <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700">
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default AddNewSlot;
