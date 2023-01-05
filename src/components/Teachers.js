import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Teacher from './Teacher';


const Teachers = () => {
    const teachers = useLoaderData();
    console.log(teachers);
    return (
        <div style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/673/888/original/hand-drawn-kids-fun-party-pattern-background-vector.jpg)` }}
            className='class="grid justify-items-center bg-rose-200'>
            {
                teachers.map(teacher => <Teacher
                    key={teacher.id}
                    teacher={teacher}
                ></Teacher>)
            }
        </div>
    );
};

export default Teachers;