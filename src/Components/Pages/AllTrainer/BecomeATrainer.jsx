import { Helmet } from "react-helmet";


import Select from 'react-select'

import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { toast,Toaster } from "react-hot-toast";
import { imageUpload } from './../../../api/utils/index';

const BecomeATrainer = () => {

    const {user} = useAuth();

    const axiosPublic = useAxiosPublic();

    const options = [
        { value: 'gym', label: 'gym' },
        { value: 'running', label: 'running' },
        { value: 'youga', label: 'youga' }
      ]

      const daysOptions = [
        { value: 'Sun', label: 'Sunday' },
        { value: 'Mon', label: 'Monday' },
        { value: 'Tue', label: 'Tuesday' },
        { value: 'Wed', label: 'Wednesday' },
        { value: 'Thu', label: 'Thursday' },
        { value: 'Fri', label: 'Friday' },
        { value: 'Sat', label: 'Saturday' }
      ];



      const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        
        const age = form.age.value;
        const image = form.image.files[0];
        const skill = form.skill.value;
        const day = form.day.value;
        const time = form.time.value;

       
        


        try {
             const image_url = await imageUpload(image)
             const appliData = {
                name,
                age,
                image:image_url,
                skill,
                day,
                time,
                date: new Date()
            }
            console.log(appliData);

          await axiosPublic.post('/applied',appliData );  // Update the URL to your backend endpoint
          toast.success('Application submitted successfully!');
        } catch (error) {
          console.error('Error submitting application', error);
          toast.error('Failed to submit application');
        }
    }

    return (
        <div>
             <Helmet>
                <title>GYM EDGE || Become A Trainer </title>
            </Helmet>
            <div>
      
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Be a Trainer</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Full Name:</label>
          <input
            type="text"
            name="name"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            className="p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Age:</label>
          <input
            type="number"
            name="age"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Profile Image:</label>
          <input
            type="file"
            name="image"
           
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
            
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Available Time in a Day:</label>
          <input
            type="text"
            name="time"
           
            required
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
       
        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </form>
    </div>
    <Toaster></Toaster>
    </div>
        </div>
    );
};

export default BecomeATrainer;