import { Helmet } from "react-helmet";
import Select from 'react-select';
import { useState } from 'react';

import useAxiosPublic from "../../Hook/useAxiosPublic";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../Hook/useAuth";



const AddNewSlot = () => {
    const {user} = useAuth()
  
    const axiosPublic = useAxiosPublic();

    const options = [
        { value: 'gym', label: 'gym' },
        { value: 'running', label: 'running' },
        { value: 'youga', label: 'youga' }
    ];

    const slotOptions = [
        { value: 'morning', label: 'morning' },
        { value: 'night', label: 'night' },
        { value: 'everytime', label: 'everytime' }
    ];

    const daysOptions = [
        { value: 'Sun', label: 'Sunday' },
        { value: 'Mon', label: 'Monday' },
        { value: 'Tue', label: 'Tuesday' },
        { value: 'Wed', label: 'Wednesday' },
        { value: 'Thu', label: 'Thursday' },
        { value: 'Fri', label: 'Friday' },
        { value: 'Sat', label: 'Saturday' }
    ];

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedSlotName, setSelectedSlotName] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const time = form.time.value;
     
        

        try {
            
            const addSlot = {
                name,
                time,
                skill: selectedSkills.map(skill => skill.value),
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

    return (
        <div>
            <Helmet>
                <title>GYM EDGE || Become A Trainer</title>
            </Helmet>
            <div>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-bold mb-6">Be a Trainer</h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Slot Name:</label>
                            <Select
                                isMulti
                                name="name"
                                options={slotOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                value={selectedSlotName}
                                onChange={setSelectedSlotName}
                            />
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
                            <label className="mb-1 font-semibold">Skills:</label>
                            <Select
                                isMulti
                                name="skill"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                value={selectedSkills}
                                onChange={setSelectedSkills}
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
