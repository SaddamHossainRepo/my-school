import React, { useContext } from 'react';
import { TeacherContext } from './Main';
import { useLoaderData } from 'react-router-dom';

const TeacherDetails = () => {

    const teacher = useLoaderData()


    return (
        <div className='bg-blue-900 flex  justify-center'>
            <div className='h-36 w-96 rounded mt-10 mb-10 p-5 pb-5 bg-fuchsia-600 '>
                <p className='text-gray-100 text-4xl'>{teacher.name}</p>
                <p className='text-zinc-200 text-2xl'>{teacher.email}</p>
                <p className='text-amber-300 text-xl'>{teacher.phone}</p>
            </div>

        </div>
    );
};

export default TeacherDetails;