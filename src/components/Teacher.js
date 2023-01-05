import React from 'react';
import { useNavigate } from 'react-router-dom';

const Teacher = ({ teacher }) => {
    const navigate = useNavigate();
    const handleTeacherDetails = (id) =>{
        navigate(`/teacher/${id}`)
    }
    const { id, name, pic, email, phone } = teacher;
    return (
        <div className='mb-12'>

            <div className='flex justify-center items-center '>
                <img className=' h-40 w-40   rounded-full border-4 border-blue-600' src={pic} alt="" />
            </div>
            <div className='text-xl p-2 hover:text-base bg-pink-500 text-white'>
                <p className=''>{name}</p>
                
            </div>
            <div>

                <button onClick={()=> handleTeacherDetails(id)} className='text-md text-White bg-green-600 hover:bg-green-800 p-2 rounded'>View Deatils</button>
            </div>


        </div>
    );
};

export default Teacher;